import React, { useState, useEffect, useContext } from "react"
import { QuestionApiData } from "../contextApi/question/questionContextApi"

const YearListContainer = () => {
  const { yearList, yearId, setYearId, setEntryStage } =
    useContext(QuestionApiData)

  const handleYearSelect = (data) => {
    setYearId(data)
    setEntryStage(3)
  }

  return (
    <div className="h-full overflow-hidden">
      <ul>
        {yearList.map((item) => (
          <li
            onClick={() => {
              handleYearSelect(item.year)
            }}
            className="py-4 px-4 bg-blue-500 hover:bg-blue-900 
            cursor-pointer border-b text-white font-medium text-xl"
          >
            {item.year}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default YearListContainer
