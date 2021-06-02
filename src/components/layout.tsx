/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { jsx } from "theme-ui"
import React, { ReactNode } from "react"
import { Helmet } from "react-helmet"
import { Global } from "@emotion/react"
import Header from "./header"
import "./layout.css"

type LayoutProps = {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Global
        styles={theme => ({
          "*": {
            fontFamily: "Helvetica, 'Helveltic Neue', Arial, 'Liberation Sans'",
          },
        })}
      />
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
        <main sx={{ marginTop: "140px" }}>{children}</main>
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

export default Layout
