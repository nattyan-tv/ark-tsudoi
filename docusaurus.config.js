// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ARK非公式サーバー ARKプレイヤーの集い',
  tagline: 'ARKでともにサバイバルを!',
  url: 'https://ark-tsudoi.f5.si',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'nira0105', // Usually your GitHub org/user name.
  projectName: 'dinosaur-homepage', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js')
        },
        blog: {
          showReadingTime: true
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
      navbar: {
        title: 'ホーム',
        logo: {
          alt: 'My Site Log',
          src: '/img/join/ARK.webp',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'メニュー',
          },
          {to: '/blog', label: 'ブログ', position: 'left'},
          {
            href: 'https://discord.gg/mW3jzjunhf',
            label: 'Discord',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'メニュー',
            items: [
              {
                label: 'サーバー紹介',
                to: '/docs/intro',
              },
              {
                label: 'サーバールール',
                to: '/docs/rule',
              },
              {
                label: 'サーバー設定',
                to: '/docs/setting',
              },
              {
                label: '参加方法',
                to: '/docs/join',
              },
              {
                label: '支援について',
                to: '/docs/Feeling',
              },
              {
                label: '導入MODに関して',
                to: '/docs/MODs',
              },
              {
                label: 'よくある質問',
                to: '/docs/Question',
              },
              {
                label: 'サポートに関して',
                to: '/docs/support',
              },
              {
                label: 'その他',
                to: '/docs/more',
              },
            ],
            
          },
          {
            title: 'コミュニティ',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/mW3jzjunhf',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/niranuranura',
              },
            ],
          },
          {
            title: 'その他',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/nira0105/ark-tsudoi',
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
