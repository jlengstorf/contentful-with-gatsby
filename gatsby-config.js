require("dotenv").config()

module.exports = {
  plugins: [
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: "boop",
      },
    },
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: "zbixbsgyr0xy",
        accessToken: process.env.CONTENTFUL_API_TOKEN,
      },
    },
  ],
}
