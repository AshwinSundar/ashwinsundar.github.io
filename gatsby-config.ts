import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Ashwin Sundar`,
    siteUrl: `https://ashwinsundar.com`,
  },
  plugins: ["gatsby-plugin-sass", "gatsby-plugin-postcss"],
};

export default config;
