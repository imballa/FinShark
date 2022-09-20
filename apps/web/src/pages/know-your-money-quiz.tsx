import React from "react"
import { useState } from "react"
import Layout from "../components/layout"
import { Box, Container, Text, Flex, Section, Space } from "../components/ui"
import { StaticImage } from "gatsby-plugin-image"
import questions from "../questions.json"

export default function KnowYourMoneyQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedOptions, setSelectedOptions] = useState([])
  const [score, setScore] = useState(0)
  const [showScore, setShowScore] = useState(false)

  const handleAnswerOption = (answer) => {
    setSelectedOptions([
      (selectedOptions[currentQuestion] = { answerByUser: answer }),
    ])
    setSelectedOptions([...selectedOptions])
    console.log(selectedOptions)
  }

  const handlePrevious = () => {
    const prevQues = currentQuestion - 1
    prevQues >= 0 && setCurrentQuestion(prevQues)
  }

  const handleNext = () => {
    const nextQues = currentQuestion + 1
    nextQues < questions.length && setCurrentQuestion(nextQues)
  }

  const handleSubmitButton = () => {
    let newScore = 0
    for (let i = 0; i < questions.length; i++) {
      questions[i].answerOptions.map(
        (answer) =>
          answer.isCorrect &&
          answer.answer === selectedOptions[i]?.answerByUser &&
          (newScore += 1)
      )
    }
    setScore(newScore)
    setShowScore(true)
  }

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
          <div className="flex flex-col px-6 pb-8 bg-finBlue justify-center items-center shadow-md">
            {showScore ? (
              <h2 className="text-3xl font-semibold text-center text-white">
                You scored {score} out of {questions.length}
              </h2>
            ) : (
              <>
                <div className="flex flex-col items-start w-full">
                  <h4 className="mt-10 text-xl text-white/60">
                    Question {currentQuestion + 1} of {questions.length}
                  </h4>
                  <div className="mt-4 text-2xl text-white">
                    {questions[currentQuestion].question}
                  </div>
                </div>
                <div className="flex flex-col w-full mt-2">
                  {questions[currentQuestion].answerOptions.map(
                    (answer, index) => (
                      <div
                        key={index}
                        className="flex items-center w-full py-4 pl-5 m-2 ml-0 space-x-2 border-2 cursor-pointer border-white/10 rounded-xl bg-white/5"
                        onClick={(e) => handleAnswerOption(answer.answer)}
                      >
                        <input
                          type="radio"
                          name={answer.answer}
                          value={answer.answer}
                          checked={
                            answer.answer ===
                            selectedOptions[currentQuestion]?.answerByUser
                          }
                          onChange={(e) => handleAnswerOption(answer.answer)}
                          className="w-6 h-6 bg-slate-400"
                        />
                        <p className="ml-6 text-white">{answer.answer}</p>
                      </div>
                    )
                  )}
                </div>
                <div className="flex justify-between w-full mt-4 text-black">
                  <button
                    onClick={handlePrevious}
                    className="w-[49%] py-3 bg-slate-400 hover:bg-white hover:outline-double focus:outline-double rounded-lg"
                  >
                    Previous
                  </button>
                  <button
                    onClick={
                      currentQuestion + 1 === questions.length
                        ? handleSubmitButton
                        : handleNext
                    }
                    className="w-[49%] py-3 bg-slate-400 hover:bg-white hover:outline-double focus:outline-double rounded-lg"
                  >
                    {currentQuestion + 1 === questions.length
                      ? "Submit"
                      : "Next"}
                  </button>
                </div>
              </>
            )}
          </div>
        </Container>
      </Section>
    </Layout>
  )
}
