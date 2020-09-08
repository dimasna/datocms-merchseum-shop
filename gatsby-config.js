require("dotenv").config();

module.exports = {
  siteMetadata: {
    siteName: 'My Shop',
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-datocms`,
      options: { apiToken: '30864c629a4c0e9af37f68f16be4e2' },
    },
    {
      resolve: 'gatsby-plugin-snipcart',
      options: {
        apiKey: 'ZGI0NGUxMTQtZDI1My00NTE1LTg4ZDAtNzYyNDBkOGRhYTM5NjM3MzUxODM1ODEwMDMzOTE0',
        autopop: true
      }
    },
  ],
}
