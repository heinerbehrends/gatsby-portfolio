/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { jsx } from "theme-ui"
import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"
import CoverGrid from "../components/coverGrid"

type BookCoverProps = {
  data: {
    markdownRemark: {
      frontmatter: {
        title: string
        description: string
        image: {
          alt: string
          src: {
            childImageSharp: {
              gatsbyImageData: IGatsbyImageData
            }
          }
        }
      }
    }
  }
}

export const query = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        description
        image {
          alt
          src {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, width: 480)
            }
          }
        }
      }
    }
  }
`

function BookCover({ data }: BookCoverProps) {
  const { markdownRemark: bookCover } = data
  return (
    <Layout>
      <div
        sx={{
          display: "grid",
          gap: 3,
          gridTemplateColumns: "3fr 2fr",
          paddingX: 0,
          paddingBottom: 0,
        }}
      >
        <GatsbyImage
          image={
            bookCover.frontmatter.image.src.childImageSharp.gatsbyImageData
          }
          alt={bookCover.frontmatter.image.alt}
          loading={"eager"}
        />
        <div sx={{ marginTop: 0, paddingX: 4 }}>
          <h2
            sx={{
              paddingTop: 2,
              paddingBottom: 3,
              marginY: 0,
              fontSize: 5,
            }}
          >
            {bookCover.frontmatter.title}
          </h2>
          <p
            sx={{
              whiteSpace: "pre-wrap",
              fontSize: 3,
              lineHeight: "body",
              margin: 0,
            }}
          >
            {bookCover.frontmatter.description}
          </p>
        </div>
      </div>
      <h3
        sx={{
          paddingY: 3,
          textAlign: "center",
          fontSize: 4,
          fontWeight: "body",
        }}
      >
        Ontdek meer
      </h3>
      <CoverGrid />
    </Layout>
  )
}

export default BookCover
