import * as React from "react";
import Layout from "../../components/layout";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";
import { graphql } from "gatsby";

const BlogPost = ({ data }) => {
  const image = getImage(data.mdx.frontmatter.hero_image);
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <GatsbyImage image={image} alt={data.mdx.frontmatter.hero_image_alt} />
      <p>{data.mdx.frontmatter.date}</p>
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        hero_image_alt
        hero_image_credit_text
        hero_image_credit_link
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      body
    }
  }
`;
export default BlogPost;
