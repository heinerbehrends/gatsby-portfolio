/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { jsx, Themed } from "theme-ui"
import Layout from "../components/layout"
import React from "react"
import { graphql } from "gatsby"
import HorizontalRule from "../components/horizontalRule"
import CoverGrid from "../components/coverGrid"

export const query = graphql`
  query InfoQuery {
    markdownRemark(fileAbsolutePath: { regex: "/info-page.md/" }) {
      html
      frontmatter {
        address {
          email
          insta
          phone
          website
        }
      }
    }
  }
`
type InfoData = {
  data: {
    markdownRemark: {
      frontmatter: {
        address: {
          insta: string
          email: string
          phone: string
          website: string
        }
      }
      html: string
    }
  }
}

export default function Info({ data }: InfoData) {
  const info = data.markdownRemark.frontmatter
  return (
    <>
      <section
        sx={{
          maxWidth: "1024px",
          marginX: [3, 3, 3, "auto"],
          marginY: [3],
          paddingX: [3, 4],
          paddingY: [2, 3],
          fontStyle: "italic",
          letterSpacing: "1.5px",
          fontSize: 1,
          lineHeight: "body",
          border: "solid",
        }}
      >
        <div
          dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
          sx={{
            p: {
              textIndent: 0,
              textTransform: "uppercase",
              "+ p": {
                marginTop: 3,
              },
            },
          }}
        ></div>

        <address
          sx={{
            display: "flex",
            flexDirection: ["column", "row", "row", "row"],
            marginTop: 3,
          }}
        >
          <div sx={{ paddingRight: 4 }}>
            <Themed.a href={`mailto:${info.address.email}`} target="_blank">
              {info.address.email}
            </Themed.a>
            <br />
            <Themed.a href={`tel:${info.address.phone}`}>
              {info.address.phone}
            </Themed.a>
          </div>
          <div>
            <Themed.a href={`https://www.instagram.com/${info.address.insta}`}>
              INSTA: {info.address.insta}
            </Themed.a>
            <br />
            <Themed.a href={info.address.website}>
              {info.address.website}
            </Themed.a>
          </div>
        </address>
      </section>
      <HorizontalRule />
      <CoverGrid />
    </>
  )
}
