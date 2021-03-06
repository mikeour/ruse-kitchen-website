module.exports = {
  siteMetadata: {
    title: `Ruse Vegan Kitchen`,
    description: `Website for Ruse Vegan Kitchen, based out of Las Vegas, NV.`,
    author: `@mikeour`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    "gatsby-plugin-netlify-cms",
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `menu-items`,
        path: `${__dirname}/content/menu-items`
      }
    },
    "gatsby-transformer-remark",
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/layouts/index.js`)
      }
    },
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint:
          "https://rusekitchen.us19.list-manage.com/subscribe/post?u=f8d5448d113bcf93e5ea91295&amp;id=5b0a9d6c0d"
      }
    },
    {
      resolve: "gatsby-source-instagram",
      options: {
        username: "rusevegankitchen"
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-154375506-1"
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ruse Kitchen`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logos/ruse_plant.png` // This path is relative to the root of the site.
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`
  ]
};
