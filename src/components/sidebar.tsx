import * as React from "react";
import * as Styles from "./sidebar.module.scss";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";

const Sidebar = () => {
  const data = useStaticQuery(graphql`
    query imageArray {
      allFile(filter: { relativePath: { regex: "/profile/i" } }) {
        nodes {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  `);

  const totalImages = 10; // This has to match the iterations in sidebar.module.scss

  let imageNodes = data.allFile.nodes;

  while (imageNodes.length < totalImages) {
    imageNodes.push(...imageNodes);
  }

  imageNodes = imageNodes.slice(0, 9); // check that this actually works

  return (
    <div>
      <div className={Styles.profileImages}>
        {imageNodes.map((node, i: number) => {
          return (
            <div className={Styles.imageContainer}>
              <GatsbyImage
                alt=""
                image={node.childImageSharp.gatsbyImageData}
                className={`${Styles.image} ${Styles[`image${i}`]}`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
