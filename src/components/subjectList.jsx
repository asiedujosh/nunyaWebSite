import React, { useState, useEffect, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { QuestionApiData } from "../contextApi/question/questionContextApi"

const SubjectListContainer = () => {
  const {
    subjectList,
    subjectId,
    examId,
    yearId,
    setSubjectId,
    setEntryStage,
    processGetQuestions,
    loadingQuestions,
    setLoadingQuestions,
    questions,
  } = useContext(QuestionApiData)

  const navigate = useNavigate()
  console.log(questions)

  useEffect(() => {
    if (questions) {
      navigate("/dashboard/gameboard")
    } else {
      console.log("Questions not available")
    }
  }, [questions])

  const handleSubjectSelect = (data) => {
    // setSubjectId(data)
    processGetQuestions({
      quizType: examId,
      year: yearId,
      subject: data,
    })
  }

  return (
    <div className="h-full overflow-hidden">
      <ul>
        {subjectList.map((item) => (
          <li
            onClick={() => {
              handleSubjectSelect(item.subject)
            }}
            className="py-4 px-4 bg-blue-500 hover:bg-blue-900 
            cursor-pointer border-b text-white font-medium text-xl"
          >
            {item.subject}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SubjectListContainer
