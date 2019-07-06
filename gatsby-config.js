/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    instagram: "https://instagram.com/langston_alimayu",
    bandcamp: "https://langle.bandcamp.com",
    email: "ezra.rr.davis@gmail.com",
  },
  plugins: [
    "gatsby-transformer-remark",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          "gatsby-remark-relative-images",
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "art",
        path: `${__dirname}/src/art`,
      },
    },
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `langston_alimayu`,
      },
    },
    `gatsby-transformer-sharp`,
  ],
}
