/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import Nav from "./nav"
import TextLogo from "./textLogo"

export default function Header() {
  return (
    <header
      sx={{
        display: "flex",
        maxWidth: "100vw",
        backgroundColor: "#fffbfb",
        boxShadow: "big",
        position: "fixed",
        zIndex: "2",
        top: "0",
        width: "100%",
        paddingX: ["2", "3"],
        paddingY: "4",
        height: "64px",
        // borderBottom: "1px solid",
        borderColor: "accent",
      }}
    >
      <TextLogo />
      <Nav />
    </header>
  )
}
