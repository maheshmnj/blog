// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Mahesh\'s Blog',
  tagline: 'Under Construction',
  favicon: 'img/favicon.ico',
  customFields: {
    allPosts: [
      {
        title: 'Welcome',
        description: 'This is my first post!',
        path: '/blog/welcome',
        date: '2020-12-24',
        tags: ['welcome', 'first', 'post'],
        featured: true
      },
      {
        title: 'Hello World',
        description: 'This is my first post!',
        path: '/blog/hello-world',
        date: '2021-09-01',
        tags: ['second', 'helo', 'post'],
        featured: true
      },
      {
        title: 'Work in Progress',
        description: 'This is my third post!',
        path: '/blog/work-in-progress',
        date: '2021-09-02',
        tags: ['third', 'wip', 'post'],
        featured: false
      }
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
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/maheshmnj/blog/tree/main/'
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: 'all',
          },
          editUrl:
            'https://github.com/maheshmnj/blog/tree/main/',
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
        title: 'Mahesh Jamdade',
        logo: {
          alt: 'My Site Logo',
          src: 'https://maheshjamdade.com/img/profile_pic.jpg',
          href: 'https://maheshjamdade.com',
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
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
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
