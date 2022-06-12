import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import * as sections from "../components/sections"
import Fallback from "../components/fallback"

// interface ContactProps {
//   data: {
//     contactPage: {
//       id: string
//       title: string
//       description: string
//       image: { id: string; url: string }
//       blocks: sections.HomepageBlock[]
//     }
//   }
// }

export default function Contact(props) {
//   const { contactPage } = props.data

  return (
    <Layout {...props}>
        <h2>Contact Us</h2>
      {/* {contactPage.blocks.map((block) => {
        const { id, blocktype, ...componentProps } = block
        const Component = sections[blocktype] || Fallback
        return <Component key={id} {...(componentProps as any)} />
      })} */}
    </Layout>
  )
}

// export const query = graphql`
//   {
    
//   }
// `
