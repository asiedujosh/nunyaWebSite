import React, { useContext } from "react"

const AboutCard = ({ imageData, title, content }) => {
  return (
    <div className="bg-white shadow-lg">
      <img
        src={imageData ? imageData : ""}
        alt="Placeholder"
        className="w-full h-64 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-4">{title}</h3>
        <p className="text-gray-700">{content}</p>
        {/* <button
          className="mt-4 bg-blue-500 hover:bg-blue-600 text-white 
        font-bold py-2 px-4 w-full"
        >
          View More
        </button> */}
      </div>
    </div>
  )
}

export default AboutCard
