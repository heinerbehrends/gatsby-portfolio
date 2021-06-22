/** @jsx jsx */
import { jsx, Themed } from "theme-ui"
import Layout from "../components/layout"
import React from "react"
import { graphql } from "gatsby"
import HorizontalRule from "../components/horizontalRule"
import CoverGrid from "../components/coverGrid"

export const query = graphql`
  query InfoQuery {
    infoYaml {
      address {
        insta
        email
        phone
        website
      }
      about
    }
  }
`
type InfoData = {
  data: {
    infoYaml: {
      address: {
        insta: string
        email: string
        phone: string
        website: string
      }
      about: string[]
    }
  }
}

export default function Info({ data }: InfoData) {
  const info = data.infoYaml
  return (
    <Layout>
      <section
        sx={{
          maxWidth: "1024px",
          marginX: [3, "auto"],
          marginY: [3],
          padding: [3, 4],
          // keeps margin from collapsing
          fontStyle: "italic",
          letterSpacing: "1px",
          fontSize: 1,
          lineHeight: 1.5,
          border: "solid",
        }}
      >
        {info.about.map((paragraph, index) => {
          if (index === 0) {
            return (
              <p key={index} sx={{ marginTop: 0 }}>
                {paragraph}
              </p>
            )
          } else return <p key={index}>{paragraph}</p>
        })}

        <address
          sx={{
            display: "flex",
            flexDirection: ["column", "column", "column", "row"],
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
    </Layout>
  )
}
