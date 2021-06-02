/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import logoWebm from "../videos/EASY_TIGER.webm"
import logoMp4 from "../videos/EASY_TIGER.mp4"

export default function TextLogo() {
  return (
    <div
      sx={{
        display: "flex",
        alignItems: "flex-end",
        height: "100%",
        flex: "1 1 auto",
      }}
    >
      <Link
        to={"/"}
        sx={{
          textDecoration: "none",
          color: "text",
          paddingLeft: ["1", "2", "3"],
          paddingBottom: "10px",
          "&:focus": {
            outline: "none",
            boxShadow: "focus",
          },
        }}
      >
        <video autoPlay loop muted height="60px" sx={{ padding: "0" }}>
          <source src={logoMp4} type="video/mp4" />
          <source src={logoWebm} type="video/webm" />
          <h1>Flying Tiger Design</h1>
        </video>
      </Link>
    </div>
  )
}
