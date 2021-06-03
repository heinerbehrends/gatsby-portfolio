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
    body: `"HelveticaNeue-Light", "Helvetica Neue Light", 
    "Helvetica Neue", Helvetica, Arial, "Free Sans", 
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
    body: 1.5,
    heading: 1.125,
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  breakpoints: ["420px", "576px", "960px"],
  shadows: {
    big: "2px 2px 4px rgba(0, 0, 0, 0.1)",
    focus: "0 0 0 1px #000",
    text: "5px 5px 5px rgba(0, 0, 0, 0.2)",
  },
}

export default theme
