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
import HorizontalRule from "../components/horizontalRule"

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
      html
      rawMarkdownBody
      frontmatter {
        title
        image {
          alt
          src {
            childImageSharp {
              gatsbyImageData(
                width: 480
                height: 480
                placeholder: NONE
                aspectRatio: 1
              )
            }
          }
        }
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
    bookCover.frontmatter?.meta?.ogDescription || bookCover.rawMarkdownBody
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
          maxWidth: "1024px",
          marginX: "auto",
          display: "grid",
          gap: 3,
          gridTemplateColumns: ["1fr", "1fr", "1fr 1fr", "1fr 1fr"],
          justifyItems: ["center", "center", "center", "inherit"],
          paddingX: [3, 3, 3, 0],
          paddingY: [2, 3],
        }}
      >
        <GatsbyImage
          sx={{
            width: "100%",
            height: "100%",
            maxHeight: ["320px", "480px"],
            maxWidth: ["320px", "480px"],
            border: "solid",
          }}
          image={
            bookCover.frontmatter.image.src.childImageSharp.gatsbyImageData
          }
          alt={bookCover.frontmatter.image.alt}
          loading={"eager"}
        />
        <div sx={{ paddingX: 3 }}>
          <h2
            sx={{
              textTransform: "uppercase",
              fontStyle: "italic",
              fontWeight: "bold",
              letterSpacing: "1.5px",
              paddingTop: 2,
              paddingBottom: 2,
              marginY: 0,
              fontSize: 4,
            }}
          >
            {bookCover.frontmatter.title}
          </h2>
          <section
            dangerouslySetInnerHTML={{ __html: bookCover.html }}
            sx={{
              h2: {
                textTransform: "uppercase",
                fontStyle: "italic",
                fontWeight: "bold",
                letterSpacing: "1.5px",
                padding: 0,
                marginY: 0,
                fontSize: 4,
              },
              fontStyle: "italic",
              letterSpacing: "1.5px",
              fontSize: 2,
              lineHeight: "body",
              margin: 0,
              padding: 0,
              maxWidth: "576px",
              "+ p": {
                textIndentation: "2em",
              },
            }}
          />
        </div>
      </section>
      <HorizontalRule />
      <CoverGrid />
    </Layout>
  )
}

export default BookCover
