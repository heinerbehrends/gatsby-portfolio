/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import CoverGridItem from "./coverGridItem"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"

type CoverGridData = {
  index: number
  node: {
    frontmatter: {
      image: {
        alt: string
        src: {
          childImageSharp: {
            gatsbyImageData: IGatsbyImageData
          }
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
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/books/" } }) {
        edges {
          node {
            frontmatter {
              description
              title
              image {
                alt
                src {
                  childImageSharp {
                    gatsbyImageData(height: 480, placeholder: NONE)
                  }
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
  const nodes = data.allMarkdownRemark.edges
  return (
    <section
      sx={{
        maxWidth: "1024px",
        boxSizing: "content-box",
        marginX: "auto",
        paddingY: 3,
        paddingX: 3,
        display: "grid",
        gridTemplateColumns: ["1fr", "1fr 1fr", "1fr 1fr 1fr", "1fr 1fr 1fr"],
        gap: [3, 3, 4, 5],
        alignItems: "center",
      }}
    >
      {nodes.map(({ node, index }: CoverGridData) => (
        <CoverGridItem link={`/${node.fields.slug}`} key={index}>
          <GatsbyImage
            style={{ width: "100%" }}
            image={node.frontmatter.image.src.childImageSharp.gatsbyImageData}
            alt={node.frontmatter.image.alt}
            objectFit={"scale-down"}
          />
        </CoverGridItem>
      ))}
    </section>
  )
}
