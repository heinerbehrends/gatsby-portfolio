/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"

type TopBarNavItemProps = {
  children: string
  location: string
  variant?: "active"
}

export default function TopBarNavItem({
  children,
  location,
}: TopBarNavItemProps) {
  return (
    <Link
      activeStyle={{
        color: "#333",
      }}
      partiallyActive={true}
      sx={{
        fontStyle: "italic",
        textTransform: "uppercase",
        textDecoration: "none",
        color: "#888",
        fontSize: "2",
        backgroundColor: "transparent",
        "&:hover": { color: "#333" },
        "&:focus": {
          outline: "1.5px dashed black",
        },
      }}
      to={location}
    >
      <div
        sx={{
          display: "flex",
          height: "100%",
          alignItems: "flex-end",
          paddingX: ["2", "2", "3"],
          paddingBottom: "12px",
        }}
      >
        {children}
      </div>
    </Link>
  )
}
