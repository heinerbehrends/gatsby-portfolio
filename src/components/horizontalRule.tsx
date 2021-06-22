/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
export default function HorizontalRule() {
  return (
    <hr
      sx={{
        margin: 0,
        width: "100%",
        border: "none",
        borderBottom: `dashed`,
      }}
    />
  )
}
