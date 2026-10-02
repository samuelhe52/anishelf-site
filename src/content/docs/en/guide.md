---
title: User Guide
description: Set up AniShelf, add your first anime, and get the most out of tracking, reminders, and sync.
---

## Set up AniShelf {#setup}

AniShelf runs on iPhone and iPad with iOS or iPadOS 26 or later. It also runs on Macs with Apple silicon and macOS 26 or later, as the iPad app.

The first time you open AniShelf, it asks for a TMDb API key. The Movie Database (TMDb) supplies the titles, overviews, posters, and episode details you see in the app. A key is free for personal use. AniShelf is free and doesn't come with a shared key, so you request your own.

## Get a TMDb API key {#api-key}

1. Create a free account on [The Movie Database](https://www.themoviedb.org/signup).
2. Sign in, then go to the [API request page](https://www.themoviedb.org/settings/api/request). You can also find it under API in your account settings.
3. Choose **Personal Use**, then fill in the form:
   - **Application Name:** AniShelf
   - **Application URL:** https://anishelf.konakona.dev
   - **Type of Use:** Mobile Application
   - **Application Summary:** for example, “An anime library app for tracking the series and films I watch.”
   - Fill in your contact details, accept the terms, and click **Subscribe**.
4. Go back to the [API settings page](https://www.themoviedb.org/settings/api) and copy the **API Key** near the bottom. Use the API Key, not the API Read Access Token.
5. Paste the key into AniShelf when it asks. To change it later, open Settings.

## Add anime {#add}

Tap the search button at the bottom right, then search for a series or film by name.

- **Series:** use the slider below the results to add the whole series or individual seasons. Select the series, or one or more seasons, with the button at the top right of the result, then tap **Add To Library...**.
- **Films:** select the film and tap **Add To Library...**.
- **Several at once:** tap **Batch Add** at the top right of the search page, then enter a list of titles or TMDb IDs.

> Some shows air in parts but are released as a single season with continuous episode numbers. *Frieren: Beyond Journey’s End* is one: its “Season 1” holds all 38 episodes. For shows like this, add the whole series.

## Browse your library {#library}

- Tap the icon at the bottom left to switch between the grid, list, and gallery views.
- Use the status bar at the bottom center to show one status at a time, such as Watching.
- Touch and hold an entry for more actions. In list view, swipe an entry left or right to update its status or delete it.
- To change many entries at once, tap **Select** at the top right of the list or grid view. You can change the status, score, favorite, and dates of the selected entries, or delete them.

## Track what you watch {#track}

Double-tap an entry to open its detail page. There you can record:

- its watch status: Planned, Watching, Watched, or Dropped
- start and finish dates
- episode progress
- your score and notes

Scroll down for the overview, voice cast, and a summary of each episode. Tap the heart to favorite the entry, or the share button to make a poster you can send to friends. The **···** menu has more options, such as converting between a series and its seasons, or marking an entry as Dropped.

## Airing reminders {#reminders}

Eligible series show their broadcast times on the detail page. For a show that’s currently airing, open the **···** menu to turn on reminders. AniShelf then schedules a notification for each new episode, ahead of time or right as it airs. Allow notifications when AniShelf asks.

Broadcast schedules come from TVmaze, so some shows don’t have them. Reminders are set separately on each device.

## Sync, back up, and export {#sync}

Tap the settings icon at the top right to open Settings, which also shows an overview of your library.

- **iCloud Sync:** turn it on in Settings on each device, and sign in to the same Apple Account on all of them. Your library, watch progress, and settings stay in sync.
- **Backup & Restore:** back up your whole library and settings to a file, or restore an earlier backup.
- **Export as...:** save your library as TXT, CSV, TSV, JSON, or XLSX.

With iCloud Sync on, you can also read your library from the command line with [anishelf-cli](/#terminal).

## Troubleshooting {#troubleshooting}

### The API key won’t validate, or search finds nothing {#tmdb-connection}

Access to TMDb can be unreliable on some networks. Try these steps:

1. Check that you copied the API Key, not the API Read Access Token.
2. Turn your VPN or network proxy off or on. Some proxy rules interfere with TMDb.
3. Turn on **Use TMDb Proxy** in Settings. AniShelf then sends TMDb requests through the developer’s relay server instead of directly to TMDb.

If you already use a VPN or another proxy, leave **Use TMDb Proxy** off. Connecting to TMDb directly is usually faster and more reliable. Posters and other images don’t go through the relay, so they can still fail to load on some networks. To learn what the relay receives, see the [Privacy Policy](/privacy/#relay).

### Something else isn’t working {#other-problems}

See [Support](/support/) to report a bug or get help.

## FAQ {#faq}

### Can I watch or download anime with AniShelf? {#streaming}

No. AniShelf keeps track of what you watch, wherever you watch it. It doesn’t stream, download, or link to episodes, and it isn’t a manga or novel reader.

### Can AniShelf sync with AniList, Bangumi, or TMDb? {#other-services}

Not yet. Syncing watch data with other services is planned, but it’s a large project and has no release date.

### Does AniShelf work on versions earlier than iOS 26? {#older-versions}

No. The app’s design relies on Liquid Glass, which needs iOS and iPadOS 26 or later.

### Is there an Android version? {#android}

There are no plans for one.
