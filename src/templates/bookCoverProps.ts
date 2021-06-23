import { IGatsbyImageData } from "gatsby-plugin-image"

export type BookCoverProps = {
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
      html: string
      rawMarkdownBody: string
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
