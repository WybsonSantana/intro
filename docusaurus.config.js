// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Educação em código aberto com a OpenSauced",
  tagline:
    "Capacitando sua jornada no código aberto: da primeira contribuição à liderança de projetos!",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://opensauced.pizza",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/learn/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "OpenSauced", // Usually your GitHub org/user name.
  projectName: "Trilha de aprendizado em código aberto", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "pt-BR",
    locales: ["pt-BR"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          // Please change this to your repo.
          editUrl:
            "https://github.com/WybsonSantana/intro/tree/feature/translation/pt-br",
          routeBasePath: "/",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "Trilha educacional em código aberto",
        logo: {
          alt: "Logotipo da OpenSauced",
          src: "/favicon.ico",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "introToOSS",
            position: "left",
            label: "Introdução ao open source",
          },
          {
            type: "docSidebar",
            sidebarId: "becomingAMaintainer",
            position: "left",
            label: "Tornando-se um mantenedor",
          },
          {
            href: "https://opensauced.pizza/docs/community-resources",
            label: "Blog",
            position: "left",
          },
          {
            href: "https://github.com/WybsonSantana/intro/tree/feature/translation/pt-br",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        logo: {
          alt: "Logotipo da OpenSauced",
          src: "img/logo_lightmode.png",
          href: "https://opensauced.pizza/",
          height: 40,
        },
        style: "light",
        links: [
          {
            title: "Aprender",
            items: [
              {
                label: "Guia de contribuição",
                to: "https://github.com/WybsonSantana/intro/blob/feature/translation/pt-br/contributing/CONTRIBUTING.md",
              },
              {
                label: "Cursos de código aberto",
                to: "https://intro.opensauced.pizza/#/",
              },
            ],
          },
          {
            title: "Comunidade",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/orgs/open-sauced/discussions",
              },
              {
                label: "X",
                href: "https://x.com/saucedopen",
              },
            ],
          },
          {
            title: "Mais",
            items: [
              {
                label: "Blog",
                href: "https://opensauced.pizza/docs/community-resources",
              },
              {
                label: "Assista às nossas demonstrações de funcionalidades",
                href: "https://www.youtube.com/playlist?list=PLHyZ0Wz_A44VRlE-YS9me5qxDNRgK5T3H",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} OpenSauced | Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
