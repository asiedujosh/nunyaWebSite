import React, { useContext } from "react"

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
      <p className="text-gray-800 mb-4">{testimonial.testimony}</p>
      <p className="text-gray-600">{testimonial.name}</p>
    </div>
  )
}

export default TestimonialCard
