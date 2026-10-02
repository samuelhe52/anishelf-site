---
title: 使用指南
description: 完成 AniShelf 的初始设置，添加第一部动画，用好追踪、提醒与同步功能。
---

## 开始使用 {#setup}

AniShelf 支持 iOS 或 iPadOS 26 及以上版本的 iPhone 与 iPad；在搭载 Apple 芯片、运行 macOS 26 及以上版本的 Mac 上，也能以 iPad App 的形式运行。

首次打开 AniShelf 时，需要填入一个 TMDb API 密钥。App 中的标题、简介、海报和每集信息都来自 The Movie Database（TMDb），个人使用可以免费申请密钥。AniShelf 是免费 App，不提供公用的密钥，需要你自己申请一个。

## 申请 TMDb API 密钥 {#api-key}

1. 在 [The Movie Database](https://www.themoviedb.org/signup) 注册一个免费账户。
2. 登录后，打开 [API 申请页面](https://www.themoviedb.org/settings/api/request)。也可以在账户设置的 API 部分找到它。
3. 选择 **Personal Use**（个人使用），然后填写表单：
   - **Application Name**（应用名称）：AniShelf
   - **Application URL**（应用网址）：https://anishelf.konakona.dev
   - **Type of Use**（使用类型）：Mobile Application
   - **Application Summary**（应用概述）：例如 “An anime library app for tracking the series and films I watch.”
   - 填写联系信息，同意条款后点击 **Subscribe**。
4. 回到 [API 设置页面](https://www.themoviedb.org/settings/api)，复制页面下方的 **API Key**。请复制 API Key，不要复制 API Read Access Token（读取访问令牌）。
5. 按提示把密钥粘贴到 AniShelf 中。之后如需更换，可以在设置中修改。

## 添加动画 {#add}

点击右下角的搜索按钮，输入番剧或动画电影的名称进行搜索。

- **番剧**：通过结果下方的滑块，选择添加整部系列还是单独某一季。用结果右上角的按钮选中系列，或者一季、多季，然后点击 **加入资料库...**。
- **动画电影**：选中后点击 **加入资料库...**。
- **一次添加多部**：点击搜索页面右上角的 **批量添加**，输入多个标题或 TMDb ID。

> 有些番剧虽然分几段播出，官方却没有分季，集数是连续的。典型的例子是《葬送的芙莉莲》，它的“第一季”包含了全部 38 集。遇到这种情况，请添加整部系列。

## 浏览资料库 {#library}

- 点击左下角的图标，可以在网格、列表和图库视图之间切换。
- 用下方正中央的状态栏筛选条目，例如只显示“在看”。
- 长按条目可以进行更多操作。在列表视图中，左滑或右滑条目可以快速更新观看状态或删除条目。
- 如需同时修改多个条目，在列表或网格视图中点击右上角的 **选择**，即可批量修改观看状态、评分、收藏和日期，或批量删除。

## 记录观看 {#track}

双击条目即可打开详情页，在那里可以记录：

- 观看状态：想看、在看、已看完或中断
- 开始和完成日期
- 观看进度
- 评分和笔记

向下滑动可以查看简介、声优阵容和每集摘要。点击心形按钮可以收藏条目；点击分享按钮可以生成一张海报，推荐给朋友。**···** 菜单里还有更多选项，例如在系列和单季之间转换，或者将条目标记为中断。

## 播出提醒 {#reminders}

符合条件的番剧会在详情页显示播出时间。对于正在连载的番剧，可以通过 **···** 菜单开启提醒。之后 AniShelf 会为每一集新番安排通知，可以提前，也可以准点。请在 AniShelf 询问时允许通知。

播出时间来自 TVmaze，部分番剧没有相关数据。提醒需要在每台设备上分别设置。

## 同步、备份与导出 {#sync}

点击右上角的设置图标即可打开设置，这里还能看到资料库的总览。

- **iCloud 同步**：在每台设备的设置中开启，并确保各设备登录同一个 Apple 账户。资料库、观看进度和设置会保持同步。
- **备份与恢复**：将整个资料库和设置备份为文件，或者恢复之前的备份。
- **导出为...**：将资料库导出为 TXT、CSV、TSV、JSON 或 XLSX 文件。

开启 iCloud 同步后，还可以用 [anishelf-cli](/zh/#terminal) 在命令行中查看资料库。

## 疑难解答 {#troubleshooting}

### API 密钥验证不通过，或者搜索不到结果 {#tmdb-connection}

在部分网络环境下，访问 TMDb 可能不稳定。请依次尝试：

1. 确认复制的是 API Key，而不是 API Read Access Token。
2. 关闭或开启 VPN（梯子）等网络代理。不同代理的规则可能影响对 TMDb 的访问。
3. 在设置中开启 **使用TMDb代理**。开启后，AniShelf 会通过开发者自建的中转服务器请求 TMDb API，而不是直连 TMDb。

如果你已经在使用 VPN 或其他网络代理，建议保持 **使用TMDb代理** 关闭，直连 TMDb 通常更快、更稳定。海报等图片不会经过中转服务器，因此在部分网络环境下仍可能加载失败。中转服务器会收到哪些信息，请参阅[隐私政策](/zh/privacy/#relay)。

### 遇到其他问题 {#other-problems}

请前往[支持与反馈](/zh/support/)报告问题或寻求帮助。

## 常见问题 {#faq}

### 可以用 AniShelf 看番或下载吗？ {#streaming}

不可以。AniShelf 只负责记录你看过的番，不管你在哪里看。它不提供在线播放、下载或剧集链接，也不是漫画或小说阅读器。

### AniShelf 能和 Bangumi、AniList 或 TMDb 同步吗？ {#other-services}

暂时不能。与其他平台同步观看数据已在计划中，但工作量较大，目前还没有确定的时间。

### 支持 iOS 26 以下的系统吗？ {#older-versions}

不支持。App 的设计大量使用了液态玻璃（Liquid Glass），需要 iOS 和 iPadOS 26 及以上版本。

### 有安卓或鸿蒙版吗？ {#android}

暂时没有这方面的计划。
