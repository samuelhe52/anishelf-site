export const locales = ['en', 'zh', 'ja'] as const;
export type Locale = (typeof locales)[number];

export const SITE = 'https://anishelf.konakona.dev';
export const APP_STORE_URL = 'https://apps.apple.com/app/id6759359144';
export const TESTFLIGHT_URL = 'https://testflight.apple.com/join/ns3sR38X';
export const GITHUB_URL = 'https://github.com/samuelhe52/AniShelf';
export const CLI_URL = 'https://github.com/samuelhe52/anishelf-cli';
/** Tagged anishelf-cli release that the install command pins, per the CLI README. */
export const CLI_VERSION = 'v0.2.0';
export const CLI_SKILL_URL =
  'https://github.com/samuelhe52/anishelf-cli/blob/main/skills/anishelf-cli/SKILL.md';
export const PRIVACY_URL = 'https://github.com/samuelhe52/AniShelf/blob/main/PRIVACY_POLICY.md';
export const TMDB_KEY_URL = 'https://www.themoviedb.org/settings/api';
export const CONTACT_EMAIL = 'samuelhe52@outlook.com';
export const X_URL = 'https://x.com/SamuelHe89';
export const BLOG_URL = 'https://blog.konakona.dev';

export const localePath = (locale: Locale) => (locale === 'en' ? '/' : `/${locale}/`);

/** BCP 47 tags used for `lang` and `hreflang`. */
export const htmlLang: Record<Locale, string> = { en: 'en', zh: 'zh-Hans', ja: 'ja' };
export const ogLocale: Record<Locale, string> = { en: 'en_US', zh: 'zh_CN', ja: 'ja_JP' };
export const badgeLocale: Record<Locale, 'en-us' | 'zh-cn' | 'ja-jp'> = {
  en: 'en-us',
  zh: 'zh-cn',
  ja: 'ja-jp',
};
export const localeName: Record<Locale, string> = { en: 'English', zh: '简体中文', ja: '日本語' };
export const localeShort: Record<Locale, string> = { en: 'EN', zh: '中', ja: '日' };

type Volume = {
  /** Short spine label, written vertically on the shelf. */
  spine: string;
  title: string;
  body: string;
  points?: string[];
};

export type Strings = {
  meta: { title: string; description: string; ogAlt: string };
  nav: { features: string; cli: string; download: string; language: string; skip: string };
  hero: {
    kicker: string;
    titleLines: string[];
    lede: string;
    testflight: string;
    facts: string[];
    spine: string;
  };
  shelfLabel: string;
  volumeLabel: (n: number) => string;
  volumes: {
    collect: Volume;
    track: Volume & { statuses: [string, string, string, string] };
    remind: Volume & {
      now: string;
      airsNow: (episode: string) => string;
      airsIn: (episode: string, minutes: number) => string;
      source: string;
    };
    reflect: Volume;
    everywhere: Volume & { exportLabel: string; devices: string };
    terminal: Volume & { install: string; agents: string; readOnly: string };
  };
  notes: {
    title: string;
    items: { title: string; body: string; link?: { label: string; href: string } }[];
  };
  outro: { title: string; body: string; testflight: string };
  footer: {
    privacy: string;
    source: string;
    contact: string;
    blog: string;
    tmdb: string;
    apple: string;
    artwork: string;
    madeBy: string;
  };
  alt: Record<string, string>;
};

