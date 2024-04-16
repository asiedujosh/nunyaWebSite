import React, { useContext, useState } from "react"
import { FaqConstants } from "../constants/faqConstant"
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion"

// Demo styles, see 'Styles' section below for some notes on use.
import "react-accessible-accordion/dist/fancy-example.css"

const Faqs = () => {
  const handleInputChange = (data, field) => {
    setFormData({
      ...formData,
      [field]: data,
    })
  }

  return (
    <div className="container mx-auto px-4 z-30 mt-4">
      <div className="max-w-full">
        <div className="bg-white bg-opacity-75 shadow-lg p-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl">Faqs</h2>
          </div>
          <div>
            {FaqConstants.qna.map((item) => (
              <Accordion>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>{item.question}</AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>{item.answer}</AccordionItemPanel>
                </AccordionItem>
              </Accordion>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Faqs
