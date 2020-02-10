/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const srul = require('./srul/index')

module.exports = {
  title: 'Asrul Dev',
  tagline: 'Belajar web dan mobile',
  url: 'http://asrul.dev',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'asruldev', // Usually your GitHub org/user name.
  projectName: 'blog-aa', // Usually your repo name.
  themeConfig: {
    googleAnalytics: {
      trackingID: 'UA-154182296-1',
    },
    customAsrul: {
      kodeAsrul: 'asrulH',
    },
    navbar: {
      title: 'Asrul Dev',
      logo: {
        alt: 'Asrul Dev',
        src: 'img/logo.svg',
      },
      links: [
        {to: 'docs/30daysweb', label: '30 Hari Js', position: 'left'},
        {to: 'docs/vue-14-hari', label: 'Vue 14 Hari', position: 'left'},
        {to: 'blog', label: 'Blog', position: 'right'},
        {
          href: 'https://github.com/asruldev',
          label: 'GitHub',
          position: 'right',
        },
      ],
      hideOnScroll: false,
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Series',
          items: [
            {
              label: '30 Hari Javascript',
              to: 'docs/30daysweb',
            },
            {
              label: 'Vue 14 Hari',
              to: 'docs/vue-14-hari',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/asruldev',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/asruldev',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/asruldev',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/asruldev',
            },
          ],
        },
      ],
      logo: {
        alt: 'Follow Me',
        src: 'https://sarasotasucculentsociety.org/images/social-media/instagram-name-graphic.svg',
        href: 'https://instagram.com/asrul.dev',
      },
      // Please do not remove the credits, help to publicize Docusaurus :)
      copyright: `Copyright © ${new Date().getFullYear()} Asrul Dev build with Love.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // editUrl:
            // 'https://github.com/asruldev/30djs',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  scripts: [
    {
      'data-ad-client': 'ca-pub-1448095049042566',
      async: true,
      src:
        'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
    },
  ],
  plugins: [
    '@docusaurus/plugin-sitemap',
    {
      cacheTime: 600 * 1000, // 600 sec - cache purge period
      changefreq: 'weekly',
      priority: 0.5,
    },
    srul,
  ],
};
