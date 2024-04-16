import React, { useContext } from "react"

const AboutCard = ({ imageData }) => {
  return (
    <div className="bg-white shadow-lg">
      <img
        src={imageData ? imageData : ""}
        alt="Placeholder"
        className="w-full h-64 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-4">Card 1 Title</h3>
        <p className="text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          lobortis odio vitae nisi suscipit, id eleifend libero fermentum.
        </p>
        <button
          className="mt-4 bg-blue-500 hover:bg-blue-600 text-white 
        font-bold py-2 px-4 w-full"
        >
          View More
        </button>
      </div>
    </div>
  )
}

export default AboutCard
