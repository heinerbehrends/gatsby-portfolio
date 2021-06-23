module.exports = {
  siteMetadata: {
    title: `Portfolio van Jop Luberti`,
    description: `Grafisch ontwerp voor boekomslagen.`,
    author: `Jop Luberti`,
    keywords: `Grafisch ontwerp, boekomslagen, patronen, ontwerp`,
    siteUrl: `https://goofy-kalam-085d37.netlify.app`,
    image: `https://goofy-kalam-085d37.netlify.app/images/ogImageHome.jpg`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `bookcovers`,
        path: `${__dirname}/src/content/books`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `info`,
        path: `${__dirname}/src/content/info`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          // gatsby-remark-relative-images must go before gatsby-remark-images
          {
            resolve: `gatsby-remark-relative-images`,
            options: {
              // [Optional] The root of "media_folder" in your config.yml
              // Defaults to "static"
              staticFolderName: "static",
              include: [`image.src`],
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: { maxWidth: 550 },
          },
        ],
      },
    },
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-theme-ui`,
    "gatsby-plugin-react-helmet",
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
}
