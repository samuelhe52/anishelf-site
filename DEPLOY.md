# Deployment

AniShelf is a static Astro site served by Nginx at
**https://anishelf.konakona.dev**. The deployment workflow builds on GitHub
Actions, uploads a new release over SSH, and atomically activates it.

Origin addresses, SSH identities, and private keys belong in local SSH
configuration or GitHub environment secrets. Keep them out of this repository.

## Release layout

```text
/var/www/anishelf.konakona.dev/
  releases/<release-id>/
  current -> releases/<release-id>
  .deploy.lock
```

The uploader creates a fresh directory, uploads `dist/`, and switches `current`
atomically. The origin then checks the uncached release marker and the `/`,
`/zh/`, and `/ja/` HTTPS responses. A failed check restores the previous symlink;
on a first deployment it removes the failed symlink. Successful deployments
keep the newest five directories, plus the active and previous releases when
either falls outside those five. Incomplete uploads never become active.

Activation and rollback share a server-side lock. Actions also serializes
production runs and does not cancel an active deployment. If an SSH connection
is interrupted during activation, check `current` and the release marker before
retrying; an SSH error alone cannot establish whether activation finished.

## One-time origin setup

These steps change remote state. Run them only after explicit authorization.
Confirm the intended origin and inspect existing Nginx sites before installing
the new virtual host.

1. Create a dedicated `anishelf-deploy` account and SSH key. Give the account
   ownership of `/var/www/anishelf.konakona.dev` and its `releases/` directory;
   use mode `755` so Nginx can read them. No deployment sudo privileges are
   needed. The account needs Bash, rsync, curl, GNU find/coreutils, and `flock`
   (util-linux). The server does not need Node.js.
2. Add the key's public half to that account's `authorized_keys` with the
   `restrict` option to disable forwarding and PTY access. Shell execution is
   required for rsync and release activation. Use this key only for AniShelf.
3. Add a Cloudflare DNS record for `anishelf.konakona.dev` pointing at the
   confirmed origin address. Publish an AAAA record only if origin IPv6 works.
   Permit HTTP/HTTPS to Nginx and SSH from the deployment runner.
4. Create `/var/www/letsencrypt/.well-known/acme-challenge/`, install
   `deploy/nginx-bootstrap.conf` as the new site, enable it, run `sudo nginx -t`,
   then reload Nginx. The temporary site serves ACME challenges and otherwise
   returns 503; it does not publish application content.
5. Issue a certificate with the server's existing certificate tooling. For
   Certbot webroot issuance:

   ```bash
   sudo certbot certonly --webroot -w /var/www/letsencrypt -d anishelf.konakona.dev
   ```

   Ensure Cloudflare allows the ACME path through to HTTP without caching or
   redirecting it. Existing edge redirects may require DNS-only mode during
   issuance. Verify the server's renewal timer and Nginx reload hook.
6. Replace the temporary site with `deploy/nginx.conf`. Its certificate paths
   assume the Certbot lineage is named `anishelf.konakona.dev`; adjust them if
   the issued lineage differs. Run `sudo nginx -t` before reloading.
7. Use Cloudflare **Full (strict)** TLS. Do not apply a Cache Everything rule to
   HTML, `/og/`, or `/.well-known/deployment.txt`; explicitly bypass caching for
   the marker if existing zone-wide rules override origin headers. Nginx gives
   content-hashed `/_astro/` assets a one-year immutable cache and revalidates
   other site content. Missing routes return the generated 404 page with a 404
   status.

The full TLS site can be configured before the first release; application
requests will return 404 until `current` exists.

## GitHub configuration

Create a `production` environment restricted to the `main` branch. Add these
environment secrets:

| Secret | Value |
| --- | --- |
| `SSH_HOST` | Public origin hostname or IPv4 address, reachable on SSH port 22 |
| `SSH_USER` | `anishelf-deploy` |
| `SSH_KEY` | Dedicated private key, including its newlines |
| `SSH_KNOWN_HOSTS` | Verified known-hosts entry for `SSH_HOST` |

Verify the SSH host key against the server through an already trusted access
path. Do not trust a fresh `ssh-keyscan` result without checking its fingerprint.
The workflow enables strict host-key checking and never prints key values.
It assumes direct SSH access on port 22. Local SSH aliases and proxy settings
are not available on the GitHub runner.

## Publishing

The Check workflow runs `npm ci`, `npm run check`, and `npm run build` on pushes
and PRs using Node.js 24. The Deploy workflow repeats these checks, then uploads
and activates the exact checked-out commit. It runs only through
`workflow_dispatch` and only on `main`; pushes do not publish.

Before publishing, visually review English, Chinese, and Japanese in light and
dark mode, on desktop and at 390px width. Hero copy or screenshot changes require
`npm run og` and review of the regenerated `public/og/` images before committing.
CI does not regenerate them or replace the visual review.

After the setup and a separately authorized push of these files, explicitly
run **Actions → Deploy → Run workflow → main** to publish. Check the resulting
HTTPS pages and the workflow output.

For an explicitly authorized local deployment, build first and use the dedicated
account. Configure its identity and verified host key in your local SSH
configuration, then set `SSH_HOST` to that destination:

```bash
npm run check
npm run build
SSH_HOST=deployment-target bash scripts/deploy.sh
```

The script uploads an existing build; it does not commit, push, configure Nginx,
change DNS, or modify GitHub secrets. Local dirty changes can be included in the
build, so use a clean checkout when a release must correspond exactly to a commit.

## Rollback

Set `SSH_HOST` to the configured deployment SSH destination, then list releases
and inspect `current` through the dedicated account. For an
explicitly authorized rollback, substitute an existing release ID:

```bash
ssh "$SSH_HOST" 'ls -1 /var/www/anishelf.konakona.dev/releases; readlink /var/www/anishelf.konakona.dev/current'
ssh "$SSH_HOST" 'bash -s -- rollback RELEASE_ID' < scripts/release.sh
```

Rollback uses the same lock, validation, HTTPS checks, and restoration-on-failure
behavior as activation. It does not rebuild or re-upload the selected release.
