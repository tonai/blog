// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Tony Cabaye',
  tagline: 'Frontend expert',
  favicon: 'img/favicon.ico', // TODO

  // Set the production url of your site here
  url: 'https://tonai.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/blog/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'tonai', // Usually your GitHub org/user name.
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
        // Will be passed to @docusaurus/plugin-content-blog
        blog: {
          archiveBasePath: null,
          blogSidebarCount: 'ALL',
          postsPerPage: 10,
          routeBasePath: 'posts',
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/tonai/blog/tree/main/',
        },
        docs: false,
        // Will be passed to @docusaurus/plugin-google-tag-manager
        // googleTagManager: {},
        // Will be passed to @docusaurus/plugin-google-gtag
        // gtag: {},
        // Will be passed to @docusaurus/plugin-content-pages
        // pages: {},
        // Will be passed to @docusaurus/plugin-sitemap
        // sitemap: {},
        theme: {
          customCss: require.resolve('./src/css/custom.css'), // TODO
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg', // TODO
      metadata: [
        {name: 'keywords', content: 'Tony Cabaye, blog'},
      ],
      navbar: {
        title: 'Tony Cabaye',
        logo: {
          alt: 'Tony Cabaye Logo',
          src: 'img/logo.svg', // TODO
        },
        items: [
          {to: 'posts', label: 'Recent posts', position: 'left'},
          {
            href: 'https://www.linkedin.com/in/tony-cabaye/',
            label: 'LinkedIn',
            position: 'right',
          },
          {
            href: 'https://github.com/tonai',
            label: 'Github',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Blog',
            items: [
              {
                label: 'Recent posts',
                to: 'posts',
              },
            ],
          },
          // {
          //   title: 'Community',
          //   items: [
          //     {
          //       label: 'Stack Overflow',
          //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
          //     },
          //     {
          //       label: 'Discord',
          //       href: 'https://discordapp.com/invite/docusaurus',
          //     },
          //     {
          //       label: 'Twitter',
          //       href: 'https://twitter.com/docusaurus',
          //     },
          //   ],
          // },
          {
            title: 'Links',
            items: [
              {
                label: 'LinkedIn',
                to: 'https://www.linkedin.com/in/tony-cabaye/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/tonai',
              },
              {
                label: 'X',
                href: 'https://twitter.com/CabayeTony',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Tony Cabaye, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
