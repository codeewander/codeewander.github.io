const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

module.exports = {
  title: 'Kira Yang',
  tagline: 'Here is how I grow my hippocampus :)',
  url: 'https://codeewander.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'codeewander',
  projectName: 'codeewander.github.io',
  trailingSlash: false,
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    hideSidebar: true,
    navbar: {
      title: 'Kira Yang',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo-lightMode.svg',
        href: 'https://codeewander.github.io',
      },
      items: [
        {
          to: 'docs/html/html-tags',
          position: 'left',
          label: 'Tech Notes',
        },
        {
          to: 'docs/creative-coding/data-visualization',
          position: 'left',
          label: 'Creative Coding',
        },
        {
          href: 'https://www.linkedin.com/in/chang-ru-yang/',
          position: 'right',
          className: 'linkedIn',
          'aria-label': 'LinkedIn',
        },
        {
          href: 'https://github.com/codeewander',
          position: 'right',
          className: 'github-link',
          'aria-label': 'GitHub',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()}. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
}