const en: Strings = {
  meta: {
    title: 'AniShelf — A bookshelf for the anime you watch',
    description:
      'AniShelf is a free, native iPhone and iPad app for tracking anime series and films: episode progress, ratings, broadcast reminders, iCloud Sync, and export.',
    ogAlt: 'AniShelf app icon beside the headline “Every anime you’ve watched, on one shelf.”',
  },
  nav: {
    features: 'Features',
    cli: 'CLI',
    download: 'Download',
    language: 'Language',
    skip: 'Skip to content',
  },
  hero: {
    kicker: 'For iPhone & iPad · iOS 26',
    titleLines: ['Every anime', 'you’ve watched,', 'on one shelf.'],
    lede: 'AniShelf is a native library for anime series and films. Track every episode, score and remember what you finish, and get a nudge when the next one airs.',
    testflight: 'Or join the TestFlight beta',
    facts: ['Free', 'No account', 'Open source'],
    spine: 'アニシェルフ',
  },
  shelfLabel: 'Browse the volumes',
  volumeLabel: (n) => `Vol. ${String(n).padStart(2, '0')}`,
  volumes: {
    collect: {
      spine: 'Collect',
      title: 'Build the library you actually watched.',
      body: 'Search The Movie Database in English, Chinese, or Japanese. Add a whole series, a single season, or a film, or paste a list of titles and TMDb IDs to add them all at once.',
      points: [
        'Three ways to browse: a poster grid, a detailed list, and a gallery of large cards',
        'Favorites, filters, and sorting that keep a large library tidy',
        'Multi-select to change status, score, or dates for many entries at once',
      ],
    },
    track: {
      spine: 'Track',
      title: 'Down to the episode.',
      body: 'Every entry keeps its own watch status, start and finish dates, episode progress, score, and notes. Episode summaries, cast, and TMDb ratings are a tap away.',
      statuses: ['Planned', 'Watching', 'Watched', 'Dropped'],
    },
    remind: {
      spine: 'Remind',
      title: 'Never miss the new episode.',
      body: 'See broadcast times for currently airing shows, then turn on reminders. AniShelf schedules a notification for each new episode, early or right on time.',
      now: 'now',
      airsNow: (ep) => `${ep} is airing now.`,
      airsIn: (ep, m) => `${ep} airs in ${m} minutes.`,
      source: 'Broadcast schedules are provided by TVmaze where available.',
    },
    reflect: {
      spine: 'Reflect',
      title: 'Look back at the whole shelf.',
      body: 'Library stats count what you’ve finished, what’s in progress, and what you love. It also breaks your library down into series, seasons, and films, with your total watch time.',
    },
    everywhere: {
      spine: 'Sync',
      title: 'Same shelf, every device.',
      body: 'iCloud Sync keeps your library, progress, and preferences in step across iPhone and iPad. On iPad, the inspector puts details right beside your library.',
      points: [
        'Private iCloud database. No AniShelf account to create.',
        'Full backups you can restore at any time',
        'Export your library to keep, script, or analyze',
      ],
      exportLabel: 'Export as',
      devices: 'iPhone · iPad',
    },
    terminal: {
      spine: 'Terminal',
      title: 'Your library, from the command line.',
      body: 'anishelf-cli gives you the ani command: read-only access to your synced AniShelf library. List, search, summarize, and export it as JSON from any terminal.',
      install: 'Install with uv',
      agents:
        'Working with an AI agent? Point it to the anishelf-cli skill and it can set itself up.',
      readOnly: 'Read-only by design. ani never writes back to your library.',
    },
  },
  notes: {
    title: 'Good to know',
    items: [
      {
        title: 'Bring a free TMDb key',
        body: 'AniShelf gets its anime data from The Movie Database. You enter your own API key once, and it’s free for personal use.',
        link: { label: 'Get a TMDb API key', href: TMDB_KEY_URL },
      },
      {
        title: 'A tracker, not a player',
        body: 'AniShelf doesn’t stream or download anything. It’s for keeping track of what you watch, wherever you watch it.',
      },
      {
        title: 'Private by default',
        body: 'No sign-up, no ads, no tracking. Your library lives on your device and, if you turn on sync, in your private iCloud.',
      },
      {
        title: 'Open source',
        body: 'The whole app is on GitHub under the Apache 2.0 license. Issues and pull requests are welcome.',
        link: { label: 'View the source', href: GITHUB_URL },
      },
    ],
  },
  outro: {
    title: 'Start your shelf.',
    body: 'Free on the App Store for iPhone and iPad running iOS 26 or later.',
    testflight: 'Try new features early on TestFlight',
  },
  footer: {
    privacy: 'Privacy Policy',
    source: 'Source on GitHub',
    contact: 'Contact',
    blog: 'Blog',
    tmdb: 'This product uses the TMDB API but is not endorsed or certified by TMDB.',
    apple:
      'Apple, the Apple logo, iPhone, and iPad are trademarks of Apple Inc., registered in the U.S. and other countries. App Store is a service mark of Apple Inc.',
    artwork: 'Anime artwork shown in screenshots belongs to its respective rights holders.',
    madeBy: 'Made by Samuel He.',
  },
  alt: {
    icon: 'AniShelf app icon',
    grid: 'AniShelf library as a grid of anime posters',
    list: 'AniShelf library as a list with watch status, episode, and score',
    featured: 'AniShelf gallery view with a large poster card',
    detail: 'Anime detail page with TMDb score, episodes, and studio',
    manage: 'Watch management with status, dates, episode progress, and notes',
    stats: 'Library statistics with counts by watch status and favorites',
    ipadGrid: 'AniShelf on iPad with the poster grid and an inspector showing anime details',
    ipadStats: 'AniShelf on iPad showing library statistics and settings',
    tmdb: 'The Movie Database (TMDB) logo',
  },
};

