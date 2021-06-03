/** @jsx jsx */
import { jsx, ThemeUIStyleObject } from "theme-ui"

export const inputStyles: ThemeUIStyleObject = {
  backgroundColor: "#fafafa",
  padding: "3",
  maxWidth: ["280px", "400px"],
  border: "none",
  borderBottom: "1.5px dashed #333",
  fontSize: ["2", "3"],
  "&:focus": {
    outline: "1.5px dashed #333",
    borderBottom: "none",
  },
  "::placeholder": {
    color: "#bbb",
  },
}

export const buttonStyles: ThemeUIStyleObject = {
  ...inputStyles,
  border: "none",
  borderBottom: "none",
  backgroundColor: "accent",
  color: "background",
  fontWeight: "bold",
  fontSize: "4",
  marginTop: "4",
}

export function ErrorMessage({ children }: errorMessageProps) {
  return (
    <span role="alert" sx={{ marginLeft: "3", marginTop: "1", color: "red" }}>
      {children}
    </span>
  )
}

type errorMessageProps = {
  children?: any
}

type labelProps = {
  for: string
  children?: any
}

export function Label(props: labelProps) {
  return (
    <label
      htmlFor={props.for}
      sx={{ marginLeft: "3", marginTop: "4", marginBottom: "1" }}
    >
      {props.children}
    </label>
  )
}
