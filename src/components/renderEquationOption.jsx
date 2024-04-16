import { useState, useRef, useEffect, useContext } from "react"
import { MathJax } from "better-react-mathjax"
// import AsciiOutput from "../screens/asciiHtml.js"

const RenderEquationOptions = ({
  data,
  highlight,
  currentQuestion,
  ansHighLight,
}) => {
  return (
    // Enclose the JSX elements inside the return statement
    data.split("**").map((item, index) => (
      <div
        key={index}
        onClick={() => {
          highlight(item)
        }}
        className={`block py-4 px-4 hover:bg-blue-300 cursor-pointer border-b items-center
      ${item == ansHighLight[currentQuestion] ? "bg-blue-500" : "bg-gray-300"}`}
      >
        <span className="text-gray-800">
          <MathJax>{item}</MathJax>
        </span>
      </div>
    ))
  )
}

export default RenderEquationOptions
