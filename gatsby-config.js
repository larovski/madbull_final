module.exports = {
  siteMetadata: {
    title: `Madbull`,
    description: `The preMiere MAdbuLL MeMe Token excLusiveLY powered bY Cardano. EnouGh of the buLLs**t. Prepare 4 fLiGht. MAbuLL!!!!`,
    author: `© devio 2021`,
    siteUrl: `https://madbull.io/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `madbull`,
        short_name: `madbull`,
        start_url: `/`,
        background_color: `#4A3732`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/locales`,
        name: `locale`,
      },
    },
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        localeJsonSourceName: `locale`,
        languages: [`en`, `es`],
        defaultLanguage: `en`,
        redirect: true,
        siteUrl: `https://madbull.io`,
        i18nextOptions: {
          interpolation: {
            escapeValue: false,
          },
          keySeparator: false,
          nsSeparator: false,
        },
        pages: [
          {
            matchPath: "/:lang?/:uid",
            languages: ["en", "es"],
          },
          {
            matchPath: "/:lang?/rodeo/:uid",
            languages: ["en", "es"],
          },
          {
            matchPath: "/404",
            languages: ["en"],
          },
        ],
      },
    },
    `gatsby-plugin-postcss`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
