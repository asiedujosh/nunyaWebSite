import React, { useContext, useState, useRef, useEffect } from "react"
import { QuestionApiData } from "../contextApi/question/questionContextApi"
import RenderOptionsContainer from "../components/renderOptionContainer"
import { useNavigate } from "react-router-dom"
import SignBtn from "../components/signBtn"
import equationTrim from "../utils/equationTrim"
import { MathJax } from "better-react-mathjax"

const Gameboard = () => {
  const {
    questions,
    questionInfo,
    correctAns,
    processQuizAttempt,
    quizAttempt,
  } = useContext(QuestionApiData)
  const [choseAnsHighlight, setChoseAnsHighlight] = useState([])
  const [noOfQuestions, setNoOfQuestions] = useState(10)
  const [timer, setTimer] = useState(null)
  const [showTimer, setShowTimer] = useState(timer)
  const [currentQuestionNo, setCurrentQuestionNo] = useState(0)
  const possibleAns = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "none",
  ]
  const intervalIdRef = useRef(null)

  const navigate = useNavigate()

  useEffect(() => {
    if (typeof window?.MathJax !== "undefined") {
      window.MathJax.typeset()
    }
  }, [currentQuestionNo])

  useEffect(() => {
    console.log(timer)
    if (timer) {
      console.log("We stepped in timer")
      if (currentQuestionNo + 1 >= questions.length) {
        return () => clearInterval(intervalIdRef.current)
      } else {
        console.log("we stepped out")
        intervalIdRef.current = setInterval(updateAndCheck, 1000)

        // Clean up the interval on component unmount
        return () => clearInterval(intervalIdRef.current)
      }
    }
  }, [timer])

  const NOANSWER = "errNoAns"

  const updateAndCheck = () => {
    setTimer((prevTimer) => {
      updateTimer()
      if (prevTimer <= 0) {
        console.log("Time is up!")
        handleChoosenAns(12)
        setTimer(questionInfo.timer)
        // You can perform actions or show alerts here
        clearInterval(intervalIdRef.current)
      } else {
        setShowTimer(prevTimer - 1)
        return prevTimer - 1
      }
    })
  }

  const updateTimer = () => {
    console.log(showTimer)
  }

  const storeSolvedQuestions = (questionId, ans, userAns) => {
    processQuizAttempt(questionId, ans, userAns)
  }

  let highLightItem = (item) => {
    if (!choseAnsHighlight[currentQuestionNo]) {
      setChoseAnsHighlight([...choseAnsHighlight, item])
    } else {
      const newHighlight = [...choseAnsHighlight]
      newHighlight.splice(currentQuestionNo, 1)
      newHighlight.splice(currentQuestionNo, 0, item)
      setChoseAnsHighlight(newHighlight)
    }
  }

  const handleChoosenAns = (item) => {
    highLightItem(item)
  }

  let processAns = () => {
    choseAnsHighlight.map((item) => {
      if (item !== NOANSWER) {
        let options
        if (
          questions[choseAnsHighlight.indexOf(item)].options !== "" &&
          questions[choseAnsHighlight.indexOf(item)].options !== null
        ) {
          options =
            questions[choseAnsHighlight.indexOf(item)].options.split("**")
        }

        if (
          questions[choseAnsHighlight.indexOf(item)].imageOptions !== "" &&
          questions[choseAnsHighlight.indexOf(item)].imageOptions !== null
        ) {
          options =
            questions[choseAnsHighlight.indexOf(item)].imageOptions.split("**")
        }

        if (
          questions[choseAnsHighlight.indexOf(item)].optionsWithEquation !==
            "" &&
          questions[choseAnsHighlight.indexOf(item)].optionsWithEquation !==
            null
        ) {
          options =
            questions[
              choseAnsHighlight.indexOf(item)
            ].optionsWithEquation.split("**")
        }

        let position = options.indexOf(item)
        let userAns = possibleAns[position]
        storeSolvedQuestions(
          questions[choseAnsHighlight.indexOf(item)].id,
          questions[choseAnsHighlight.indexOf(item)].answer,
          userAns
        )
      } else {
        storeSolvedQuestions(
          questions[choseAnsHighlight.indexOf(item)].id,
          questions[choseAnsHighlight.indexOf(item)].answer,
          (userAns = 12)
        )
      }
    })
  }

  const handleNext = () => {
    if (currentQuestionNo + 1 == questions.length) {
      processAns()
      navigate("/dashboard/gameResult")
    } else {
      if (!choseAnsHighlight[currentQuestionNo]) {
        setChoseAnsHighlight([...choseAnsHighlight, NOANSWER])
      }
      setCurrentQuestionNo((prev) => prev + 1)
    }
  }

  const handlePrev = () => {
    if (currentQuestionNo > 0) {
      setCurrentQuestionNo((prev) => prev - 1)
    }
  }

  return (
    <div className="h-full overflow-scroll">
      <div className="container mx-auto px-4 z-30 mt-4">
        <div className="max-w-full">
          <div className="bg-white bg-opacity-75 shadow-lg p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl">Quiz</h2>
              <a
                onClick={() => handleNext(1)}
                className="inline-block font-bold text-sm text-blue-500 hover:text-blue-800"
                href="#"
              >
                Back
              </a>
            </div>

            <div className="flex justify-center items-center">
              <div className="">
                <span className="text-lg text-gray-600">{`${
                  questionInfo.subject
                } ${"\n"}${questionInfo.examsType.toUpperCase()} ${"\n"}${
                  questionInfo.year
                } " "`}</span>

                <span className="text-lg text-gray-500">
                  {`Question ${
                    questions && questions[currentQuestionNo].questionNo
                  }`}
                </span>
              </div>
            </div>

            <div className="">
              <div>
                <div>
                  <div className="">
                    {questions &&
                      questions[currentQuestionNo].question !== "" &&
                      questions[currentQuestionNo].question !== null && (
                        <span>
                          {questions && questions[currentQuestionNo].question}
                        </span>
                      )}

                    {questions &&
                      questions[currentQuestionNo].questionEquation !== "" &&
                      questions[currentQuestionNo].questionEquation !==
                        null && (
                        <span>
                          {questions[currentQuestionNo].questionEquation}
                        </span>
                      )}
                  </div>
                  <div className="mt-6">
                    <RenderOptionsContainer
                      optionType={[
                        questions[currentQuestionNo].options,
                        questions[currentQuestionNo].imageOptions,
                        questions[currentQuestionNo].optionsWithEquation,
                      ]}
                      currentQuestion={currentQuestionNo}
                      highlight={handleChoosenAns}
                      ansHighLight={choseAnsHighlight}
                    />
                  </div>
                </div>
              </div>
              <div className="flex w-full justify-between mt-6">
                <SignBtn
                  btnText={"Prev"}
                  action={() => {
                    handlePrev()
                  }}
                />
                <SignBtn
                  btnText={"Next"}
                  action={() => {
                    handleNext()
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gameboard