const zh: Strings = {
  meta: {
    title: 'AniShelf — 你的动画书架',
    description:
      'AniShelf 是一款免费的原生 iPhone 与 iPad 应用，用来记录番剧和动画电影：精确到集的进度、评分、新番播出提醒、iCloud 同步与导出。',
    ogAlt: 'AniShelf 应用图标与标题“把看过的每一部动画，都放上书架。”',
  },
  nav: {
    features: '功能',
    cli: '命令行',
    download: '下载',
    language: '语言',
    skip: '跳到正文',
  },
  hero: {
    kicker: '适用于 iPhone 与 iPad · iOS 26',
    titleLines: ['把看过的', '每一部动画，', '都放上书架。'],
    lede: 'AniShelf 是一个原生的番剧与动画电影资料库。逐集记录进度，为看完的作品评分、写下感想，新一集播出时还会提醒你。',
    testflight: '或加入 TestFlight 测试版',
    facts: ['免费', '无需注册', '开源'],
    spine: 'アニシェルフ',
  },
  shelfLabel: '按卷浏览',
  volumeLabel: (n) => `第 ${n} 卷`,
  volumes: {
    collect: {
      spine: '收藏',
      title: '收好你真正看过的每一部。',
      body: '用中文、英文或日文搜索 TMDb。可以添加整部系列、单独某一季或一部电影；也能粘贴一串标题或 TMDb ID，一次性批量添加。',
      points: [
        '三种浏览方式：海报网格、详细列表和大卡片图库',
        '收藏、筛选与排序，资料库再大也井井有条',
        '多选条目，批量修改观看状态、评分或日期',
      ],
    },
    track: {
      spine: '追踪',
      title: '精确到每一集。',
      body: '每个条目都有自己的观看状态、起止日期、观看进度、评分和笔记。每集摘要、声优阵容和 TMDb 评分，点一下就能看到。',
      statuses: ['想看', '在看', '已看完', '中断'],
    },
    remind: {
      spine: '提醒',
      title: '新一集，不再错过。',
      body: '查看连载中番剧的播出时间，并开启提醒。AniShelf 会为每一集新番安排通知，可以提前，也可以准点。',
      now: '现在',
      airsNow: (ep) => `${ep} 正在播出。`,
      airsIn: (ep, m) => `${ep} 将在 ${m} 分钟后播出。`,
      source: '播出时间来自 TVmaze（如有）。',
    },
    reflect: {
      spine: '回顾',
      title: '回头看看整个书架。',
      body: '资料库统计会告诉你看完了多少、在看多少、收藏了多少，还能按动画系列、单季和电影分类统计，并显示总观看时长。',
    },
    everywhere: {
      spine: '同步',
      title: '同一个书架，每台设备。',
      body: 'iCloud 同步让资料库、观看进度和设置在 iPhone 与 iPad 之间保持一致。在 iPad 上，检查器把详情放在资料库旁边。',
      points: [
        '数据存放在你私有的 iCloud 数据库，无需注册 AniShelf 账号',
        '完整备份，随时恢复',
        '导出资料库，留存、写脚本或做分析都可以',
      ],
      exportLabel: '导出为',
      devices: 'iPhone · iPad',
    },
    terminal: {
      spine: '终端',
      title: '在命令行里翻看资料库。',
      body: 'anishelf-cli 提供 ani 命令，以只读方式访问你已同步的 AniShelf 资料库：在任意终端里列出、搜索、统计，或导出为 JSON。',
      install: '使用 uv 安装',
      agents: '在用 AI 智能体？把 anishelf-cli 的 skill 交给它，它可以自己完成安装。',
      readOnly: '设计上只读，ani 不会改动你的资料库。',
    },
  },
  notes: {
    title: '使用须知',
    items: [
      {
        title: '准备一个免费的 TMDb 密钥',
        body: 'AniShelf 的动画数据来自 The Movie Database，首次使用需要填入你自己的 API Key，个人使用免费。',
        link: {
          label: '查看申请教程',
          href: 'https://github.com/samuelhe52/AniShelf/blob/main/docs/anishelf_overview.md',
        },
      },
      {
        title: '它是记录工具，不是播放器',
        body: 'AniShelf 不提供在线播放或下载，只负责记录你在别处看过的番。“书架”也只是比喻，它不是漫画或小说阅读器。',
      },
      {
        title: '默认保护隐私',
        body: '无需注册，没有广告，也不追踪。资料库保存在你的设备上；开启同步后，也只存放在你私有的 iCloud 里。',
      },
      {
        title: '开源',
        body: '完整源代码在 GitHub 上以 Apache 2.0 许可证开源，欢迎提 issue 和 PR。',
        link: { label: '查看源代码', href: GITHUB_URL },
      },
    ],
  },
  outro: {
    title: '开始整理你的书架。',
    body: '在 App Store 免费下载，支持 iOS 26 及以上版本的 iPhone 与 iPad。',
    testflight: '在 TestFlight 抢先体验新功能',
  },
  footer: {
    privacy: '隐私政策',
    source: 'GitHub 源代码',
    contact: '联系',
    blog: '博客',
    tmdb: '本产品使用 TMDB API，但未经 TMDB 认可或认证。',
    apple:
      'Apple、Apple 标志、iPhone 和 iPad 是 Apple Inc. 在美国和其他国家/地区注册的商标。App Store 是 Apple Inc. 的服务商标。',
    artwork: '截图中的动画作品图像版权归各自权利人所有。',
    madeBy: 'Samuel He 制作。',
  },
  alt: {
    icon: 'AniShelf 应用图标',
    grid: 'AniShelf 资料库的海报网格视图',
    list: 'AniShelf 资料库的列表视图，显示观看状态、集数和评分',
    featured: 'AniShelf 图库视图中的大幅海报卡片',
    detail: '动画详情页，显示 TMDb 评分、集数和制作公司',
    manage: '观看管理：状态、日期、观看进度与笔记',
    stats: '资料库统计：各观看状态与收藏的数量',
    ipadGrid: 'iPad 上的 AniShelf：海报网格与显示动画详情的检查器',
    ipadStats: 'iPad 上的 AniShelf：资料库统计与设置',
    tmdb: 'The Movie Database（TMDB）标志',
  },
};

