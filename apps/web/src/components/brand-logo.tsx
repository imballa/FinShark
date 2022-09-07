import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "./brand-logo.css"

export default function BrandLogo() {
  return (<div className={styles.logoContainer}><StaticImage src="../brand-logo.png" alt="finshark" width={300} height={80} /></div>)
}
