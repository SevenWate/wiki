"use strict";

// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
var lightCodeTheme = require('prism-react-renderer/themes/github');

var darkCodeTheme = require('prism-react-renderer/themes/dracula');
/** @type {import('@docusaurus/types').Config} */


var config = {
  title: '7Wate',
  // tagline: 'For Freedom',
  url: 'https://wiki.7wate.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: '7wate',
  // Usually your GitHub org/user name.
  projectName: 'wiki',
  // Usually your repo name.
  presets: [['classic',
  /** @type {import('@docusaurus/preset-classic').Options} */
  {
    docs: {
      sidebarPath: require.resolve('./sidebars.js'),
      editUrl: 'https://git.7wate.com/zhouzhongping/wiki/src/branch/master',
      routeBasePath: '/',
      // showLastUpdateAuthor: true,
      showLastUpdateTime: true
    },
    blog: {
      showReadingTime: true,
      editUrl: 'https://git.7wate.com/zhouzhongping/wiki/src/branch/master'
    },
    theme: {
      // 自定义 css
      customCss: require.resolve('./src/css/custom.css')
    }
  }]],
  themeConfig:
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
  {
    // 公告
    // announcementBar: {
    //   id: 'support_us',
    //   content:
    //     'We are looking to revamp our docs, please fill <a target="_blank" rel="noopener noreferrer" href="#">this survey</a>',
    //   backgroundColor: '#fafbfc',
    //   textColor: '#091E42',
    //   isCloseable: false,
    // },
    // 导航栏
    navbar: {
      title: '7Wate`s Wiki',
      // hideOnScroll: true,
      // logo: {
      //   alt: 'Site Logo',
      //   src: 'img/logo.svg',
      //   srcDark: 'img/logo_dark.svg',
      //   href: 'https://docusaurus.io/',
      //   target: '_self',
      //   width: 32,
      //   height: 32,
      // },
      items: [{
        type: 'doc',
        docId: 'home',
        position: 'right',
        label: '知识库'
      }, {
        to: '/blog',
        label: '博客',
        position: 'right'
      }, {
        href: 'https://git.7wate.com/zhouzhongping/wiki',
        label: 'Gitea',
        position: 'right'
      }]
    },
    // 页脚
    footer: {
      style: 'dark',
      copyright: "Copyright \xA9 ".concat(new Date().getFullYear(), " 7Wate, Inc. Built with <a href=\"https://www.docusaurus.cn/\" target=\"_blank\" rel=\"noopener noreferrer\">Docusaurus</a>.<br>Powered by <a href=\"https://webify.cloudbase.net/\" target=\"_blank\" rel=\"noopener noreferrer\">CloudBase Webify</a>")
    },
    // 代码块
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
      defaultLanguage: 'markdown'
    }
  },
  // 国际化 中文
  i18n: {
    defaultLocale: "zh-Hans",
    locales: ["zh-Hans"]
  }
};
module.exports = config;