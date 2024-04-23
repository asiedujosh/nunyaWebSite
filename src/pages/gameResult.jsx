import React, { useEffect, useState, useContext } from "react"
import positionMap from "../utils/positionMap"
import { AuthApiData } from "../contextApi/auth/authContextApi"
import { QuestionApiData } from "../contextApi/question/questionContextApi"
import { RecordApiData } from "../contextApi/records/recordsContextApi"
import { useNavigate } from "react-router-dom"
import SignBtn from "../components/signBtn"

const GameResult = ({ navigation }) => {
  const { quizAttempt, correctAns, questions, review, setReview, topicList } =
    useContext(QuestionApiData)
  const { userProfile } = useContext(AuthApiData)
  const { processSaveRecords, saveInfoAlert, setSaveInfoAlert } =
    useContext(RecordApiData)
  const [gradeData, setGradeData] = useState({
    grade: null,
    comment: "Worker harder",
    image: null,
  })

  const [topicEvaluation, setTopicEvaluation] = useState([])
  const [allCorrectTopicInQuestion, setAllCorrectTopicInQuestion] = useState([])
  const [positionReady, setPositionReady] = useState([])

  useEffect(() => {
    ;(quizAttempt.userInfo = userProfile.username), console.log(quizAttempt)
    setReview(quizAttempt.solvedQuestions)
    handleGrade(questions.length, correctAns)
    setTopicEvaluation(quizAttempt.solvedQuestions)
    let data = quizAttempt.solvedQuestions.filter(
      (item) => item.userChoice.toLowerCase() == item.answer.toLowerCase()
    )
    setAllCorrectTopicInQuestion(data)
  }, [])

  const navigate = useNavigate()

  useEffect(() => {
    let newData = positionMap(
      allCorrectTopicInQuestion,
      topicEvaluation,
      topicList
    )
    setPositionReady(newData)
  }, [topicEvaluation])

  saveInfoAlert &&
    Alert.alert("Success", "Your data was saved successfully", [
      {
        text: "Ok",
        onPress: () => {
          setSaveInfoAlert(false)
        },
      },
    ])

  const handleGoToReview = () => {
    navigate("/dashboard/review")
    navigation.navigate("Review")
    //navigation.navigate('GameBoard');
  }

  const handleSaveInfo = () => {
    let data2 = {
      correctAns: correctAns,
      totalQuestions: questions.length,
      status: "complete",
    }
    processSaveRecords(quizAttempt, data2)
  }

  const handleShareInfo = () => {
    console.log("Share info")
  }

  let handleGrade = (noOfQuestions, marks) => {
    if (marks === noOfQuestions)
      setGradeData({
        grade: marks,
        comment: "Excellent",
      })
    if (marks < noOfQuestions && marks > noOfQuestions * 0.5)
      setGradeData({
        grade: marks,
        comment: "V.Good",
      })
    if (marks < noOfQuestions * 0.5 && marks > noOfQuestions * 0.25)
      setGradeData({
        grade: marks,
        comment: "Credit",
      })
    if (marks < noOfQuestions * 0.25)
      setGradeData({
        grade: marks,
        comment: "Fail",
      })
  }

  return (
    <div className="container mx-auto px-4 z-30 mt-4">
      <div className="max-w-full">
        <div className="bg-white bg-opacity-75 shadow-lg p-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl">Game Results</h2>
            <a
              onClick={() => handleNext(1)}
              className="inline-block font-bold text-sm text-blue-500 hover:text-blue-800"
              href="#"
            >
              Back
            </a>
          </div>
          <div className="flex space-x-4">
            <span className="text-xl font-normal">Score</span>
            <span className="text-xl font-normal">{correctAns}</span>
            <span className="text-xl font-normal">Out of</span>
            <span className="text-xl font-normal">{questions.length}</span>
          </div>
          <div>
            <span>{gradeData.comment}</span>
          </div>
          <div>
            <h6>Statistics</h6>
          </div>
          <div>
            {topicList.length !== 0 &&
              positionReady.map((item) => (
                <div>
                  <span>{item.topic}</span>
                  <span>
                    {item.recurring} out of {item.totalTopic}
                  </span>
                  <span>
                    {Math.ceil((item.recurring / item.totalTopic) * 100)}%
                  </span>
                </div>
              ))}
          </div>
          <div className="flex space-x-4">
            <span>
              <SignBtn btnText="Review" action={handleGoToReview} />
            </span>
            <span>
              <SignBtn btnText="Save" action={handleSaveInfo} />
            </span>
            <span>
              <SignBtn btnText="Share" action={handleShareInfo} />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GameResult
