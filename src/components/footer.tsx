/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"

export default function Footer() {
  return (
    <footer
      sx={{
        // marginTop: 5,
        borderTop: `1.5px dashed black`,
        paddingY: 4,
      }}
    >
      <div sx={{ maxWidth: "960px", marginX: "auto", paddingLeft: "3" }}>
        All Images © {new Date().getFullYear()} Jop Luberti, Built with love by
        {` `}
        <a href="https://www.flyfi.nl">
          <em>flyfi</em>
        </a>{" "}
      </div>
    </footer>
  )
}
