"use strict";

// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
var lightCodeTheme = require('prism-react-renderer/themes/github');

var darkCodeTheme = require('prism-react-renderer/themes/dracula');
/** @type {import('@docusaurus/types').Config} */


var config = {
  title: '7Wate',
  tagline: 'For Freedom',
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
      // Please change this to your repo.
      editUrl: 'https://git.7wate.com/zhouzhongping/wiki/src/branch/master',
      routeBasePath: '/'
    },
    blog: {
      showReadingTime: true,
      // Please change this to your repo.
      editUrl: 'https://git.7wate.com/zhouzhongping/wiki/src/branch/master'
    },
    theme: {
      customCss: require.resolve('./src/css/custom.css')
    }
  }]],
  themeConfig:
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
  {
    navbar: {
      title: '7Wate`s Wiki',
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
    footer: {
      style: 'dark',
      copyright: "Copyright \xA9 ".concat(new Date().getFullYear(), " 7Wate, Inc. Built with Docusaurus.")
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme
    }
  }
};
module.exports = config;