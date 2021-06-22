/** @jsx jsx */
import React from "react"
import { jsx, Themed } from "theme-ui"

export default function Footer() {
  return (
    <footer
      sx={{
        borderTop: `dashed`,
        paddingY: 4,
      }}
    >
      <address
        sx={{
          maxWidth: "1024px",
          marginX: "auto",
          paddingLeft: [3, 0],
          fontSize: 1,
          textTransform: "uppercase",
          letterSpacing: "1px",
          lineHeight: "body",
        }}
      >
        All Images © {new Date().getFullYear()} Jop Luberti. <br />
        Address: Martinikerkhof 15 A 9712 JG Groningen, Netherlands <br />
        KVK / Chamber of commerce number: 59959010 <br />
        Built with love by
        {``}
        <Themed.a sx={{ paddingY: 0 }} href="https://www.flyfi.nl">
          <em>flyfi</em>
        </Themed.a>{" "}
      </address>
    </footer>
  )
}
