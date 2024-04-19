import React, { useContext } from "react"

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
      <p className="text-gray-800 mb-4">{testimonial.message}</p>
      <p className="text-gray-600">{testimonial.author}</p>
    </div>
  )
}

export default TestimonialCard
