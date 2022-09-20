import * as React from "react"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"
import ContactForm from "../components/contact-form"
import { Box, Container, Flex, Space } from "../components/ui"

export default function Contact(props) {
  return (
    <Layout {...props}>
      <Box paddingY={4}>
        <Container width="tight">
          <StaticImage
            src="../contact-us.png"
            alt="contact-us"
            width={1286}
            height={768}
          />
          <Space size={5} />
          <Flex variant="column">
            <h1 className="text-3xl text-center sm:text-4xl leading-normal font-extrabold tracking-tight">
              Contact Us
            </h1>
          </Flex>
        </Container>
        <Space size={5} />

        <Container width="normal">
          <ContactForm />
        </Container>
      </Box>
    </Layout>
  )
}
