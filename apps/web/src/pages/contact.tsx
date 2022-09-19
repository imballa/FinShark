import * as React from "react"
import Layout from "../components/layout"
import ContactForm from "../components/contact-form"
import { Box, Container, Heading } from "../components/ui"

export default function Contact(props) {
  return (
    <Layout {...props}>
      <Box paddingY={5}>
        <Container width="narrow">
          <ContactForm />
        </Container>
      </Box>
    </Layout>
  )
}
