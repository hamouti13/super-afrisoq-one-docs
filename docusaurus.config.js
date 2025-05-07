module.exports = {
  title: 'Super-Afrisoq Documentation',
  tagline: 'Documentation for Super-Afrisoq e-commerce platform',
  url: 'https://docs.super-afrisoq.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Super-Afrisoq',
  projectName: 'super-afrisoq-docs',
  themeConfig: {
    navbar: {
      title: 'Super-Afrisoq Docs',
      logo: {
        alt: 'Super-Afrisoq Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Documentation',
        },
        {
          href: 'https://github.com/Super-Afrisoq',
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
              label: 'Getting Started',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/Super-Afrisoq',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Super-Afrisoq, Inc. Built with Docusaurus.`,
    },
    algolia: {
      appId: 'YOUR_APP_ID',
      apiKey: 'YOUR_SEARCH_API_KEY',
      indexName: 'super_afrisoq_docs',
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/Super-Afrisoq/docs/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
