import { useState, useRef, useEffect, useContext } from "react"
// import {Dimensions} from 'react-native';

const ReviewImageOptions = ({ imgData, dataInfo, checkColor }) => {
  return (
    <div>
      {imgData.split("**").map((item, index) => (
        <div
          className="px-4 py-2"
          style={{
            backgroundColor: checkColor(
              imgData,
              dataInfo[0],
              dataInfo[1],
              item
            ),
          }}
        >
          <img
            src={item} // Replace with the actual path to your image
          />
        </div>
      ))}
    </div>
  )
}

export default ReviewImageOptions
