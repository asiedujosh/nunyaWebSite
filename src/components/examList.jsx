import React, { useState, useEffect, useContext } from "react"
import { QuestionApiData } from "../contextApi/question/questionContextApi"

const ExamListContainer = () => {
  const { examsList, examId, setExamId, setEntryStage } =
    useContext(QuestionApiData)

  const handleExamSelect = (data) => {
    setExamId(data)
    setEntryStage(2)
  }

  return (
    <div className="h-full overflow-hidden">
      <ul>
        {examsList.map((item) => (
          <li
            onClick={() => {
              handleExamSelect(item.exam)
            }}
            className="py-4 px-4 bg-blue-500 hover:bg-blue-900 
            cursor-pointer border-b text-white font-medium text-xl"
          >
            {item.exam}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ExamListContainer
