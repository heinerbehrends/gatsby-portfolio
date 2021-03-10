/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"

type CoverGridData = {
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
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              description
              title
              image {
                alt
                src {
                  childImageSharp {
                    gatsbyImageData(height: 332, placeholder: BLURRED)
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
        display: "grid",
        gridTemplateColumns: [
          "1fr 1fr",
          "1fr 1fr",
          "1fr 1fr 1fr",
          "1fr 1fr 1fr 1fr",
        ],
        gap: "15px",
        alignItems: "center",
      }}
    >
      {nodes.map(({ node }: CoverGridData) => (
        <Link to={`/${node.fields.slug}`}>
          <GatsbyImage
            image={node.frontmatter.image.src.childImageSharp.gatsbyImageData}
            alt={node.frontmatter.image.alt}
            objectFit={"scale-down"}
          />
        </Link>
      ))}
    </section>
  )
}
