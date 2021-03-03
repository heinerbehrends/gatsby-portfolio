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
    contentJson: {
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

function BookCover({ data }: BookCoverProps) {
  const { contentJson: bookCover } = data
  return (
    <Layout>
      <div
        sx={{
          display: "grid",
          gap: 4,
          gridTemplateColumns: "1fr 1fr",
          paddingX: 0,
          paddingBottom: 3,
        }}
      >
        <GatsbyImage
          image={bookCover.image.src.childImageSharp.gatsbyImageData}
          alt={bookCover.image.alt}
        />
        <div sx={{ marginTop: 0 }}>
          <h2
            sx={{ textAlign: "center", paddingY: 4, marginY: 0, fontSize: 5 }}
          >
            {bookCover.title}
          </h2>
          <p
            sx={{
              whiteSpace: "pre-wrap",
              fontSize: 3,
              lineHeight: "body",
              margin: 0,
            }}
          >
            {bookCover.description}
          </p>
        </div>
      </div>
      <CoverGrid />
    </Layout>
  )
}

export default BookCover

export const query = graphql`
  query($id: String!) {
    contentJson(id: { eq: $id }) {
      title
      description
      image {
        alt
        src {
          childImageSharp {
            gatsbyImageData(width: 480)
          }
        }
      }
    }
  }
`
