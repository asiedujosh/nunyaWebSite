import React, { useState, useEffect, useContext } from "react"

import { QuestionApiData } from "../contextApi/question/questionContextApi"

const SubjectListContainer = () => {
  const { subjectList, setEntryStage, setSubjectId } =
    useContext(QuestionApiData)

  const handleSubjectSelect = (data) => {
    setSubjectId(data)
    setEntryStage(3)
    // setSubjectId(data)
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
