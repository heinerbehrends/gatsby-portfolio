import { Theme } from "theme-ui"

const theme: Theme = {
  colors: {
    text: "#555",
    background: "#fff",
    primary: "#fff",
    secondary: "#333",
    accent: "#4faee3",
  },
  fonts: {
    body: `"Helvetica Neue", Helvetica, Arial, Inter, 
    "Liberation Sans", sans-serif`,
    heading: "body",
    monospace: "Menlo, monospace",
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.75,
    heading: 1.125,
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  breakpoints: ["420px", "650px", "1024px"],
  shadows: {
    big: "2px 2px 4px rgba(0, 0, 0, 0.1)",
    focus: "0 0 0 1px #000",
    text: "5px 5px 5px rgba(0, 0, 0, 0.2)",
  },
  borders: {
    solid: "1.5px solid black",
    dashed: "1.5px dashed black",
  },
  styles: {
    a: {
      display: "inline-block",
      fontWeight: "bold",
      textDecoration: "none",
      color: "text",
      padding: 2,
      ":hover": {
        textDecoration: "underline",
      },
      "&:focus": {
        border: "dashed",
        outline: "none",
        textDecoration: "underline",
      },
    },
  },
}

export default theme
