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
    <div className="md:h-full overflow-hidden">
      <ul className="grid grid-cols-3 gap-1 md:grid-cols-1">
        {examsList.map((item) => (
          <li
            onClick={() => {
              handleExamSelect(item.exam)
            }}
            className="p-2 md:py-4 md:px-4 bg-blue-500 hover:bg-blue-900 
            cursor-pointer border-b text-white md:font-medium md:text-xl truncate-text"
          >
            {item.exam}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ExamListContainer
