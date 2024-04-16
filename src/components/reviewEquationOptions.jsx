import { useState, useRef, useEffect, useContext } from "react"
import { MathJax } from "better-react-mathjax"
// import AsciiOutput from '../screens/asciiHtml.js';

const ReviewEquationOptions = ({ data, dataInfo, checkColor }) => {
  return (
    // Enclose the JSX elements inside the return statement
    <div className="mt-4">
      {data.split("**").map((item, index) => (
        <span
          className="px-4 py-2 mb-2 mx-2 block bg-slate-300 text-white text-xl"
          style={{
            backgroundColor: checkColor(data, dataInfo[0], dataInfo[1], item),
          }}
        >
          {item}
        </span>
      ))}
    </div>
  )
}

export default ReviewEquationOptions
