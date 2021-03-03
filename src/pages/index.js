import React from "react"
import CoverGrid from "../components/coverGrid"
import Layout from "../components/layout"
import SEO from "../components/seo"

function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <CoverGrid />
    </Layout>
  )
}

export default IndexPage
