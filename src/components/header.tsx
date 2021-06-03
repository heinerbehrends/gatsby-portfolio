/** @jsx jsx */
import { jsx } from "theme-ui"
import Nav from "./nav"
import VideoLogo from "./videoLogo"

export default function Header() {
  return (
    <header
      sx={{
        display: "flex",
        backgroundColor: "#fff",
        borderBottom: "1.5px dashed black",
        position: "fixed",
        paddingLeft: ["2", "0"],
        zIndex: "2",
        top: "0",
        width: "100%",
        height: "90px",
      }}
    >
      <div
        sx={{
          width: ["100%", "100%", "960px"],
          marginX: "auto",
          display: "flex",
          flexDirection: ["column", "row"],
          justifyContent: "space-between",
        }}
      >
        <VideoLogo />
        <Nav />
      </div>
    </header>
  )
}
