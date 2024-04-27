import React, { useContext, useState } from "react"

const QuestionsNotAvailable = () => {
  return (
    <div className="container mx-auto px-4 z-30 mt-4">
      <div className="max-w-full">
        <div>{/** Carousel here */}</div>
        <div className="bg-white bg-opacity-75 shadow-lg p-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl">Sorry Questions Not Available</h2>
          </div>
          <div>
            <p className="text-gray-500">
              If certain there are questions contact admin !...
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuestionsNotAvailable
