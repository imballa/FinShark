import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "./brand-logo.css"

export default function BrandLogo() {
  return (<div className={styles.logoContainer}><StaticImage src="../brand-logo.jpeg" alt="finshark" width={240} height={90} /></div>)
}
