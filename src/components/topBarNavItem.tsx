/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"

type TopBarNavItemProps = {
  text: string
  location: string
  variant?: "active"
}

export default function TopBarNavItem({ text, location }: TopBarNavItemProps) {
  return (
    <Link
      activeStyle={{
        fontWeight: "500",
        color: "#333",
      }}
      sx={{
        textDecoration: "none",
        color: "#888",
        fontSize: ["2", "2", "3"],
        fontWeight: "thin",
        backgroundColor: "transparent",
        "&:hover": { color: "#333" },
        "&:focus": {
          outline: "none",
          boxShadow: "focus",
        },
      }}
      to={location}
    >
      <div
        sx={{
          display: "flex",
          height: "100%",
          alignItems: "center",
          paddingX: ["2", "2", "3"],
        }}
      >
        {text}
      </div>
    </Link>
  )
}
