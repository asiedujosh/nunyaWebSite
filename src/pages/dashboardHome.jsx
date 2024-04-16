import React, { useContext, useState } from "react"
import { QUIZOPTIONS } from "../constants/quizConstant"
import InputField from "../components/inputField"
import SelectField from "../components/selectField"
import { AuthApiData } from "../contextApi/auth/authContextApi"

const DashboardHome = () => {
  const { setRegisterStage } = useContext(AuthApiData)
  const [formData, setFormData] = useState({})

  return (
    <div className="container mx-auto px-4 z-30 mt-4">
      <div className="max-w-full">
        <div>{/** Carousel here */}</div>
        <div className="bg-white bg-opacity-75 shadow-lg p-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl">
              Welcome to Nunya - Your Ultimate Exam Companion
            </h2>
          </div>
          <div>
            <p className="text-gray-500">
              Embark on a journey of academic excellence with Nunya, your
              trusted partner in conquering exams effortlessly. Whether you're a
              student striving for top grades or a professional aiming to ace
              certification tests, Nunya is here to empower you every step of
              the way.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardHome
