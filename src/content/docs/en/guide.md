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

Episode progress is off by default. To turn it on, open Settings and turn on **Track Episode Progress** under Interface. The progress control then appears on the detail page while an entry is Watching. Turning the setting off hides your progress but doesn't delete it.

Scroll down for the overview, voice cast, and a summary of each episode. Tap the heart to favorite the entry, or the share button to make a poster you can send to friends. The **···** menu has more options, such as converting between a series and its seasons, or marking an entry as Dropped.

## Rewatch a show {#rewatch}

To watch something again, open its detail page and change its status from Watched to Watching. AniShelf asks **Are You Rewatching?**

- **Start Rewatch** marks the entry as Rewatching and clears its episode progress, so you can track the rewatch from episode 1.
- **Not a Rewatch** only changes the status.

When you mark a rewatch as Watched, AniShelf adds one to its rewatch count. If you change it to any other status, the rewatch ends without being counted.

A badge next to the watch status shows the current watch, such as **Watch #2**, or how many times you’ve rewatched the entry. Tap it to turn **Rewatching** on or off, or to correct **Times Rewatched**. In the library, the count appears next to the status, such as “Watched ×2”.

## Airing reminders {#reminders}

Eligible series show their broadcast times on the detail page. For a show that’s currently airing, open the **···** menu and choose **Notifications** > **Enable**. AniShelf then schedules a notification for each new episode. Allow notifications when AniShelf asks.

- **Default timing:** in Settings, under Airing Reminders, choose a **Default Timing** from 1 hour before to 1 hour after airtime. It starts at 15 minutes before.
- **Timing for one anime:** in the same **Notifications** menu, choose **Reminder Timing**. Turn off **Use Default**, choose **Before Airtime** or **After Airtime**, then set the hours and minutes.
- **Manage reminders:** in Settings, tap **Reminders** to see every reminder, change its timing, or remove it. **Refresh** reschedules reminders from the latest broadcast times, and **Remove All** removes every reminder on the device.

Broadcast schedules come from TVmaze, so some shows don’t have them. Reminders are set separately on each device.

## Sync, back up, and export {#sync}

Tap the settings icon at the top right to open Settings, which also shows an overview of your library.

- **iCloud Sync:** turn it on in Settings on each device, and sign in to the same Apple Account on all of them. Your library, watch progress, and settings stay in sync. The first time you turn it on, AniShelf may ask which data to keep. See [Resolve an iCloud Sync conflict](#icloud-conflict).
- **Backup & Restore:** **Backup** saves your whole library and settings to a `.mallib` file. Your TMDb API key isn’t included. **Restore** replaces your current library with the backup, so make a new backup first if you want to keep what you have now.
- **Export as...:** save your library as TXT, CSV, TSV, JSON, or XLSX to read or use in other apps.

> Only `.mallib` backups can be restored. AniShelf can’t import an exported file. Turn off iCloud Sync before you restore a backup, then turn it on again afterward.

## Change the anime info language {#language}

AniShelf can show titles, overviews, and other anime info in English, Chinese, or Japanese. By default, it follows your device’s language. To choose one, open Settings, turn off **Follow System** under Anime Info Language, and pick a language.

The new language applies only to info that AniShelf fetches afterward. AniShelf asks whether to refresh your existing entries. Tap **Refresh** to update them now. With a large library, this can take a while. To refresh later, tap **Refresh Infos** in Settings.

With iCloud Sync on, you can also read your library from the command line with [anishelf-cli](/#terminal).

## Troubleshooting {#troubleshooting}

### The API key won’t validate, or search finds nothing {#tmdb-connection}

Access to TMDb can be unreliable on some networks. Try these steps:

1. Check that you copied the API Key, not the API Read Access Token.
2. Turn your VPN or network proxy off or on. Some proxy rules interfere with TMDb.
3. Turn on **Use TMDb Proxy** in Settings. AniShelf then sends TMDb requests through the developer’s relay server instead of directly to TMDb.

If you already use a VPN or another proxy, leave **Use TMDb Proxy** off. Connecting to TMDb directly is usually faster and more reliable. Posters and other images don’t go through the relay, so they can still fail to load on some networks. To learn what the relay receives, see the [Privacy Policy](/privacy/#relay).

### Resolve an iCloud Sync conflict {#icloud-conflict}

When you turn on iCloud Sync, or rebuild it, AniShelf compares the library on this device with the one in iCloud. If the same anime has different data in each place, AniShelf shows **Resolve iCloud Sync Conflict** and the number of affected entries.

- **Use iCloud:** keep the iCloud version of those entries. This device’s changes to them are replaced.
- **Use This Device:** keep this device’s version and upload it to iCloud. Your other devices get it the next time they sync.
- **Cancel:** turn iCloud Sync off. Your library doesn’t change.

Either way, anime that exist in only one place are kept. If you aren’t sure which version is right, cancel, make a backup, and then turn iCloud Sync on again.

### iCloud Sync shows an error or sync issues {#icloud-issues}

Open Settings and check the status under iCloud Sync.

1. If the last sync failed, tap **Retry**. If iCloud storage is full, free up space or upgrade your plan first.
2. If an orange line such as “3 sync issues” appears under the status, tap it to open **Sync Issues**, which explains each problem:
   - **Entries not loaded:** AniShelf retries these automatically. If TMDb no longer lists an entry, you can tap **Discard from iCloud…** to delete it. The deletion syncs to your other devices.
   - **Changes not uploaded:** iCloud didn’t accept these changes. They stay on this device, and AniShelf tries again on later syncs.
   - **Unreadable records:** a newer version of AniShelf may have saved these. Update AniShelf on this device.
3. If problems continue, tap **Rebuild iCloud Sync** in Settings. AniShelf fetches your iCloud library again and reconciles it with this device. It may ask you to [resolve a conflict](#icloud-conflict).

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
