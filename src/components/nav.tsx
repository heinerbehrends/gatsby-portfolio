/** @jsx jsx */
import { jsx } from "theme-ui"
import TopBarNavItem from "./topBarNavItem"

export default function Nav() {
  return (
    <div
      sx={{
        display: "flex",
        flex: "1 1 auto",
        justifyContent: "flex-end",
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
        <TopBarNavItem text="about" location="/about/" />
        <TopBarNavItem text="contact" location="/contact/" />
        <TopBarNavItem text="home" location="/" />
      </nav>
    </div>
  )
}
