import React from "react"

const Separator = ({ text }) => {
  return (
    <div className="flex items-center mb-2">
      <div className="border-t border-gray-300 flex-grow mr-4"></div>
      <span className="text-gray-500 text-sm">{text}</span>
      <div className="border-t border-gray-300 flex-grow ml-4"></div>
    </div>
  )
}

export default Separator
