import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Tony Cabaye",
  tagline: "Frontend expert",
  favicon: "img/logo-32.png",

  // Set the production url of your site here
  url: "https://tonai.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/blog/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "tonai", // Usually your GitHub org/user name.
  projectName: "blog", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        // Will be passed to @docusaurus/plugin-content-blog
        blog: {
          archiveBasePath: null,
          blogSidebarCount: "ALL",
          postsPerPage: 10,
          routeBasePath: "posts",
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
          customCss: [
            "./node_modules/@mantine/core/styles.css",
            "./src/css/custom.css",
          ],
        },
      } satisfies Preset.Options,
    ],
  ],

  // stylesheets: ['https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css'],

  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
    },
    image: "img/docusaurus-social-card.webp",
    metadata: [{ name: "keywords", content: "Tony Cabaye, blog, projects" }],
    navbar: {
      title: "Tony Cabaye",
      logo: {
        alt: "Tony Cabaye Logo",
        src: "img/logo-32.webp",
      },
      items: [
        { to: "resume", label: "Resume", position: "left" },
        { to: "posts", label: "Recent Posts", position: "left" },
        { to: "slides", label: "Presentation Slides", position: "left" },
        {
          type: "dropdown",
          label: "My projects",
          position: "left",
          items: [
            { label: "Open Source Projects", to: "projects/os-projects" },
            { label: "Office Projects", to: "projects/office-projects" },
            { label: "Games", to: "projects/games" },
            { label: "Side Projects", to: "projects/side-projects" },
            { label: "Oldies", to: "projects/oldies" },
          ],
        },
        {
          href: "https://www.linkedin.com/in/tony-cabaye/",
          label: "LinkedIn",
          position: "right",
        },
        {
          href: "https://github.com/tonai",
          label: "Github",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Tony Cabaye",
          items: [
            {
              label: "Resume",
              to: "resume",
            },
            {
              label: "Recent Posts",
              to: "posts",
            },
            {
              label: "Presentation slides",
              to: "slides",
            },
          ],
        },
        {
          title: "Projects",
          items: [
            {
              label: "Open Source Projects",
              to: "projects/os-projects",
            },
            {
              label: "Office Projects",
              to: "projects/office-projects",
            },
            {
              label: "Games",
              to: "projects/games",
            },
            {
              label: "Side Projects",
              to: "projects/side-projects",
            },
            {
              label: "Oldies",
              to: "projects/oldies",
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
          title: "Links",
          items: [
            {
              label: "LinkedIn",
              to: "https://www.linkedin.com/in/tony-cabaye/",
            },
            {
              label: "GitHub",
              href: "https://github.com/tonai",
            },
            {
              label: "X",
              href: "https://twitter.com/CabayeTony",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Tony Cabaye, Inc.`,
    },
    prism: {
      additionalLanguages: ["bash", "diff", "json"],
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
  future: {
    experimental_faster: true,
  },
};

module.exports = config;
