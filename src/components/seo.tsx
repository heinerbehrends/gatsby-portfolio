import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

type metaType = {
  site: {
    siteMetadata: {
      title: string
      description: string
      author: string
      keywords: string
      siteUrl: string
      image: string
    }
  }
}

function SEO({
  description = "",
  lang = "nl",
  meta = [],
  title,
  image,
  slug,
}: SEOProps) {
  const { site }: metaType = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            keywords
            siteUrl
            image
          }
        }
      }
    `
  )
  const metaDescription = description || site.siteMetadata.description
  const metaImage = image || site.siteMetadata.image

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: "keywords",
          content: site.siteMetadata.keywords,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content: metaImage,
        },
        {
          property: `og:url`,
          content: `${site.siteMetadata.siteUrl}${slug}`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata?.author || ``,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  )
}

type SEOProps = {
  description?: string
  lang?: string
  meta?: ConcatArray<
    | { name: string; content: any; property?: undefined }
    | { property: string; content: any; name?: undefined }
  >
  title: string
  image?: string
  slug?: string
}

export default SEO
