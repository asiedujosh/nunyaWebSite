import React, { useContext, useState, useEffect } from "react"
import { QUIZOPTIONS } from "../constants/quizConstant"
import { useNavigate } from "react-router-dom"
import InputField from "../components/inputField"
import SignBtn from "../components/signBtn"
import { StoreApiData } from "../contextApi/store/storeContextApi"
import { QuestionApiData } from "../contextApi/question/questionContextApi"
import SelectField from "../components/selectField"

const QuizInfo = () => {
  const {
    examOptions,
    examsList,
    yearList,
    subjectList,
    yearOptions,
    subjectOptions,
    processGetQuestions,
    questions,
    loadingQuestions,
    setLoadingQuestions,
  } = useContext(QuestionApiData)
  const { purchases, freeProducts } = useContext(StoreApiData)

  const navigate = useNavigate()

  const [quizOptions, setQuizOptions] = useState({
    quizType: examOptions && examOptions[0],
    subject: subjectOptions && subjectOptions[0],
    year: yearOptions && yearOptions[0],
    questionNos: "100",
    questionStyle: "Straight",
  })
  const [selectedValue, setSelectedValue] = useState("")

  useEffect(() => {
    if (questions) {
      navigate("/dashboard/gameboard")
    } else {
      console.log("Questions not available")
    }
  }, [questions])

  const handleInputChange = (data, field) => {
    setQuizOptions({ ...quizOptions, [field]: data })
  }

  const handleOptionAssign = (item) => {
    let Option
    switch (item.name) {
      case "quizType":
        Option = examOptions
        break
      case "subject":
        Option = subjectOptions
        break
      case "year":
        Option = yearOptions
        break
      case "topic":
        Option = topicOptions
        break
      default:
        Option = ["Straight", "Random"]
    }
    return Option
  }

  const handleSubmitQuizOptions = () => {
    setLoadingQuestions(true)
    // console.log(quizOptions)
    processGetQuestions(quizOptions)
  }

  return (
    <div className="container mx-auto px-4 z-30 mt-4">
      <div className="max-w-full">
        <div className="bg-white bg-opacity-75 shadow-lg p-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl">Quiz Info</h2>
          </div>
          {QUIZOPTIONS.field.map((item) => {
            return (
              (item.type === "select" && (
                <SelectField
                  key={item.id}
                  field={item}
                  value={quizOptions}
                  options={handleOptionAssign(item)}
                  change={(data, field) => {
                    handleInputChange(data, field)
                  }}
                />
              )) || (
                <InputField
                  key={item.id}
                  field={item}
                  value={quizOptions}
                  defaultVal={item.defaultValue}
                  readOnly={item.readOnly}
                  change={(data, field) => {
                    handleInputChange(data, field)
                  }}
                />
              )
            )
          })}
          <div>
            <SignBtn
              btnText={"Submit"}
              action={handleSubmitQuizOptions}
              fullWidth={"w-full"}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuizInfo
