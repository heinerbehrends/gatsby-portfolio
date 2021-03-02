import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

function IndexPage() {
  const data = useStaticQuery(graphql`
    query BooksQuery {
      allContentJson {
        edges {
          node {
            Bookcovers {
              title
              image {
                src {
                  childImageSharp {
                    fluid(maxWidth: 500) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `)
  const bookcovers = data.allContentJson.edges[0].node.Bookcovers
  console.log(bookcovers)
  return (
    <Layout>
      <SEO title="Home" />
      {bookcovers.map((
        /** @type {{ image: { src: { childImageSharp: { fluid: { srcSetWebp: import("gatsby-image").FluidObject | import("gatsby-image").FluidObject[]; }; }; }; }; }} */ cover
      ) => (
        <>
          <Img fluid={cover.image.src.childImageSharp.fluid} />
          <p>{cover.title}</p>
        </>
      ))}
    </Layout>
  )
}

export default IndexPage
