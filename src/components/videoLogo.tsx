/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import logoWebm from "../videos/EASY_TIGER.webm"
import logoMp4 from "../videos/EASY_TIGER.mp4"

export default function VideoLogo() {
  return (
    <Link
      to={"/"}
      sx={{
        textDecoration: "none",
        color: "text",
        paddingX: ["1", "2", "3"],
        paddingY: "10px",
        paddingBottom: ["1"],
        paddingTop: ["3"],
        "&:focus": {
          outline: "1.5px dashed black",
        },
      }}
    >
      <video
        autoPlay
        loop
        muted
        sx={{ padding: "0", height: ["40px", "60px"] }}
      >
        <source src={logoMp4} type="video/mp4" />
        <source src={logoWebm} type="video/webm" />
        <h1>Flying Tiger Design</h1>
      </video>
    </Link>
  )
}
