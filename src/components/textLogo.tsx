/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"

export default function TextLogo() {
  return (
    <div
      sx={{
        display: "flex",
        alignItems: "center",
        height: "100%",
        flex: "1 1 auto",
      }}
    >
      <Link
        to={"/"}
        sx={{
          textDecoration: "none",
          color: "text",
          paddingX: ["1", "2", "3"],
          paddingY: "2",
          "&:focus": {
            outline: "none",
            boxShadow: "focus",
          },
        }}
      >
        <h4
          sx={{
            color: "#333",
            fontWeight: "thin",
            fontSize: ["5", "5", "36px"],
            margin: "1",
          }}
        >
          Jop Luberti
          <span
            sx={{
              fontSize: "3",
              fontStyle: "normal",
              display: ["none", "none", "none", "none", "inline"],
            }}
          >
            {" "}
            Grafische Vormgeving
          </span>
        </h4>
      </Link>
    </div>
  )
}
