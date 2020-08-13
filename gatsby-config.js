require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Miles Website`,
    description: `I will be good at this`,
    author: `@marcomasik`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `atruu98k7ms7`,
        accessToken: `_7-_JAZEC7d84tkeeRHjFnx3sAIF0wJakCLVYduLhao`,
      },
    },
    `gatsby-plugin-sass`,
  ],
}
