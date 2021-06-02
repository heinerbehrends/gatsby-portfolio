/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"

export default function CoverGridItem({ children }) {
  return (
    <div
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "1.5px solid black",
        paddingY: "10%",
        paddingX: "20%",
      }}
    >
      {children}
    </div>
  )
}
