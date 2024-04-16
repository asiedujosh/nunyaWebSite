import React, { useContext } from "react"
import { AuthApiData } from "../contextApi/auth/authContextApi"

const HeroCard = () => {
  const { setRegisterStage } = useContext(AuthApiData)

  let handleNext = () => {
    setRegisterStage((prev) => prev + 1)
  }

  return (
    <div className="container mx-auto px-4 z-30">
      <div className="max-w-md md:ml-40">
        <div className="bg-white bg-opacity-75 shadow-lg p-8">
          <h2 className="text-3xl mb-4">Ace exams with interactive quizzes.</h2>
          <p className="mb-4">
            Nunya is your ultimate study companion, offering a diverse range of
            quizzes to help you master various exam types. Nunya makes exam
            preparation efficient and enjoyable.
          </p>
          <div className="flex items-center justify-between">
            <button
              onClick={handleNext}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 focus:outline-none focus:shadow-outline w-full"
              type="button"
            >
              Try Now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroCard
