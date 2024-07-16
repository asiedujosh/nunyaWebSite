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
    <div className="md:h-full overflow-hidden">
      <ul className="grid grid-cols-3 gap-1 md:grid-cols-1">
        {yearList.map((item) => (
          <li
            onClick={() => {
              handleYearSelect(item.year)
            }}
            className="p-2 md:py-4 md:px-4 bg-blue-500 hover:bg-blue-900 
            cursor-pointer border-b text-white md:font-medium md:text-xl "
          >
            {item.year}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default YearListContainer
