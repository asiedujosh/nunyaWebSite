import React, { useContext, useState, useEffect } from "react"
import { QUIZOPTIONS } from "../constants/quizConstant"
import InputField from "../components/inputField"
import SignBtn from "../components/signBtn"
import SelectField from "../components/selectField"
import { useNavigate } from "react-router-dom"
import { AuthApiData } from "../contextApi/auth/authContextApi"
import {QuestionApiData} from '../contextApi/question/questionContextApi';
import {RecordApiData} from '../contextApi/records/recordsContextApi';
import Marks from '../utils/marksNo';
import PieChartView from '../components/pieChartView'
import dateFormat from "../utils/dateFormat"

const Analysis = () => {
  const {userProfile} = useContext(AuthApiData);
  const {processGetUserRecords, savedRecords, setReviewId, quizId, setQuizId} =
    useContext(RecordApiData);
  const {processGetQuestions, review} = useContext(QuestionApiData);

  const navigate = useNavigate()

  useEffect(() => {
    if(!savedRecords){
    processGetUserRecords({
      userId: userProfile.data ? userProfile.data.username : userProfile.username,
    });
  }
  }, []);

  // const goToMoreDetails = item => {
  //   navigation.navigate('AnalysisDetail', {data: item});
  // };

  const goToMoreDetails = item => {
    setQuizId(item)
    navigate(`/dashboard/analysisDetail`)
  };


  return (
    <div className="container mx-auto px-4 z-30 mt-4">
    <div className="max-w-full">
      <h2 className="text-3xl mb-4">Analysis</h2>
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
             <PieChartView pieData={[ Marks(item.quizId, savedRecords.marks, 'Ans'),
                            Marks(item.quizId, savedRecords.marks, 'Questions')
                          ]} />
            </div>
            <div>
              <span>
              {Marks(item.quizId, savedRecords.marks, 'Ans')} Out
                            of{' '}
                            {Marks(
                              item.quizId,
                              savedRecords.marks,
                              'Questions',
                            )}
              </span>
              <span>
                <span className = "block">Percentage</span>
              {Math.ceil(
                              (Marks(item.quizId, savedRecords.marks, 'Ans') /
                                Marks(
                                  item.quizId,
                                  savedRecords.marks,
                                  'Questions',
                                )) *
                                100,
                            )}
                            %
              </span>
            </div>
            <div className="flex space-x-4">
                <SignBtn
                  btnText={"Analysis Details"}
                  action={() => {
                    goToMoreDetails(item.quizId)
                  }}
                />
              </div>
          </div>
        ))}
    </div>
  </div>
  )
}

export default Analysis
