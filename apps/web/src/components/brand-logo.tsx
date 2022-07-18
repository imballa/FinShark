import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "./brand-logo.css"

export default function BrandLogo() {
  return (<div className={styles.logoContainer}><StaticImage src="../brand-logo.jpg" alt="finshark" width={84} height={84} /><span className={styles.logoText}>FinShark</span></div>)
}
