import { useState, useContext, useEffect } from "react"
import { truncateText } from "../utils/truncateText"
import { useNavigate } from "react-router-dom"
import { ExamSubjectApiData } from "../contextApi/examSubjectRelation/examSubjectRelationContextApi"

const AccordionList = ({ data }) => {
  const { examSubjectList } = useContext(ExamSubjectApiData)

  const navigate = useNavigate()

  let displayExamSubjectLinkId = (arrayArg, id) => {
    let examSubjectName = arrayArg.filter((item) => item.subjectId == id)[0]
      .name
    return examSubjectName
  }

  let handleGoToSubscribeAndPay = (data) => {
    navigate(`/detail/${id}`)
  }

  return (
    <ul>
      {data.length > 0 ? (
        data.map((item, index) => (
          <div>
            <li
              key={index}
              onClick={() => {
                handleGoToSubscribeAndPay(examSubjectList, item.subjectId)
              }}
            >
              {displayExamSubjectLinkId(examSubjectList, item.subjectId)}
            </li>
          </div>
        ))
      ) : (
        <></>
      )}
    </ul>
  )
}

export default AccordionList
