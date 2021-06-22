/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { Link as GatsbyLink } from "gatsby"
import { Link } from "theme-ui"

export default function CoverGridItem({
  children,
  link,
}: {
  children: React.ReactNode
  link: string
}) {
  return (
    <Link
      // @ts-ignore
      to={link}
      as={GatsbyLink}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "solid",
        padding: 0,
        "&:focus": {
          border: "dashed",
          outline: "none",
        },
      }}
    >
      {children}
    </Link>
  )
}
