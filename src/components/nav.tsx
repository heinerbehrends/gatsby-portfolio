/** @jsx jsx */
import { jsx } from "theme-ui"
import TopBarNavItem from "./topBarNavItem"

export default function Nav() {
  return (
    <div
      sx={{
        display: "flex",
        flex: "1 1 auto",
        justifyContent: ["flex-start", "flex-end"],
        height: "100%",
        margin: "0",
      }}
    >
      <nav
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          height: "100%",
          margin: "0",
        }}
      >
        <TopBarNavItem location="/about/">about</TopBarNavItem>
        <TopBarNavItem location="/contact/">contact</TopBarNavItem>
        <TopBarNavItem location="/">ontwerpen</TopBarNavItem>
      </nav>
    </div>
  )
}
