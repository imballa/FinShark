import React from "react"
import Layout from "../components/layout"
import { Container, Text, Flex, Section, Space } from "../components/ui"
import { StaticImage } from "gatsby-plugin-image"
import KymQuizUsersForm from "../components/kym-quiz-users-form"

export default function KnowYourMoneyQuiz() {
  return (
    <Layout>
      <Section>
        <Container width="tight">
          <StaticImage
            src="../online-quiz.png"
            alt="KNOW YOUR MONEY QUIZ"
            width={1286}
            height={768}
          />
        </Container>
        <Container width="narrow">
          <Space size={5} />
          <Flex variant="column">
            <h1 className="text-3xl text-center sm:text-4xl leading-normal font-extrabold tracking-tight">
              KNOW YOUR MONEY QUIZ!
            </h1>

            <Flex variant="column">
              <Text variant="lead" center>
                KNOW YOUR MONEY Quiz can help you identify and analyse your past
                injuries, current problems and your present story around money -
                whether your money is SMILING OR CRYING.
              </Text>
            </Flex>
          </Flex>
          <Space size={3} />
          <KymQuizUsersForm />
        </Container>
      </Section>
    </Layout>
  )
}
