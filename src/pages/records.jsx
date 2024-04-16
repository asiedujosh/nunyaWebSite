import React, { useContext, useState, useEffect } from "react"
import Marks from "../utils/marksNo"
import SignBtn from "../components/signBtn"
import { STATUSOPTION } from "../constants/reviewConstant"
import dateFormat from "../utils/dateFormat"
import { useNavigate } from "react-router-dom"
import { AuthApiData } from "../contextApi/auth/authContextApi"
import { RecordApiData } from "../contextApi/records/recordsContextApi"

const Records = () => {
  const { userProfile } = useContext(AuthApiData)
  const {
    processGetUserRecords,
    savedRecords,
    setReviewId,
    processDeleteRecord,
  } = useContext(RecordApiData)

  const navigate = useNavigate()

  const [reviewOption, setReviewOption] = useState({
    reviewOption: STATUSOPTION.selectOptions.options[0],
  })
  const [selectedValue, setSelectedValue] = useState("")

  useEffect(() => {
    processGetUserRecords({
      userId: userProfile.data
        ? userProfile.data.username
        : userProfile.username,
    })
  }, [])

  useEffect(() => {
    console.log(savedRecords)
  }, [savedRecords])

  const goToRecordReview = (item) => {
    setReviewId(item)
    navigate("/dashboard/recordsreview")
  }

  return (
    <div className="container mx-auto px-4 z-30 mt-4">
      <div className="max-w-full">
        <h2 className="text-2xl mb-4">Records</h2>
        {savedRecords &&
          savedRecords.records.map((item) => (
            <div className="bg-white bg-opacity-75 shadow-lg p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl">
                  {`${item.examsType.toUpperCase()}`}{" "}
                  {item.subject.toUpperCase()}
                </h2>
                <span>{item.year}</span>
                <span>{dateFormat(item.updated_at)}</span>
              </div>
              <div className="mb-6">
                <span className="text-2xl">Score</span>
                <span className="block">
                  {Marks(item.quizId, savedRecords.marks, "Ans")} Out of{" "}
                  {Marks(item.quizId, savedRecords.marks, "Questions")}
                </span>
              </div>
              <div className="flex space-x-4">
                <SignBtn
                  btnText={"View Details"}
                  action={() => {
                    goToRecordReview(item.quizId)
                  }}
                />
                <SignBtn btnText={"Delete"} />
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Records
