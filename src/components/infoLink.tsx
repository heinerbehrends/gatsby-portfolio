import React from "react"
import { Link as GatsbyLink } from "gatsby"
import { Link } from "theme-ui"

export default function InfoLink() {
  return (
    <Link
      sx={{
        display: "flex",
        alignItems: "center",
        fontSize: 1,
        fontStyle: "italic",
        color: "black",
        textDecoration: "none",
        letterSpacing: "2px",
        border: "solid",
        paddingX: [3, 4],
        paddingY: [2, 3],
        marginRight: [3, 3, 3, 0],
        marginBottom: 0,
        marginTop: "20px",
        justifyContent: "center",
        "&:focus": {
          border: "dashed",
          outline: "none",
        },
      }}
      // @ts-ignore
      to={"/info"}
      as={GatsbyLink}
    >
      INFO
    </Link>
  )
}
