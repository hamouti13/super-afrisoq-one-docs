module.exports = {
  title: 'Super-Afrisoq Documentation',
  tagline: 'Documentation for Super-Afrisoq e-commerce platform',
  url: 'https://hamouti13.github.io',
  baseUrl: '/super-afrisoq-one-docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'hamouti13',
  projectName: 'super-afrisoq-one-docs',
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
          docId: 'README',
          position: 'left',
          label: 'Documentation',
        },
        {
          href: 'https://github.com/hamouti13',
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
              to: '/docs/README',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/hamouti13',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Super-Afrisoq, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/hamouti13/super-afrisoq-one-docs/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
