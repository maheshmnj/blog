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
        slug: "sync-files-between-windows-and-drive",
        title: "How to sync files in between computer and Google Drive Automatically",
        authors: "Mahesh",
        created_at: "2018-08-17",
        tags: ['technology', 'software', 'youtube', 'hack']
      },
      {
        slug: "truth-about-software-development",
        title: "The story behind every software development process",
        authors: 'Mahesh',
        created_at: '2018-02-24',
        tags: ['technology', 'software', 'agile']
      },
      {
        slug: "relaxing-short-trip",
        title: "A relaxing short trip",
        authors: "Mahesh",
        created_at: "2018-02-24",
        tags: ['life', 'travel', 'blog']
      },
      {
        slug: "thoughts-on-life-and-death",
        title: "Thoughts on Life After Death",
        authors: "Mahesh",
        created_at: "2018-02-24",
        tags: ['life', 'thoughts']
      },
      {
        slug: "truth-about-bitcoin-holders",
        title: "The Truth you should know about the top 100 Bitcoin Holders",
        authors: "Mahesh",
        created_at: "2020-02-13",
        tags: ['bitcoin', 'cryptocurrency', 'blockchain', 'thoughts']
      },
      {
        slug: "india-bans-crypto",
        title: "The FUD about the Crypto Fall, India bans Crypto!",
        authors: "Mahesh",
        created_at: "2020-05-01",
        tags: ['bitcoin', 'cryptocurrency', 'blockchain', 'thoughts']
      },
      {
        slug: "bitcoin-bubble-burst",
        title: "Is Bitcoin Bubble about to burst?",
        authors: 'Mahesh',
        created_at: '2020-05-01',
        tags: ['bitcoin', 'cryptocurrency', 'blockchain', 'thoughts']
      },
      {
        slug: "positive-vibe-reminder",
        title: "A Positive Vibe 2018, You are not enough Motivated!",
        authors: "Mahesh",
        created_at: "2018-01-03T00:00:00Z",
        tags: ['life', 'motivation']
      },
      {
        slug: "miraculous-day",
        title: "The Miraculous Day",
        authors: "Mahesh",
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
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
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
          // {
          //   type: 'docSidebar',
          //   sidebarId: 'tutorialSidebar',
          //   position: 'left',
          //   label: 'Tutorial',
          // },
          // { to: '/blog', label: 'Blog', position: 'left' },
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
          // {
          //   title: 'Docs',
          //   items: [
          //     {
          //       label: 'Tutorial',
          //       to: '/docs/intro',
          //     },
          //   ],
          // },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/users/8253662/mahesh-jamdade',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/maheshmnj',
              },
            ],
          },
          {
            title: 'More',
            items: [
              // {
              //   label: 'Blog',
              //   to: '/blog',
              // },
              {
                label: 'GitHub',
                href: 'https://github.com/maheshmnj',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
