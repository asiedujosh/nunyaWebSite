import React, { useState, useEffect, useContext } from "react"
import { AuthApiData } from "../contextApi/auth/authContextApi"
import { QuestionApiData } from "../contextApi/question/questionContextApi"
import { StoreApiData } from "../contextApi/store/storeContextApi"
import ExamListContainer from "../components/examList"
import YearListContainer from "../components/yearList"
import SubjectListContainer from "../components/subjectList"
import { Outlet, Link } from "react-router-dom"

const Dashboard = () => {
  const { processLogout, userProfile, alreadyLoggedIn } =
    useContext(AuthApiData)
  const { processGetPurchase } = useContext(StoreApiData)
  const {
    processGetAllExams,
    processGetAllYear,
    processGetAllSubject,
    entryStage,
  } = useContext(QuestionApiData)

  useEffect(() => {
    processGetAllExams()
    processGetAllYear()
    processGetAllSubject()
    processGetPurchase(userProfile && userProfile.id)
  }, [])

  let handleQuizStart = () => {}

  return (
    <div
      className="w-full flex flex-col lg:flex-row lg:justify-between"
      style={{ minHeight: "90vh" }}
    >
      <div className="hidden md:block bg-gray-100 lg:w-1/6">
        <ul>
          <Link
            to="/dashboard"
            className="block py-4 px-4 hover:bg-gray-200 cursor-pointer border-b border-gray-300"
          >
            Dashboard
          </Link>
          <Link
            to="/dashboard/quizInfo"
            className="block py-4 px-4 hover:bg-gray-200 cursor-pointer border-b border-gray-300"
          >
            Quiz
          </Link>
          <Link
            to="/dashboard/records"
            className="block py-4 px-4 hover:bg-gray-200 cursor-pointer border-b border-gray-300"
          >
            Records
          </Link>
          <Link
            to="/dashboard/analysis"
            className="block py-4 px-4 hover:bg-gray-200 cursor-pointer border-b border-gray-300"
          >
            Analysis
          </Link>
          <Link
            to="/dashboard/store"
            className="block py-4 px-4 hover:bg-gray-200 cursor-pointer border-b border-gray-300"
          >
            Store
          </Link>
          <Link
            to="/dashboard/settings"
            className="block py-4 px-4 hover:bg-gray-200 cursor-pointer border-b border-gray-300"
          >
            Settings
          </Link>
          <Link
            to="/dashboard/faqs"
            className="block py-4 px-4 hover:bg-gray-200 cursor-pointer border-b border-gray-300"
          >
            Faqs
          </Link>
        </ul>
      </div>

      <div className="bg-gray-200 lg:w-4/6" style={{ minHeight: "90vh" }}>
        <Outlet />
      </div>
      <div className="hidden md:block bg-gray-100 lg:w-1/6">
        {entryStage == "1" && <ExamListContainer />}
        {entryStage == "2" && <YearListContainer />}
        {entryStage == "3" && <SubjectListContainer />}
      </div>
    </div>
  )
}

export default Dashboard
