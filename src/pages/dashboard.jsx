import React, { useState, useEffect, useContext } from "react"
import { AuthApiData } from "../contextApi/auth/authContextApi"
import { QuestionApiData } from "../contextApi/question/questionContextApi"
import { useNavigate } from "react-router-dom"
import { StoreApiData } from "../contextApi/store/storeContextApi"
import ExamListContainer from "../components/examList"
import YearListContainer from "../components/yearList"
import SubjectListContainer from "../components/subjectList"
import { Outlet, Link } from "react-router-dom"
import LeftSidebar from "../components/leftSidebar"
import MobileLeftSidebar from "../components/mobileLeftSidebar"

const Dashboard = () => {
  const { processLogout, userProfile, alreadyLoggedIn } =
    useContext(AuthApiData)
  const { processGetPurchase } = useContext(StoreApiData)
  const {
    setQuestions,
    questions,
    processGetAllExams,
    processGetAllYear,
    processGetAllSubject,
    setEntryStage,
    entryStage,
  } = useContext(QuestionApiData)

  const navigate = useNavigate()

  useEffect(() => {
    processGetAllExams()
    processGetAllYear()
    processGetAllSubject()
    processGetPurchase(userProfile && userProfile.id)
  }, [])

  let handleReset = () => {
    setEntryStage(1)
    setQuestions()
    navigate("/dashboard")
  }

  return (
    <div
      className="w-full flex flex-col lg:flex-row lg:justify-between"
      style={{ minHeight: "90vh" }}
    >
      <LeftSidebar />

      <div className="bg-gray-200 lg:w-4/6">
        <MobileLeftSidebar />
        {(entryStage > 1 || questions?.length > 0) && (
          <span
            className="block py-4 px-6 w-full hover:bg-blue-500 cursor-pointer bg-blue-300"
            onClick={handleReset}
          >
            Reset
          </span>
        )}

        <Outlet />
        <div className="md:hidden bg-gray-200 py-4">
          {entryStage == "1" && <ExamListContainer />}
          {entryStage == "2" && <SubjectListContainer />}
          {entryStage == "3" && <YearListContainer />}
        </div>
      </div>
      <div className="hidden md:block bg-gray-100 lg:w-1/6">
        {entryStage == "1" && <ExamListContainer />}
        {entryStage == "2" && <SubjectListContainer />}
        {entryStage == "3" && <YearListContainer />}
      </div>
    </div>
  )
}

export default Dashboard
