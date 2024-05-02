import React, { useContext } from "react"
import { Testimonial } from "../constants/testimonialConstant"
import TestimonialCard from "./TestimonialCard"

const TestimonialSection = () => {
  return (
    <div className="container mx-auto py-12">
      <div className="container mx-auto py-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Testimonial.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default TestimonialSection
