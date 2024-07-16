import React, { useState } from "react"

const AccordionItem = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="accordion-item border-b border-gray-300">
      <div className="accordion-item-heading">
        <div
          className="accordion-item-button flex justify-between items-center p-4 cursor-pointer bg-gray-100 hover:bg-gray-200"
          onClick={toggle}
        >
          <div className="font-medium text-lg">{children[0]}</div>
          <div className="text-xl">{isOpen ? "-" : "+"}</div>
        </div>
      </div>
      {isOpen && (
        <div className="accordion-item-panel p-4 bg-white border-t border-gray-300">
          {children[1]}
        </div>
      )}
    </div>
  )
}

export default AccordionItem
