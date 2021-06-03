/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { jsx } from "theme-ui"
import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { GatsbyImage } from "gatsby-plugin-image"
import CoverGrid from "../components/coverGrid"
import SEO from "../components/seo"
import { BookCoverProps } from "./bookCoverProps"

export const query = graphql`
  query($id: String!) {
    site {
      siteMetadata {
        siteUrl
        image
      }
    }
    markdownRemark(id: { eq: $id }) {
      fields {
        slug
      }
      frontmatter {
        title
        image {
          alt
          src {
            childImageSharp {
              gatsbyImageData(
                width: 480
                height: 480
                placeholder: TRACED_SVG
                aspectRatio: 1
              )
            }
          }
        }
        description
        meta {
          ogDescription
          ogImage
        }
      }
    }
  }
`

function BookCover({ data }: BookCoverProps) {
  const { markdownRemark: bookCover } = data
  const metaDescription =
    bookCover.frontmatter?.meta?.ogDescription ||
    bookCover.frontmatter.description
  const metaImage = bookCover.frontmatter?.meta?.ogImage
    ? `${data.site.siteMetadata.siteUrl}${bookCover.frontmatter?.meta?.ogImage}`
    : data.site.siteMetadata.image
  return (
    <Layout>
      <SEO
        title={bookCover.frontmatter.title}
        description={metaDescription}
        image={metaImage}
        slug={bookCover.fields.slug}
      />
      <section
        sx={{
          display: "grid",
          gap: 3,
          gridTemplateColumns: ["1fr", "1fr", "1fr", "1fr 1fr"],
          justifyItems: "center",
          padding: 0,
          paddingY: 5,
          borderBottom: `1.5px dashed black`,
        }}
      >
        <GatsbyImage
          sx={{ height: ["320px", "480px"], width: ["320px", "480px"] }}
          image={
            bookCover.frontmatter.image.src.childImageSharp.gatsbyImageData
          }
          alt={bookCover.frontmatter.image.alt}
          loading={"eager"}
        />
        <div sx={{ marginTop: 0, paddingX: [2, 4] }}>
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
              maxWidth: "576px",
            }}
          >
            {bookCover.frontmatter.description}
          </p>
        </div>
      </section>
      <CoverGrid />
    </Layout>
  )
}

export default BookCover
