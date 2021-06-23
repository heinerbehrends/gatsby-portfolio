/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { jsx } from "theme-ui"
import React, { ReactNode } from "react"
import { Helmet } from "react-helmet"
import { Global } from "@emotion/react"
import Header from "./header"
import Footer from "./footer"
import { Theme } from "theme-ui"

type LayoutProps = {
  children: ReactNode
}

function Layout({ children }: LayoutProps) {
  return (
    <>
      <Global
        styles={(theme: Theme) => {
          return {
            "*": {
              // @ts-ignore
              fontFamily: theme?.fonts?.body,
              boxSizing: "border-box",
            },
            body: {
              margin: 0,
            },
            p: {
              marginTop: 0,
              marginBottom: 0,
              "+ p": {
                textIndent: "32px",
              },
            },
          }
        }}
      />
      <Helmet>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Helmet>
      <Header />
      <main
        sx={{
          margin: `0 auto`,
          marginTop: ["75px", "90px"],
          // to prevent margin collaps
          border: "1px solid transparent",
        }}
      >
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Layout
