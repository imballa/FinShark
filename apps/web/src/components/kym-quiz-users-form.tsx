import React from "react"
import { useForm, ValidationError } from "@formspree/react"
import KymQuizForm from "./kym-quiz-form"
import create from "zustand"

export default function KymQuizUsersForm() {
  const [state, handleSubmit] = useForm("xyyvwgol")
  const useStore = create(() => ({
    quizUserData: state,
  }))

  console.log("useStore", useStore())

  if (state.succeeded) {
    return <KymQuizForm />
  }

  return (
    <div className="max-w-screen-lg mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12">
        <form
          className="md:col-span-12 p-10 mx-auto shadow-md"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block">
                <span className="text-gray-700">Full name</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  "
                placeholder=""
              />
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block">
                <span className="text-gray-700">Email address</span>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  "
                  placeholder="john@example.com"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </label>
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block">
                <span className="text-gray-700">Mobile Number</span>
                <input
                  id="mobile"
                  name="mobile"
                  type="Number"
                  className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  "
                  placeholder="9328673689"
                />
                <ValidationError
                  prefix="mobile"
                  field="mobile"
                  errors={state.errors}
                />
              </label>
            </div>
          </div>
          <div className="flex my-3 justify-center">
            <ValidationError errors={state.errors} />
          </div>
          <div className="flex justify-center">
            <button
              className="w-full mt-3 shadow bg-black focus:bg-finGreen focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
              type="submit"
              disabled={state.submitting}
            >
              Get Started!
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
