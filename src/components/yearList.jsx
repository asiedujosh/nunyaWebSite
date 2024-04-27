import React, { useState, useEffect, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { QuestionApiData } from "../contextApi/question/questionContextApi"

const YearListContainer = () => {
  const [start, setStart] = useState(false)
  const {
    yearList,
    subjectId,
    examId,
    setEntryStage,
    processGetQuestions,
    questions,
    loadingQuestions,
    setLoadingQuestions,
  } = useContext(QuestionApiData)

  useEffect(() => {
    setStart(false)
  }, [])

  const navigate = useNavigate()

  useEffect(() => {
    if (start) {
      if (questions?.length > 0) {
        navigate("/dashboard/gameboard")
      } else {
        navigate("/dashboard/questionNotAvailable")
      }
    }
  }, [questions])

  const handleYearSelect = (data) => {
    processGetQuestions({
      quizType: examId,
      subject: subjectId,
      year: data,
    })
    setStart((prev) => !prev)
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
