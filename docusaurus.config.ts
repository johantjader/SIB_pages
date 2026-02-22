import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'SIB Normativa Artefakter',
  tagline: 'Gemensamma specifikationer och riktlinjer',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  markdown: {
    mermaid: true,
  },

  // Set the production url of your site here
  url: 'https://johantjader.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/SIB_pages/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'johantjader', // Usually your GitHub org/user name.
  projectName: 'SIB_pages', // Usually your repo name.
  trailingSlash: true,

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/johantjader/SIB_pages/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/johantjader/SIB_pages/tree/main/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themes: [
    '@docusaurus/theme-mermaid',
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      ({
        hashed: true,
        language: ['en', 'sv'],
        indexDocs: true,
        indexBlog: true,
        indexPages: true,
        docsRouteBasePath: '/docs',
        highlightSearchTermsOnTargetPage: true,
      }),
    ],
  ],

  themeConfig: {
    mermaid: {
      theme: {light: 'neutral', dark: 'forest'},
    },
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'SIB Normativa Artefakter',
      logo: {
        alt: 'SIB Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Artefakter',
        },
        {to: '/blog', label: 'Nyheter', position: 'left'},
        {
          type: 'docsVersionDropdown',
          position: 'right',
          dropdownActiveClassDisabled: true,
        },
        {
          href: 'https://github.com/johantjader/SIB_pages',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Artefakter',
          items: [
            {
              label: 'Begreppslista',
              to: '/docs/konceptuella/begreppslista',
            },
            {
              label: 'Normativa Regler',
              to: '/docs/normativa/federationspolicy',
            },
          ],
        },
        {
          title: 'Resurser',
          items: [
            {
              label: 'Digg.se',
              href: 'https://www.digg.se',
            },
            {
              label: 'Sveriges Dataportal',
              href: 'https://www.dataportal.se',
            },
          ],
        },
        {
          title: 'Mer',
          items: [
            {
              label: 'Nyheter',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/johantjader/SIB_pages',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} SIB Normativa Artefakter. Innehåll hämtas från Myndigheten för digital förvaltning.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
