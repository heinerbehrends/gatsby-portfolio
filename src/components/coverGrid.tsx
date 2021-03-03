/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

export default function CoverGrid() {
  const data = useStaticQuery(graphql`
    query CoverGridQuery {
      allContentJson {
        edges {
          node {
            title
            description
            image {
              alt
              src {
                childImageSharp {
                  gatsbyImageData(height: 332)
                }
              }
            }
          }
        }
      }
    }
  `)
  const nodes = data.allContentJson.edges
  console.log(nodes)
  return (
    <section
      sx={{
        display: "grid",
        gridTemplateColumns: [
          "1fr 1fr",
          "1fr 1fr",
          "1fr 1fr 1fr",
          "1fr 1fr 1fr 1fr",
        ],
        gap: "15px",
        alignItems: "center",
        paddingTop: 3,
      }}
    >
      {nodes.map(({ node }) => (
        <GatsbyImage
          image={node.image.src.childImageSharp.gatsbyImageData}
          alt={node.image.alt}
          objectFit={"scale-down"}
        />
      ))}
    </section>
  )
}
