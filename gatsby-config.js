const path = require('path');
module.exports = {
  siteMetadata: {
    title: 'Django Wiki',
    description:
      'React, NodeJS, Python and Gatsby; lets become fullstack together.',
    author: '@ikennagabrielifenna',
    twitterUsername: '@ikenna_gabrielifenna',
    image: '/bg.jpg',
    siteUrl: 'https://djangowiki.netlify.com',
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `src/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `src/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://djangowiki.netlify.com',
        sitemap: 'https://djangowiki.netlify.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
          },
        ],
      },
    },
    {
      resolve: `gatsby-remark-vscode`,
      options: {
        colorTheme: {
          defaultTheme: 'Monokai Dimmed',
          prefersDarkTheme: 'Monokai Dimmed',
          prefersLightTheme: 'Quiet Light',
        },
        wrapperClassName: '',
        injectStyles: true,
        extensions: [],
        extensionDataDirectory: path.resolve('extensions'),
        languageAliases: {},
        replaceColor: x => x,
        getLineClassName: ({ content, index, language, codeFenceOptions }) =>
          '',
        logLevel: 'error',
      },
    },
  ],
};
