import React, { useContext } from "react"
import DownloadButton from "./downloadBtn"

const DownloadBtnContainer = () => {
  return (
    <div className="hidden md:block container mx-auto px-4 z-30 text-center">
      <h3 className="text-5xl text-white font-bold mb-4">Nunya Exams</h3>
      <p className="text-3xl mb-4 text-white">available on</p>
      <div>
        <DownloadButton store="google" />
        <DownloadButton store="apple" />
      </div>
    </div>
  )
}

export default DownloadBtnContainer
