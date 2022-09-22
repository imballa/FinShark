import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"
import ContactForm from "../components/contact-form"
import { Box, Container, Flex, Space } from "../components/ui"

interface ContactProps {
  data: {
    sanityPage: {
      id: string
      title: string
      description: string
      image: { id: string; url: string }
    }
  }
}

export default function Contact(props: ContactProps) {
  const { sanityPage } = props.data
  return (
    <Layout {...sanityPage}>
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

export const query = graphql`
  {
    sanityPage(title: { eq: "Contact" }) {
      id
      title
      description
      image {
        id
        url
      }
    }
  }
`