const ja: Strings = {
  meta: {
    title: 'AniShelf — 観たアニメのための本棚',
    description:
      'AniShelf は、アニメシリーズや劇場版を記録できる無料のネイティブ iPhone・iPad アプリです。エピソード単位の進捗、スコア、放送リマインダー、iCloud同期、エクスポートに対応。',
    ogAlt: 'AniShelf のアプリアイコンと見出し「観てきたアニメを、ひとつの本棚に。」',
  },
  nav: {
    features: '機能',
    cli: 'CLI',
    download: 'ダウンロード',
    language: '言語',
    skip: '本文へスキップ',
  },
  hero: {
    kicker: 'iPhone・iPad 対応 · iOS 26',
    titleLines: ['観てきたアニメを、', 'ひとつの本棚に。'],
    lede: 'AniShelf は、アニメシリーズと劇場版のためのネイティブなライブラリ。1話ずつ進捗を残し、観終えた作品にはスコアと感想を。次の話が放送されるときは、そっとお知らせします。',
    testflight: 'TestFlight ベータに参加する',
    facts: ['無料', 'アカウント不要', 'オープンソース'],
    spine: 'アニシェルフ',
  },
  shelfLabel: '巻ごとに見る',
  volumeLabel: (n) => `第${n}巻`,
  volumes: {
    collect: {
      spine: '集める',
      title: '本当に観た作品だけの、ライブラリを。',
      body: 'The Movie Database を日本語・英語・中国語で検索。シリーズ全体、特定のシーズン、劇場版を追加できます。タイトルや TMDb ID をまとめて貼り付ければ、一括追加も。',
      points: [
        'グリッド、リスト、大きなカードのギャラリー。3つの表示で眺められます',
        'お気に入り、フィルター、並べ替えで、大きなライブラリもすっきり',
        '複数選択で、視聴状況・スコア・日付をまとめて変更',
      ],
    },
    track: {
      spine: '記録する',
      title: '1話ずつ、きちんと。',
      body: '作品ごとに、視聴状況、開始日と終了日、エピソードの進捗、スコア、ノートを記録。各話のあらすじやキャスト、TMDb のスコアもすぐに確認できます。',
      statuses: ['見たい', '視聴中', '視聴済', '中断'],
    },
    remind: {
      spine: '知らせる',
      title: '新しい話を、見逃さない。',
      body: '放送中の作品の放送時間を確認して、リマインダーをオンに。新しいエピソードごとに通知を設定します。少し前にも、放送時刻ちょうどにも。',
      now: '今',
      airsNow: (ep) => `${ep}は現在放送中です。`,
      airsIn: (ep, m) => `${ep}は${m}分後に放送されます。`,
      source: '放送スケジュールは TVmaze から取得しています（対応作品のみ）。',
    },
    reflect: {
      spine: 'ふり返る',
      title: '本棚全体を、ふり返る。',
      body: 'ライブラリの統計で、観終えた作品、視聴中の作品、お気に入りの数がひと目でわかります。シリーズ・シーズン・映画の内訳と、合計の再生時間も確認できます。',
    },
    everywhere: {
      spine: '同期',
      title: 'どのデバイスでも、同じ本棚。',
      body: 'iCloud同期で、ライブラリ、進捗、設定を iPhone と iPad で同じ状態に保ちます。iPad ではインスペクタで、ライブラリの横に詳細を表示できます。',
      points: [
        'データはあなた専用の iCloud データベースに保存。AniShelf のアカウントは不要',
        'いつでも復元できるフルバックアップ',
        'ライブラリをエクスポートして、保存・スクリプト・分析に',
      ],
      exportLabel: 'エクスポート形式',
      devices: 'iPhone · iPad',
    },
    terminal: {
      spine: 'ターミナル',
      title: 'ライブラリを、コマンドラインから。',
      body: 'anishelf-cli は ani コマンドで、同期済みの AniShelf ライブラリを読み取り専用で扱えます。どのターミナルからでも一覧・検索・統計、JSON へのエクスポートが可能です。',
      install: 'uv でインストール',
      agents:
        'AI エージェントと一緒に使うなら、anishelf-cli のスキルを渡すだけでセットアップできます。',
      readOnly: '読み取り専用の設計。ani がライブラリを書き換えることはありません。',
    },
  },
  notes: {
    title: 'ご利用の前に',
    items: [
      {
        title: '無料の TMDb キーを用意',
        body: 'AniShelf のアニメ情報は The Movie Database から取得します。最初にご自身の API キーを一度入力してください。個人利用は無料です。',
        link: { label: 'TMDb API キーを取得', href: TMDB_KEY_URL },
      },
      {
        title: '記録アプリです',
        body: 'AniShelf には配信・再生やダウンロードの機能はありません。どこで観た作品でも、記録しておくためのアプリです。',
      },
      {
        title: 'プライバシー重視',
        body: '登録不要、広告なし、トラッキングなし。ライブラリはデバイスに保存され、同期をオンにした場合もあなた専用の iCloud にだけ保存されます。',
      },
      {
        title: 'オープンソース',
        body: 'アプリのソースコードは Apache 2.0 ライセンスで GitHub に公開しています。Issue や Pull Request も歓迎です。',
        link: { label: 'ソースコードを見る', href: GITHUB_URL },
      },
    ],
  },
  outro: {
    title: 'あなたの本棚を、はじめよう。',
    body: 'App Store で無料。iOS 26 以降の iPhone・iPad に対応しています。',
    testflight: 'TestFlight で新機能をいち早く',
  },
  footer: {
    privacy: 'プライバシーポリシー',
    source: 'GitHub のソースコード',
    contact: 'お問い合わせ',
    blog: 'ブログ',
    tmdb: '本製品は TMDB API を使用していますが、TMDB による承認・認定を受けたものではありません。',
    apple:
      'Apple、Appleのロゴ、iPhone、iPad は、米国およびその他の国や地域で登録された Apple Inc. の商標です。App Store は Apple Inc. のサービスマークです。',
    artwork: 'スクリーンショット内のアニメ画像の権利は、各権利者に帰属します。',
    madeBy: 'Samuel He が制作。',
  },
  alt: {
    icon: 'AniShelf のアプリアイコン',
    grid: 'AniShelf のライブラリをポスターのグリッドで表示',
    list: '視聴状況・エピソード・スコアを表示した AniShelf のリスト',
    featured: '大きなポスターカードを表示した AniShelf のギャラリー',
    detail: 'TMDb スコア、エピソード数、制作会社を表示した作品の詳細',
    manage: '視聴状況、日付、エピソードの進捗、ノートを編集する視聴管理',
    stats: '視聴状況ごとの数とお気に入りを表示したライブラリの統計',
    ipadGrid: 'iPad の AniShelf。ポスターのグリッドと作品の詳細を表示するインスペクタ',
    ipadStats: 'iPad の AniShelf。ライブラリの統計と設定',
    tmdb: 'The Movie Database（TMDB）のロゴ',
  },
};

export const strings: Record<Locale, Strings> = { en, zh, ja };
