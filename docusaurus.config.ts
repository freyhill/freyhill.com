import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: '飞河的世界',
  tagline: '世界是个巨大的I/O系统',
  favicon: 'img/freyhill-logo.png',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  plugins:[
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'article-route',
        path: 'articles', // 文档文件夹路径
        routeBasePath: 'articles', // 路由路径
        sidebarPath: require.resolve('./sidebars.ts'), // 侧边栏配置文件路径
        // 其他配置项
      },
    ],
  ],
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
            
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
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

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: '',
      logo: {
        alt: '飞河的世界',
        src: 'img/freyhill-logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: '系统架构',
          to: '/architecture'
        },
        { to: '/articles', label: '文集', position: 'left' },
        {to: '/blog', label: '博客', position: 'left'},
        {to: '/about', label: '关于我', position: 'left'},
        {
          href: 'https://github.com/freyhill/freyhill.com',
          label: 'GitHub',
          position: 'right',
        },
       
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '系统架构',
          items: [
            {
              label: '系统架构',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: '文集',
          items: [
           
          ],
        },
        {
          title: '更多',
          items: [
            {
              label: 'About',
              to: '/about',
            },
            {
              label: 'Instagram',
              to: 'https://instagram.com/freyhill',
            },
            {
              label: 'GitHub',
              to: 'https://github.com/freyhill/',
            },
          ],
        },
      ],
      // copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
