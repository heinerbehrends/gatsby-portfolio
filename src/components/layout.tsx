/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { jsx } from "theme-ui"
import React, { ReactNode } from "react"
import { Helmet } from "react-helmet"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import "./layout.css"

type LayoutProps = {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Helmet>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Helmet>
      <Header />
      <div
        sx={{
          margin: `0 auto`,
          maxWidth: 960,
          paddingX: 3,
          paddingTop: 3,
        }}
      >
        <main sx={{ marginTop: "64px" }}>{children}</main>
        <footer
          style={{
            marginTop: `2rem`,
          }}
        >
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
