// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Mahesh\'s Blog',
  // tagline: 'Under Construction',
  favicon: 'img/favicon.ico',
  customFields: {
    allPosts: [
      {
        slug: "google-hiring-challenge-2",
        title: "Demystifying Google's Secret Hiring Challenge-II",
        authors: "Mahesh",
        featured: false,
        created_at: "2023-11-01",
        tags: ['programming', 'hiring', 'medium']
      },
      {
        slug: "google-hiring-challenge-1",
        title: "Demystifying Google's Secret Hiring Challenge-I",
        authors: "Mahesh",
        featured: true,
        created_at: "2023-10-13",
        tags: ['programming', 'hiring', 'medium']
      },
      {
        slug: "the-genetic-algorithm",
        title: "The Genetic Algorithm and The Travelling Salesman Problem",
        authors: "Mahesh",
        featured: true,
        created_at: "2023-10-06",
        tags: ['algorithm', 'artificial intelligence']
      },
      {
        slug: "creating-ultra-gradients-in-flutter",
        title: "Creating Ultra Gradients in Flutter",
        authors: "Mahesh",
        featured: true,
        created_at: "2023-08-15",
        tags: ['flutter', 'software', 'medium']
      },
      {
        slug: "deploying-flutter-app-to-netlify",
        title: "Deploying futter app to Netlify Continuous deployment",
        authors: "Mahesh",
        featured: false,
        created_at: "2023-07-03",
        tags: ['flutter', 'web', 'medium', 'CICD']
      },
      {
        slug: "vscode-for-flutter-hacks",
        title: "VSCode for Flutter hacks that will blow your mind",
        authors: "Mahesh",
        featured: false,
        created_at: "2023-01-08",
        tags: ['flutter', 'software', 'medium', 'hack']
      },
      {
        slug: "everything-about-the-bottomnavigationbar",
        title: "Everything about the BottomNavigationbar in Flutter",
        authors: "Mahesh",
        featured: true,
        created_at: "2022-05-30",
        tags: ['flutter', 'software', 'medium', 'hack']
      },
      {
        slug: "leveraging-clippath-in-flutter",
        title: "Leveraging ClipPath in Flutter",
        authors: "Mahesh",
        featured: false,
        created_at: "2021-12-18",
        tags: ['flutter', 'software', 'medium']
      },
      {
        slug: "managing-secrets-in-open-sourced-flutter-web",
        title: "Managing secrets in an open-sourced flutter web app",
        authors: "Mahesh",
        featured: false,
        created_at: "2021-03-13",
        tags: ['flutter', 'technology', 'Localization', 'medium']
      },
      {
        slug: "flutter-localization-on-the-fly",
        title: "Flutter Localization on the Fly",
        authors: "Mahesh",
        featured: false,
        created_at: "2021-03-13",
        tags: ['flutter', 'technology', 'Localization', 'medium']
      },
      {
        slug: "search-as-you-type-in-flutter",
        title: "Search as you type in Flutter",
        authors: "Mahesh",
        featured: false,
        created_at: "2020-02-10",
        tags: ['flutter', 'technology', 'software', 'medium']
      },
      {
        slug: "flutter-automated-testing",
        title: "Flutter Automated Testing",
        authors: "Mahesh",
        featured: false,
        created_at: "2019-08-07",
        tags: ['flutter', 'technology', 'testing', 'medium']
      },
      {
        slug: "deploying-flutter-app-to-github-pages",
        title: "Deploying your Flutter WebApp to GitHub Pages",
        authors: "Mahesh",
        featured: false,
        created_at: "2019-05-12",
        tags: ['flutter', 'technology', 'web', 'medium']
      },
      {
        slug: "building-first-flutter-web-page",
        title: "Building your first Flutter web page",
        authors: "Mahesh",
        featured: false,
        created_at: "2019-05-09",
        tags: ['flutter', 'technology', 'web', 'medium']
      },
      {
        slug: "cupertino-picker-in-flutter",
        title: "CupertinoPicker in Flutter",
        authors: "Mahesh",
        created_at: "2018-12-22",
        featured: false,
        tags: ['technology', 'software', 'medium', 'flutter']
      },
      {
        slug: "sync-files-between-windows-and-drive",
        title: "How to sync files between computer and Google Drive Automatically",
        authors: "Mahesh",
        created_at: "2018-08-17",
        featured: false,
        tags: ['technology', 'software', 'youtube', 'hack']
      },
      {
        slug: "truth-about-software-development",
        title: "The story behind every software development process",
        authors: 'Mahesh',
        created_at: '2018-02-24',
        featured: false,
        tags: ['technology', 'software', 'agile']
      },
      {
        slug: "relaxing-short-trip",
        title: "A relaxing short trip",
        authors: "Mahesh",
        featured: false,
        created_at: "2018-02-24",
        tags: ['life', 'travel', 'blog']
      },
      {
        slug: "thoughts-on-life-and-death",
        title: "Thoughts on Life After Death",
        featured: false,
        authors: "Mahesh",
        created_at: "2018-02-24",
        tags: ['life', 'thoughts']
      },
      {
        slug: "truth-about-bitcoin-holders",
        title: "The Truth you should know about the top 100 Bitcoin Holders",
        authors: "Mahesh",
        created_at: "2020-02-13",
        featured: false,
        tags: ['bitcoin', 'cryptocurrency', 'blockchain', 'thoughts']
      },
      {
        slug: "india-bans-crypto",
        title: "The FUD about the Crypto Fall, India bans Crypto!",
        authors: "Mahesh",
        created_at: "2020-05-01",
        featured: false,
        tags: ['bitcoin', 'cryptocurrency', 'blockchain', 'thoughts']
      },
      {
        slug: "bitcoin-bubble-burst",
        title: "Is Bitcoin Bubble about to burst?",
        authors: 'Mahesh',
        created_at: '2020-05-01',
        featured: false,
        tags: ['bitcoin', 'cryptocurrency', 'blockchain', 'thoughts']
      },
      {
        slug: "positive-vibe-reminder",
        title: "A Positive Vibe 2018, You are not enough Motivated!",
        authors: "Mahesh",
        created_at: "2018-01-03T00:00:00Z",
        featured: false,
        tags: ['life', 'motivation']
      },
      {
        slug: "miraculous-day",
        title: "The Miraculous Day",
        authors: "Mahesh",
        featured: false,
        created_at: "2016-01-05T00:00:00Z",
        tags: ['life', 'motivation']
      },
    ]
  },
  // Set the production url of your site here
  url: 'https://blog.maheshjamdade.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'maheshmnj', // Usually your GitHub org/user name.
  projectName: 'blog', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/maheshmnj/blog/tree/main/'
        },
        blog: {
          blogSidebarCount: 0,
          routeBasePath: 'blog',
          include: ['**/*.{md,mdx}'],
          editUrl:
            'https://github.com/maheshmnj/blog/tree/main/',
          feedOptions: {
            type: 'json',
          }
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  themeConfig:
  {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Mahesh\'s Blog',
      logo: {
        // alt: 'My Site Logo',
        src: 'https://maheshjamdade.com/img/profile_pic.jpg',
        href: '/',
      },
      items: [
        {
          href: 'https://github.com/maheshmnj/blog',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Social',
          items: [
            {
              label: 'Medium',
              href: 'https://maheshmnj.medium.com/',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/maheshmnj',
            },
            {
              label: 'Threads',
              href: 'https://threads.net/@maheshmnj',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/users/8253662/mahesh-jamdade',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/maheshmnj',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Mahesh Jamdade. Built with Docusaurus 💛`,
    },
    colorMode: {
      defaultMode: 'dark',
    },
    lightTheme: {
      primaryColor: '#007BFF', // Light theme primary color
    },
    darkTheme: {
      primaryColor: '#6C757D', // Dark theme primary color
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
};

module.exports = config;
