require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: 'Hatta',
    description:
      'While artists work from real to the abstract, architects must work from the abstract to the real.',
    url: 'https://www.hattahatta.com', // No trailing slash allowed!
    image: '/logo.png', // Path to the image placed in the 'static' folder, in the project's root directory.
  },
  plugins: [
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true, // defaults to false
        jsxPragma: `jsx`, // defaults to "React"
        allExtensions: true, // defaults to false
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: 'Montserrat',
              variants: ['400', '600', '700', '900'],
            },
          ],
        },
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-layout`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images/`,
      },
    },
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.API_TOKEN,
      },
    },
  ],
};
