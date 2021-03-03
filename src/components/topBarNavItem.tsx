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
        fontWeight: "500",
        color: "#333",
      }}
      partiallyActive={true}
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
        {children}
      </div>
    </Link>
  )
}
