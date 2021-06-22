/** @jsx jsx */
import { jsx } from "theme-ui"
import InfoLink from "./infoLink"
import VideoLogo from "./videoLogo"

export default function Header() {
  return (
    <header
      sx={{
        display: "flex",
        backgroundColor: "#fff",
        borderBottom: "dashed",
        position: "fixed",
        zIndex: "2",
        top: "0",
        width: "100%",
        height: ["75px", "90px"],
      }}
    >
      <div
        sx={{
          paddingBottom: 3,
          width: "100%",
          maxWidth: "1024px",
          marginX: "auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
        }}
      >
        <VideoLogo />
        <InfoLink />
      </div>
    </header>
  )
}
