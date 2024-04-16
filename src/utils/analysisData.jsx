import { useState, useContext, useEffect } from "react"
import { QuestionApiData } from "../contextApi/question/questionContextApi.jsx"
import { RecordApiData } from "../contextApi/records/recordsContextApi.jsx"
import positionMap from "./positionMap.jsx"

const AnalysisData = (data) => {
  const { topicList } = useContext(QuestionApiData)
  const { processGetRecordReview, recordReviewDetail } =
    useContext(RecordApiData)

  const [topicEvaluation, setTopicEvaluation] = useState([])
  const [allCorrectTopicInQuestion, setAllCorrectTopicInQuestion] = useState([])
  const [positionReady, setPositionReady] = useState([])

  useEffect(() => {
    processGetRecordReview(data)
  }, [data])

  useEffect(() => {
    setTopicEvaluation(recordReviewDetail)
    let data = recordReviewDetail.filter(
      (item) => item.userChoice.toLowerCase() == item.answer.toLowerCase()
    )
    setAllCorrectTopicInQuestion(data)
  }, [recordReviewDetail])

  useEffect(() => {
    let newData = positionMap(
      allCorrectTopicInQuestion,
      topicEvaluation,
      topicList
    )
    setPositionReady(newData)
  }, [topicEvaluation])

  return positionReady
}

export default AnalysisData
