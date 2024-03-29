// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const metaDescription = 'Flowser is first-of-its-kind development tool for Flow blockchain. It does the heavy work of managing blockchain emulator, inspecting the current state, interacting with the network and much more!';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Flowser Docs',
  tagline: metaDescription,
  url: 'https://docs.flowser.dev',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'onflowser', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  scripts: [{
    src: 'https://cdn.splitbee.io/sb.js',
    async: true,
    'data-no-cookie': true
  }],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/onflowser/docs/tree/main',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        { name: 'description', content: metaDescription },
        { property: 'og:description', content: metaDescription },
        { property: 'og:title', content: 'Flowser docs' },
        { property: 'og:site_name', content: 'Flowser' },
        {
          property: 'og:image',
          content: 'https://flowser.dev/social.png'
        },
        { property: 'og:type', content: 'documentation' },
        { name: 'twitter:description', content: metaDescription },
        {
          name: 'twitter:image',
          content: 'https://flowser.dev/social.png'
        },
        { rel: 'canonical', content: 'https://docs.flowser.dev' },
      ],
      navbar: {
        title: 'Flowser docs',
        logo: {
          alt: 'Flowser Logo',
          src: 'img/logo.png',
        },
        items: [
          // {
          //   type: 'doc',
          //   docId: 'overview',
          //   position: 'left',
          //   label: 'Tutorial',
          // },
          {
            href: 'https://flowser.dev',
            label: 'Website',
            position: 'right',
          },
          {
            href: 'https://github.com/onflowser/flowser',
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
                label: 'What is Flowser?',
                to: '/overview',
              },
              {
                label: 'Quickstart',
                to: '/quick-start',
              },
              {
                label: 'Features',
                to: '/features',
              },
              {
                label: 'Contributing',
                to: '/contributing',
              },
              {
                label: 'Development guide',
                to: '/development',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/onflowser',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Website',
                to: 'https://flowser.dev',
              },
              {
                label: 'Blog',
                to: 'https://flowser.dev/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/onflowser/flowser',
              },
            ],
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
