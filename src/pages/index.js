import React from "react"
import CoverGrid from "../components/coverGrid"
import Layout from "../components/layout"
// import SEO from "../components/seo"
// import { Helmet } from "react-helmet"

function IndexPage() {
  return (
    <>
      {/* <Helmet>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Helmet> */}
      <Layout>
        {/* <SEO title="Home" /> */}
        <CoverGrid />
      </Layout>
    </>
  )
}

export default IndexPage
