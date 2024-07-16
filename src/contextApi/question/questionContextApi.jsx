import React, { useState, createContext, useEffect } from "react"
import generateUniqueID from "../../utils/generateId.jsx"
import {
  getAllExams,
  getAllSubject,
  getAllYear,
  getAllTopic,
  getSelectectedQuestions,
  getSelectedOralQuestions,
} from "./question"
// import {Login, Register} from './question';
import equationTrim from "../../utils/equationTrim"
export const QuestionApiData = createContext()

const QuestionApiDataProvider = (props) => {
  const [examsList, setExamsList] = useState([])
  const [questionInfo, setQuestionInfo] = useState()
  const [oralQuestionInfo, setOralQuestionInfo] = useState()
  const [quizAttempt, setQuizAttempt] = useState()
  const [oralQuizAttempt, setOralQuizAttempt] = useState()
  const [examOptions, setExamOptions] = useState()
  const [yearOptions, setYearOptions] = useState()
  const [subjectOptions, setSubjectOptions] = useState()
  const [yearList, setYearList] = useState([])
  const [solvedQuestions, setSolvedQuestions] = useState([])
  const [solvedOralQuestions, setSolvedOralQuestions] = useState([])
  const [review, setReview] = useState([])
  const [oralReview, setOralReview] = useState([])
  const [subjectList, setSubjectList] = useState([])
  const [topicList, setTopicList] = useState([])
  const [loadingQuestions, setLoadingQuestions] = useState(false)
  const [questions, setQuestions] = useState()
  const [oralQuestions, setOralQuestions] = useState()
  const [correctAns, setCorrectAns] = useState(0)

  // For we specific states
  const [entryStage, setEntryStage] = useState(1)
  const [examId, setExamId] = useState("")
  const [yearId, setYearId] = useState("")
  const [subjectId, setSubjectId] = useState("")

  useEffect(() => {
    processGetAllTopic()
  }, [])

  useEffect(() => {
    try {
      if (questions && questions.length > 0) {
        prepareQuestionsToBeAnswered(questions, questionInfo)
        // console.log(questions.length);
      }
    } catch (err) {
      console.log(err)
    }
  }, [questions])

  const processGetAllExams = async () => {
    let response = await getAllExams()
    if (response) {
      setExamsList(response.data.data)
      processExamsOptions(response.data.data)
    }
  }

  const processExamsOptions = async (data) => {
    try {
      let exams = ["Quiz type"]
      data &&
        data.map((item) => {
          exams.push(item.exam)
        })
      setExamOptions(exams)
    } catch (err) {
      console.log(err)
    }
  }

  const processGetAllYear = async () => {
    try {
      let response = await getAllYear()
      if (response) {
        setYearList(response.data.data)
        processYearOptions(response.data.data)
      }
    } catch (err) {
      console.log(err)
    }
  }

  const processGetAllSubject = async () => {
    try {
      let response = await getAllSubject()
      if (response) {
        setSubjectList(response.data.data)
        processSubjectOptions(response.data.data)
      }
    } catch (err) {
      console.log(err)
    }
  }

  const processSubjectOptions = async (data) => {
    try {
      let subjects = ["Subject"]
      data &&
        data.map((item) => {
          subjects.push(item.subject)
        })
      setSubjectOptions(subjects)
    } catch (err) {
      console.log(err)
    }
  }

  const processYearOptions = async (data) => {
    try {
      let years = ["Year"]
      data &&
        data.map((item) => {
          years.push(item.year)
        })
      setYearOptions(years)
    } catch (err) {
      console.log(err)
    }
  }

  const processGetAllTopic = async () => {
    try {
      let response = await getAllTopic()
      if (response) {
        setTopicList(response.data.data)
      }
    } catch (err) {
      console.log(err)
    }
  }

  //Map Id to corresponding options
  const mapId = (item, itemList, name) => {
    try {
      let filteredItem = itemList.filter((items) => items[name] === item)
      return filteredItem && filteredItem[0] && filteredItem[0].id
      // return filteredItem[0].id
    } catch (err) {
      console.log(err)
    }
  }

  const processGetQuestions = async (data) => {
    // questionStyle: data.questionStyle || null,
    //   timer: data.timer || null,
    let formData = {
      examType: mapId(data.quizType, examsList, "exam"),
      year: mapId(data.year, yearList, "year"),
      subject: mapId(data.subject, subjectList, "subject"),
      questionNos: data.questionNos || null,
    }

    let info = {
      examsType: data.quizType,
      year: data.year,
      subject: data.subject,
      timer: data.timer || null,
      questionStyle: data.questionStyle,
    }

    setQuestionInfo(info)

    // console.log(formData)
    let response = await getSelectectedQuestions(formData)
    if (response) {
      let questContainer = []
      //**This for website only */

      response.data &&
        response.data.data.map((item) => {
          if (item.questionEquation) {
            let newEquation = equationTrim(item.questionEquation)
            item.questionEquation = newEquation
          }
          questContainer.push(item)
        })

      //**End This for website only */

      setQuestions(questContainer)
      setLoadingQuestions(false)
    }
  }

  const processGetOralQuestions = async (data) => {
    try {
      // questionStyle: data.questionStyle || null,
      //   timer: data.timer || null,
      let formData = {
        examType: mapId(data.quizType, examsList, "exam"),
        year: mapId(data.year, yearList, "year"),
        subject: mapId(data.subject, subjectList, "subject"),
        questionNos: data.questionNos || null,
      }

      let info = {
        examsType: data.quizType,
        year: data.year,
        subject: data.subject,
        timer: data.timer || null,
        questionStyle: data.questionStyle,
      }

      setOralQuestionInfo(info)

      // console.log(formData);
      let response = await getSelectedOralQuestions(formData)
      if (response) {
        // console.log(response);
        setOralQuestions(response.data.data)
        setLoadingQuestions(false)
      }
    } catch (err) {
      console.log(err)
    }
  }

  const prepareQuestionsToBeAnswered = (data, info) => {
    // console.log("We are working")

    //step 2
    let attemptQuestArray = []
    data.map((item) => {
      let newData = {
        id: item.id,
        examId: item.examId,
        yearId: item.yearId,
        subjectId: item.subjectId,
        topicId: item.topicId,
        questionNo: item.questionNo,
        question: item.question,
        questionEquation: item.questionEquation,
        options: item.options,
        imageOptions: item.imageOptions,
        optionsWithEquation: item.optionsWithEquation,
        answer: item.answer,
        userChoice: null,
      }

      attemptQuestArray.push(newData)
    })

    //Step 1
    setQuizAttempt({
      quizId: generateUniqueID(),
      userInfo: "josh",
      quizInfo: info,
      solvedQuestions: attemptQuestArray,
    })

    // console.log("We are working")
  }

  const updateQuizAttempt = (id, newData) => {
    try {
      setQuizAttempt((prevQuizAttempt) => {
        // Create a copy of the state
        const updatedSolvedQuestions = [...prevQuizAttempt.solvedQuestions]

        // Find the index of the question with the given ID
        const questionIndex = updatedSolvedQuestions.findIndex(
          (question) => question.id === id
        )

        // Update the userChoice for the found question
        if (questionIndex !== -1) {
          updatedSolvedQuestions[questionIndex] = {
            ...updatedSolvedQuestions[questionIndex],
            userChoice: newData,
          }
        }

        // Return the updated state
        return {
          ...prevQuizAttempt,
          solvedQuestions: updatedSolvedQuestions,
        }
      })
    } catch (err) {
      console.log(err)
    }
  }

  const updateOralQuizAttempt = (id, newData) => {
    try {
      setOralQuizAttempt((prevQuizAttempt) => {
        // Create a copy of the state
        const updatedSolvedOralQuestions = [
          ...prevQuizAttempt.solvedOralQuestions,
        ]

        // Find the index of the question with the given ID
        const oralQuestionIndex = updatedSolvedOralQuestions.findIndex(
          (oralQuestion) => oralQuestion.id === id
        )

        // Update the userChoice for the found question
        if (oralQuestionIndex !== -1) {
          updatedSolvedOralQuestions[oralQuestionIndex] = {
            ...updatedSolvedOralQuestions[oralQuestionIndex],
            userChoice: newData,
          }
        }

        // Return the updated state
        return {
          ...prevOralQuizAttempt,
          solvedOralQuestions: updatedSolvedOralQuestions,
        }
      })
    } catch (err) {
      console.log(err)
    }
  }

  const processQuizAttempt = (id, ans, userAns) => {
    try {
      if (userAns) {
        if (ans.toLowerCase() === userAns.toLowerCase()) {
          setCorrectAns((prev) => prev + 1)
        }
      } else {
        userAns = "None"
      }

      updateQuizAttempt(id, userAns)
    } catch (err) {
      console.log(err)
    }
  }

  const processOralQuizAttempt = (id, ans, userAns) => {
    try {
      if (userAns) {
        if (ans.toLowerCase() === userAns.toLowerCase()) {
          setCorrectAns((prev) => prev + 1)
        } else {
          userAns = "None"
        }

        updateOralQuizAttempt(id, userAns)
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <QuestionApiData.Provider
      value={{
        solvedOralQuestions,
        solvedQuestions,
        setSolvedQuestions,
        setSolvedOralQuestions,
        processGetAllYear,
        processGetAllExams,
        processGetAllSubject,
        processGetQuestions,
        processGetOralQuestions,
        setQuestions,
        examsList,
        yearList,
        subjectList,
        yearOptions,
        examOptions,
        subjectOptions,
        oralQuestions,
        oralQuestionInfo,
        questions,
        questionInfo,
        loadingQuestions,
        setLoadingQuestions,
        processQuizAttempt,
        processOralQuizAttempt,
        correctAns,
        quizAttempt,
        oralQuizAttempt,
        oralReview,
        review,
        setReview,
        setOralReview,
        setCorrectAns,
        topicList,
        entryStage,
        setEntryStage,
        examId,
        setExamId,
        yearId,
        setYearId,
        subjectId,
        setSubjectId,
      }}
    >
      {props.children}
    </QuestionApiData.Provider>
  )
}

export default QuestionApiDataProvider
