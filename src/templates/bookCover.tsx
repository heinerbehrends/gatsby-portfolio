/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { jsx } from "theme-ui"
import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"
import CoverGrid from "../components/coverGrid"
import SEO from "../components/seo"

type BookCoverProps = {
  data: {
    site: {
      siteMetadata: {
        siteUrl: string
        image: string
      }
    }
    markdownRemark: {
      fields: {
        slug: string
      }
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
        meta: {
          ogDescription: string | null
          ogImage: string | null
        } | null
      }
    }
  }
}

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
              gatsbyImageData(width: 480, placeholder: BLURRED)
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
