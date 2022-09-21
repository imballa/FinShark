import React, { useState } from "react"
import { useForm, ValidationError } from "@formspree/react"
import { StaticImage } from "gatsby-plugin-image"
import { Container } from "../components/ui"
import questions from "../questions.json"

export default function KymQuizForm() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedOptions, setSelectedOptions] = useState([])
  const [score, setScore] = useState("")
  const [showScore, setShowScore] = useState(false)
  const [state, handleSubmit] = useForm("xrgdpwdw", {
    data: {
      subject: "Answers given",
      moneyAnalysis: function () {
        // This function will be evaluated at submission time
        let analyseMoney = ""
        let smilingMoneyCount = 0
        smilingMoneyCount = selectedOptions
          .filter((i) => i !== undefined)
          .filter((i) => i.answerId == "A").length
        let cryingMoneyCount = 0
        cryingMoneyCount = selectedOptions
          .filter((i) => i !== undefined)
          .filter((i) => i.answerId == "B").length
        smilingMoneyCount > cryingMoneyCount
          ? (analyseMoney = "Smiling Money")
          : (analyseMoney = "Crying Money")
        setScore(analyseMoney)
        setShowScore(true)
        return analyseMoney
      },
    },
  })

  const handleAnswerOption = (answer, id) => {
    setSelectedOptions([
      (selectedOptions[currentQuestion] = {
        answerByUser: answer,
        answerId: id,
      }),
    ])
    setSelectedOptions([...selectedOptions])
    console.log(selectedOptions)
  }

  const handlePrevious = (e) => {
    e.preventDefault()
    const prevQues = currentQuestion - 1
    prevQues >= 0 && setCurrentQuestion(prevQues)
  }

  const handleNext = (e) => {
    e.preventDefault()
    const nextQues = currentQuestion + 1
    nextQues < questions.length && setCurrentQuestion(nextQues)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col px-6 pb-8 bg-finBlue justify-center items-center shadow-md"
    >
      {state.succeeded && showScore ? (
        <Container width="tight">
          <h2 className="text-4xl my-6 underline font-semibold text-center text-white">
            Here is the Result
          </h2>
          {score == "Smiling Money" ? (
            <>
              <StaticImage
                src="../thank-you.png"
                alt="smiling-money"
                width={1286}
                height={768}
              />
              <h2 className="text-3xl mt-4 font-semibold text-center text-white">
                You have smiling money in your life.
              </h2>
              <p className="text-base mt-4 text-center text-white">
                You share a great relationship with money and your emotions
                around money are positive. Your positive mindset will help you
                to achieve abundant flow of smiling money.
              </p>
            </>
          ) : (
            <>
              <StaticImage
                src="../crying-money.png"
                alt="crying-money"
                width={1080}
                height={620}
              />
              <h2 className="text-3xl mt-4 font-semibold text-center text-white">
                You have crying money in your life.
              </h2>
              <p className="text-base mt-4 text-center text-white">
                Your relationship with money is not very strong because you
                experience a lot of negative emotions around money like anger,
                jealousy, sadness and frustration. Due to this negative mindset,
                you are stopping the flow of smiling money into your life.
              </p>
            </>
          )}
        </Container>
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
            {questions[currentQuestion].answerOptions.map((answer, index) => (
              <>
                <div
                  key={index}
                  className="flex items-center w-full py-4 pl-5 m-2 ml-0 space-x-2 border-2 cursor-pointer border-white/10 rounded-xl bg-white/5"
                  onClick={(e) => handleAnswerOption(answer.answer, answer.id)}
                >
                  <input
                    id={questions[currentQuestion].question}
                    type="radio"
                    name={questions[currentQuestion].question}
                    value={answer.answer}
                    checked={
                      answer.answer ===
                      selectedOptions[currentQuestion]?.answerByUser
                    }
                    onChange={(e) =>
                      handleAnswerOption(answer.answer, answer.id)
                    }
                    className="w-6 h-6 bg-slate-400"
                  />
                  <p className="ml-6 text-white">{answer.answer}</p>
                </div>
                <ValidationError
                  prefix="Question"
                  field={questions[currentQuestion].question}
                  errors={state.errors}
                />
              </>
            ))}
          </div>
          <div className="flex justify-between w-full mt-4 text-black">
            <button
              onClick={handlePrevious}
              className="w-[49%] py-3 bg-slate-400 hover:bg-white hover:outline-double focus:outline-double rounded-lg"
            >
              Previous
            </button>
            {currentQuestion + 1 === questions.length ? (
              <button
                type="submit"
                disabled={state.submitting}
                className="w-[49%] py-3 bg-slate-400 hover:bg-white hover:outline-double focus:outline-double rounded-lg"
              >
                Submit
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="w-[49%] py-3 bg-slate-400 hover:bg-white hover:outline-double focus:outline-double rounded-lg"
              >
                Next
              </button>
            )}
          </div>
        </>
      )}
    </form>
  )
}
