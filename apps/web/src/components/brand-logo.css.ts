import { style } from "@vanilla-extract/css"
import { theme } from "../theme.css"
import { media } from "./ui.css"

export const logoContainer = style({
  fontSize: theme.fontSizes[4],
  display: "flex",
  alignItems: "center",
})

export const logoText = style({
  display: "none",
  "@media": {
    [media.small]: {
      display: "inline-block",
    },
  },
})
