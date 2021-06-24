import React from "react"
import CoverGrid from "../components/coverGrid"
import Layout from "../components/layout"
import Seo from "../components/seo"

function IndexPage() {
  return (
    <Layout>
      <Seo title="Easy Tiger Design" />
      <CoverGrid />
    </Layout>
  )
}

export default IndexPage
