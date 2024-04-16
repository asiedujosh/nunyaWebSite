import React, { useContext, useState, useEffect } from "react"
import AnalysisData from '../utils/analysisData';
import {RecordApiData} from '../contextApi/records/recordsContextApi';
import { Routes, Route, useParams } from 'react-router-dom';

const AnalysisDetail = () => {
  const {quizId} = useContext(RecordApiData);

  
  let postInfo = AnalysisData(quizId);
  console.log(postInfo)

  return (
    <div className="container mx-auto px-4 z-30 mt-4">
      <div className="max-w-full">
        <h2 className="text-3xl mb-4">Topic Analysis</h2>
        {postInfo &&
          postInfo.map((item) => (
            <div className="bg-white bg-opacity-75 shadow-lg p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl">
                  {item.topic}
                </h2>
              </div>
              <div className="mb-6">
                <span className="block">
                {item.recurring} out of {item.totalTopic}
                </span>
                <span className="block">
                {Math.ceil((item.recurring / item.totalTopic) * 100)}%
                </span>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default AnalysisDetail
