import { useState, useRef, useEffect, useContext } from "react"

const RenderImageOptions = ({
  data,
  highlight,
  currentQuestion,
  ansHighLight,
}) => {
  return (
    <div>
      {data.split("**").map((item, index) => (
        <div
          key={index}
          onClick={() => {
            highlight(item)
          }}
          className={`block py-4 px-4 hover:bg-blue-300 cursor-pointer border-b items-center
        ${
          item == ansHighLight[currentQuestion] ? "bg-blue-500" : "bg-gray-300"
        }`}
        >
          <div className="w-1/2 h-40 overflow-hidden">
            <img
              src={item} // Replace with the actual path to your image
              alt="Image Description"
              className="w-1/2"
              style={{ objectFit: "cover" }} // This style ensures that the image covers the entire container
            />
          </div>
        </div>
      ))}
    </div>
  )
}

export default RenderImageOptions
