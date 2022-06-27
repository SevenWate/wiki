// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "7Wate",
  tagline: "For Freedom",
  url: "https://wiki.7wate.com",
  baseUrl: "/",
  onBrokenLinks: "log",
  onBrokenMarkdownLinks: "log",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  // organizationName: '7wate', // Usually your GitHub org/user name.
  // projectName: 'wiki', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "zh-Hans",
    locales: ["zh-Hans"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://git.7wate.com/zhouzhongping/wiki/src/branch/master",
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          breadcrumbs: false,
        },
        blog: {
          blogTitle: "7Wate`s Blog",
          blogDescription: "7Wate 的个人生活和工作记录",
          blogSidebarCount: 7,
          blogSidebarTitle: "文章",
          showReadingTime: true,
          editUrl: "https://git.7wate.com/zhouzhongping/wiki/src/branch/master",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
        },
      }),
    ],
  ],
  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "life",
        path: "life",
        routeBasePath: "life",
        sidebarPath: require.resolve("./sidebars.js"),
        editUrl: "https://git.7wate.com/zhouzhongping/wiki/src/branch/master",
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        breadcrumbs: false,
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "art",
        path: "art",
        routeBasePath: "art",
        sidebarPath: require.resolve("./sidebars.js"),
        editUrl: "https://git.7wate.com/zhouzhongping/wiki/src/branch/master",
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        breadcrumbs: false,
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "dev",
        path: "dev",
        routeBasePath: "dev",
        sidebarPath: require.resolve("./sidebars.js"),
        editUrl: "https://git.7wate.com/zhouzhongping/wiki/src/branch/master",
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        breadcrumbs: false,
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "algo",
        path: "algo",
        routeBasePath: "algo",
        sidebarPath: require.resolve("./sidebars.js"),
        editUrl: "https://git.7wate.com/zhouzhongping/wiki/src/branch/master",
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        breadcrumbs: false,
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "ops",
        path: "ops",
        routeBasePath: "ops",
        sidebarPath: require.resolve("./sidebars.js"),
        editUrl: "https://git.7wate.com/zhouzhongping/wiki/src/branch/master",
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        breadcrumbs: false,
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "safe",
        path: "safe",
        routeBasePath: "safe",
        sidebarPath: require.resolve("./sidebars.js"),
        editUrl: "https://git.7wate.com/zhouzhongping/wiki/src/branch/master",
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        breadcrumbs: false,
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "othe",
        path: "othe",
        routeBasePath: "othe",
        sidebarPath: require.resolve("./sidebars.js"),
        editUrl: "https://git.7wate.com/zhouzhongping/wiki/src/branch/master",
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        breadcrumbs: false,
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "org",
        path: "org",
        routeBasePath: "org",
        sidebarPath: require.resolve("./sidebars.js"),
        editUrl: "https://git.7wate.com/zhouzhongping/wiki/src/branch/master",
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        breadcrumbs: false,
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "work",
        path: "work",
        routeBasePath: "work",
        sidebarPath: require.resolve("./sidebars.js"),
        editUrl: "https://git.7wate.com/zhouzhongping/wiki/src/branch/master",
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        breadcrumbs: false,
      },
    ],
    [
      "@docusaurus/plugin-google-analytics",
      {
        trackingID: "G-MHMEL0F832",
      },
    ],
  ],
  // themes: [
  //   [
  //     require.resolve("@easyops-cn/docusaurus-search-local"),
  //     {
  //       // ... Your options.
  //       // `hashed` is recommended as long-term-cache of index file is possible.
  //       hashed: true,
  //       // For Docs using Chinese, The `language` is recommended to set to:
  //       // ```
  //       language: ["en", "zh"],
  //       // ```
  //     },
  //   ],
  // ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // 公告
      // announcementBar: {
      //   id: 'support_us',
      //   content:
      //     'We are looking to revamp our docs, please fill <a target="_blank" rel="noopener noreferrer" href="#">this survey</a>',
      //   backgroundColor: '#fafbfc',
      //   textColor: '#091E42',
      //   isCloseable: false,
      // },
      metadata: [
        {
          name: "keywords",
          content: "7wate, wiki, blog, c, c++, java, python, linux",
        },
      ],
      navbar: {
        title: "📚 7Wate`s Wiki",
        hideOnScroll: true,
        // logo: {
        //   alt: 'Site Logo',
        //   src: 'img/logo.svg',
        //   srcDark: 'img/logo_dark.svg',
        //   href: 'https://docusaurus.io/',
        //   target: '_self',
        //   width: 32,
        //   height: 32,
        // },
        items: [
          { to: "/blog", label: "👨🏻‍🌾 博客", position: "right" },
          {
            position: "right",
            label: "👨🏻‍🎓 维基",
            items: [
              {
                label: "开发",
                to: "/dev",
              },
              {
                label: "算法",
                to: "/algo",
              },
              {
                label: "运维",
                to: "/ops",
              },
              {
                label: "安全",
                to: "/safe",
              },
              {
                label: "其他",
                to: "/docs",
              },
            ],
          },
          { to: "/org", label: "🤶 社区", position: "right" },
          { to: "/work", label: "👨‍💻 职业", position: "right" },
          { to: "/life", label: "🚴🏻‍♀️ 生活", position: "right" },
          { to: "/art", label: "👨‍🎨 艺术", position: "right" },
        ],
      },
      algolia: {
        apiKey: "5d5a02bdf02df700355c8ccd84b78d13",
        appId: "8W3YJXJGF2",
        indexName: "wiki",
      },
      footer: {
        style: "dark",
        copyright: `Copyright © ${new Date().getFullYear()} 7Wate, Inc. Built with <a href="https://www.docusaurus.cn/" target="_blank" rel="noopener noreferrer">Docusaurus</a>.<br>Powered by <a href="https://webify.cloudbase.net/" target="_blank" rel="noopener noreferrer">CloudBase Webify</a>`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        defaultLanguage: "markdown",
        additionalLanguages: ["java", "git"],
      },
      // imageZoom: {
      //   // CSS selector to apply the plugin to, defaults to '.markdown img'
      //   selector: ".markdown img",
      //   // Optional medium-zoom options
      //   // see: https://www.npmjs.com/package/medium-zoom#options
      //   options: {
      //     margin: 24,
      //     background: "#BADA55",
      //     scrollOffset: 0,
      //     container: "#zoom-container",
      //     template: "#zoom-template",
      //   },
      // },
    }),
};

module.exports = config;
