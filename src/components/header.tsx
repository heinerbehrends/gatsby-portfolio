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
        // width: "100vw",
        backgroundColor: "#fff",
        // boxShadow: "big",
        borderBottom: "1.5px dashed black",
        position: "fixed",
        zIndex: "2",
        top: "0",
        width: "100%",
        height: "90px",
        // borderBottom: "1px solid",
        borderColor: "accent",
      }}
    >
      <div
        sx={{
          width: ["100%", "100%", "960px"],
          marginX: "auto",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <TextLogo />
        <Nav />
      </div>
    </header>
  )
}
