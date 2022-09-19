import React from "react"
import { useForm, ValidationError } from "@formspree/react"

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mqkjpnzy")

  if (state.succeeded) {
    return (
      <p className="text-3xl text-center sm:text-4xl leading-normal font-extrabold tracking-tight">
        Thanks for your submission!
      </p>
    )
  }

  return (
    <div className="max-w-screen-lg mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 shadow-md">
        <div className="bg-finBlue text-white md:col-span-4 p-10">
          <h1 className="mt-4 text-sm leading-7 font-regular uppercase">
            Contact
          </h1>
          <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight">
            Get In <span className="text-finGreen">Touch</span>
          </h3>
          <p className="mt-4 leading-7 text-gray-200">
            Want to get in touch? We'd love to hear from you. Here's how you can
            reach us...
          </p>

          <div className="flex items-center mt-5">
            <svg
              className="self-start mr-1"
              fill="currentColor"
              width={60}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
            >
              <g data-name="Layer 2">
                <path d="M16,30a1,1,0,0,0,.62-.22C17,29.44,27,21.38,27,13A11,11,0,0,0,5,13c0,8.38,10,16.44,10.38,16.78A1,1,0,0,0,16,30ZM7,13a9,9,0,0,1,18,0c0,6.3-6.87,12.81-9,14.69C13.87,25.81,7,19.3,7,13Z" />
                <path d="M21,13a5,5,0,1,0-5,5A5,5,0,0,0,21,13Zm-8,0a3,3,0,1,1,3,3A3,3,0,0,1,13,13Z" />
              </g>
            </svg>
            <span className="text-sm">
              Head Office-309, Rajhans Complex, Besides Nirmal Hospital, Ring
              Road, Surat - 395002
            </span>
          </div>
          <div className="flex items-center mt-5">
            <svg
              className="self-start mr-1"
              fill="currentColor"
              width={20}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
            >
              <path d="M23.45 20.93a3 3 0 0 0-4.25 0l-1.45 1.45a26.14 26.14 0 0 1-4.51-3.62 26.62 26.62 0 0 1-3.62-4.51l1.45-1.45a3 3 0 0 0 0-4.25L8.24 5.73a2.93 2.93 0 0 0-2.11-.88h0A3 3 0 0 0 4 5.73L2.64 7.08A6.37 6.37 0 0 0 1 12.33c.32 3.75 2.78 8.26 6.57 12.06S15.92 30.64 19.67 31a7.87 7.87 0 0 0 .84 0 6.07 6.07 0 0 0 4.41-1.64L26.27 28a3 3 0 0 0 .88-2.13 2.93 2.93 0 0 0-.88-2.11zm1.41 5.66L23.5 27.94a4.57 4.57 0 0 1-3.66 1c-3.25-.28-7.39-2.58-10.81-6S3.31 15.41 3 12.16a4.53 4.53 0 0 1 1-3.66L5.41 7.14a1 1 0 0 1 .71-.29h0a1 1 0 0 1 .71.29L9.66 10a1 1 0 0 1 0 1.41l-2 2a1 1 0 0 0-.16 1.21 27.49 27.49 0 0 0 4.33 5.58 27.49 27.49 0 0 0 5.58 4.33 1 1 0 0 0 1.21-.16l2-2a1 1 0 0 1 1.41 0l2.83 2.83h0a1 1 0 0 1 .29.71A1 1 0 0 1 24.86 26.59zM26.6 5.39A14.92 14.92 0 0 0 16 1a1 1 0 1 0 0 2A13 13 0 0 1 29 16.11a1 1 0 0 0 1 1h0a1 1 0 0 0 1-1A14.91 14.91 0 0 0 26.6 5.39z" />
              <path d="M20.91,11.11a6,6,0,0,1,1.77,4.31,1,1,0,0,0,1,1h0a1,1,0,0,0,1-1,8,8,0,0,0-8-8.1,1,1,0,1,0,0,2A6,6,0,0,1,20.91,11.11Z" />
            </svg>
            <span className="text-sm">+919328673689</span>
          </div>
          <div className="flex items-center mt-5">
            <svg
              className="self-start mr-1"
              fill="currentColor"
              width={20}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
            >
              <path
                fill="currentColor"
                d="M27,26H5a3,3,0,0,1-3-3V9A3,3,0,0,1,5,6H27a3,3,0,0,1,3,3V23A3,3,0,0,1,27,26ZM5,8A1,1,0,0,0,4,9V23a1,1,0,0,0,1,1H27a1,1,0,0,0,1-1V9a1,1,0,0,0-1-1Z"
              />
              <path
                fill="currentColor"
                d="M16,17a1,1,0,0,1-.55-.17l-12-8A1,1,0,0,1,4.55,7.17l12,8A1,1,0,0,1,16,17Z"
              />
              <path
                fill="currentColor"
                d="M16,17a1,1,0,0,1-.56-1.83l12-8a1,1,0,0,1,1.11,1.66l-12,8A1,1,0,0,1,16,17Z"
              />
            </svg>
            <span className="text-sm">office@finshark.in</span>
          </div>
        </div>
        <form className="md:col-span-8 p-10 mx-auto" onSubmit={handleSubmit}>
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
                <span className="text-gray-700">Message</span>
                <textarea
                  id="message"
                  name="message"
                  className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  "
                  rows="3"
                ></textarea>
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </label>
            </div>
          </div>

          <button
            className="mt-3 shadow bg-black focus:bg-finGreen focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
            type="submit"
            disabled={state.submitting}
          >
            Submit
          </button>
          <ValidationError errors={state.errors} />
        </form>
      </div>
    </div>
  )
}
