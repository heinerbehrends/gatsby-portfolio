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
        height: ["35px", "50px", "60px"],
        // padding: 1,
        marginLeft: [3, 3, 3, 0],
        paddingY: 0,
        "&:focus": {
          outline: "1.5px dashed black",
        },
      }}
    >
      <video
        autoPlay
        loop
        muted
        sx={{ padding: "0", height: ["35px", "50px", "60px"] }}
      >
        <source src={logoMp4} type="video/mp4" />
        <source src={logoWebm} type="video/webm" />
        <h1>Flying Tiger Design</h1>
      </video>
    </Link>
  )
}
