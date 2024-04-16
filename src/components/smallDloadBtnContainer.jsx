import React, { useContext } from "react"
import DownloadButton from "./downloadBtn"

const SmallDownloadBtnContainer = () => {
  return (
    <div className="block md:hidden container mx-auto px-4 z-30 text-center">
      <h3 className="text-5xl text-gray-800 font-bold mb-4">Nunya Exams</h3>
      <p className="text-3xl mb-4 text-gray-800">available on</p>
      <div>
        <DownloadButton store="google" />
        <DownloadButton store="apple" />
      </div>
    </div>
  )
}

export default SmallDownloadBtnContainer
