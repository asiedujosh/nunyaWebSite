import { useState, useEffect, useContext } from "react"
import { REVIEW } from "../constants/reviewConstant"
import filterAnswers from "../utils/filterAnswers"
import ReviewOptionsContainer from "../components/reviewOptionContainer"
import { QUESTIONS, OPTIONS } from "../constants/gameboardConstant"
import { QuestionApiData } from "../contextApi/question/questionContextApi"

const Review = () => {
  const {
    quizAttempt,
    correctAns,
    questions,
    questionInfo,
    review,
    setReview,
  } = useContext(QuestionApiData)
  const [reviewOption, setReviewOption] = useState({
    reviewOption: REVIEW.selectOptions.options[0],
  })
  const [selectedValue, setSelectedValue] = useState("All")
  const [infoData, setInfoData] = useState([])

  useEffect(() => {
    if (typeof window?.MathJax !== "undefined") {
      window.MathJax.typeset()
    }
  }, [infoData])

  useEffect(() => {
    // console.log(selectedValue);
    setInfoData(filterAnswers(review, selectedValue))
  }, [selectedValue])

  // let handleRetry = () => {
  //   console.log(quizAttempt);
  // };

  let colorCheck = (one, answer, choseAnswer, item) => {
    let results = "#0347A1"

    let optionData = one.split("**")

    let positionItem = optionData && optionData.indexOf(item)
    let getOptionRep = OPTIONS[positionItem]

    if (getOptionRep.toLowerCase() === answer.toLowerCase()) {
      results = "#007E01"
    } else if (getOptionRep.toLowerCase() === choseAnswer.toLowerCase()) {
      results = "#CF0707"
    } else {
      results = "#0347A1"
    }

    return results
  }

  return (
    <div className="h-full overflow-scroll">
      <div className="container mx-auto px-4 z-30 mt-4">
        <div className="max-w-full">
          <h2 className="text-2xl">Records Review</h2>
          <div>
            <span>{quizAttempt.quizInfo.subject.toUpperCase()}</span>
            <span className="mx-2">
              ({quizAttempt.quizInfo.year.toUpperCase()})
            </span>
            <span className="block">
              {correctAns} Out of {questions && questions.length}
            </span>
          </div>
        </div>
        <div className="bg-white bg-opacity-75 shadow-lg p-8">
          {infoData.map((item) => (
            <div className="mb-3">
              {console.log(item)}
              <span className="block text-xl text-gray-500">
                Question {item.questionNo}
              </span>
              <div className="mb-3">
                <span className="block">
                  {item.question !== "" && item.question !== null && (
                    <div
                      dangerouslySetInnerHTML={{
                        __html: item.question,
                      }}
                    />
                  )}
                </span>
                <span className="block">
                  {item.questionEquation !== "" &&
                    item.questionEquation !== null &&
                    item.questionEquation}
                </span>
              </div>

              <div className="space-x-4">
                <span>Chose: {item.userChoice.toUpperCase()}</span>
                <span>Answer: {item.answer.toUpperCase()}</span>
              </div>
              <div>
                {
                  <ReviewOptionsContainer
                    optionType={[
                      item.options,
                      item.imageOptions,
                      item.optionsWithEquation,
                    ]}
                    checkColor={colorCheck}
                    dataInfo={[item.answer, item.userChoice]}
                  />
                }
              </div>
              <hr className="border-t border-gray-300 my-4" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Review
