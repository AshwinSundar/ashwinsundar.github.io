import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Ashwin Sundar`,
    siteUrl: `https://ashwinsundar.com`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/../../blog`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/../../src/images`,
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sass",
  ],
};

export default config;
