import React, { useContext, useState, useEffect } from "react"
import { QUIZOPTIONS } from "../constants/quizConstant"
import { useNavigate } from "react-router-dom"
import InputField from "../components/inputField"
import SignBtn from "../components/signBtn"
import { AuthApiData } from "../contextApi/auth/authContextApi"
import { StoreApiData } from "../contextApi/store/storeContextApi"
import { SubscriptionApiData } from "../contextApi/subscription/subscriptionContextApi"
import { QuestionApiData } from "../contextApi/question/questionContextApi"
import { PriviledgeApiData } from "../contextApi/priviledge/priviledgeContextApi"
import { ExamSubjectApiData } from "../contextApi/examSubjectRelation/examSubjectRelationContextApi"
import SelectField from "../components/selectField"

const QuizInfo = () => {
  const { userProfile } = useContext(AuthApiData)
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
  const { getExamSubjectName } = useContext(ExamSubjectApiData)
  const { mySubscriptionList } = useContext(SubscriptionApiData)
  const { processCheckIfUserHasPriviledge } = useContext(PriviledgeApiData)

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
      if (questions.length > 0) {
        navigate("/dashboard/gameboard")
      } else {
        navigate("/dashboard/questionNotAvailable")
      }
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

  let handleNotPurchased = () => {
    setLoadingQuestions(false)
    navigate("/dashboard/notPurchased")
  }

  let handleNotAvailable = () => {
    setLoadingQuestions(false)
    navigate("/dashboard/questionNotAvailable")
  }

  let checkIfPurchasedOrFree = (data) => {
    if (data[0].offerType !== "Paid") {
      return true
    } else {
      let filteredData = mySubscriptionList.find(
        (item) => item.examSubjectId == data[0].name
      )
      if (filteredData) {
        if (filteredData.examSubjectId) {
          return true
        } else {
          setLoadingQuestions(false)
          return false
        }
      } else {
        setLoadingQuestions(false)
        return false
      }
    }
  }

  const handleSubmitQuizOptions = async () => {
    setLoadingQuestions(true)
    // console.log(quizOptions);

    if (
      quizOptions.quizType == examOptions[0] ||
      quizOptions.subject == subjectOptions[0] ||
      quizOptions.year == yearOptions[0]
    ) {
      setLoadingQuestions(false)
      setFieldError((prev) => !prev)
      console.log("Select required Info")
    } else {
      //Check Priviledge
      let isPriviledge = await processCheckIfUserHasPriviledge(
        userProfile.username
      )

      quizOptions.username = userProfile.username

      if (isPriviledge == true) {
        processGetQuestions(quizOptions)
      } else {
        //Get convertion
        let examId = examsList.filter(
          (item) => item.exam == quizOptions.quizType
        )[0].id

        let subjectId = subjectList.filter(
          (item) => item.subject == quizOptions.subject
        )[0].id

        let entryData = {
          examId: examId,
          subjectId: subjectId,
        }

        // Check and get the package Id
        let packageId = getExamSubjectName(entryData)

        // Check if package name exist
        if (packageId.length > 0) {
          let response = checkIfPurchasedOrFree(packageId)
          if (response == true) {
            processGetQuestions(quizOptions)
          } else {
            handleNotPurchased()
          }
        } else {
          handleNotAvailable()
        }
      }
    }
    // processGetQuestions(quizOptions)
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
