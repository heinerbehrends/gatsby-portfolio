/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"

type CoverGridData = {
  node: {
    image: {
      alt: string
      src: {
        childImageSharp: {
          gatsbyImageData: IGatsbyImageData
        }
      }
    }
    fields: {
      slug: string
    }
  }
}

export default function CoverGrid() {
  const data = useStaticQuery(graphql`
    query CoverGridQuery {
      allContentJson {
        edges {
          node {
            image {
              alt
              src {
                childImageSharp {
                  gatsbyImageData(height: 332)
                }
              }
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  const nodes = data.allContentJson.edges
  console.log(nodes[1].node.fields.slug)
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
      {nodes.map(({ node }: CoverGridData) => (
        <Link to={`/${node.fields.slug}`}>
          <GatsbyImage
            image={node.image.src.childImageSharp.gatsbyImageData}
            alt={node.image.alt}
            objectFit={"scale-down"}
          />
        </Link>
      ))}
    </section>
  )
}
