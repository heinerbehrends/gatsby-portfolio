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
          marginTop: "90px",
          maxWidth: "960px",
          paddingX: 3,
        }}
      >
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Layout
