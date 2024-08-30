import React, { useContext } from "react"
import DownloadButton from "./downloadBtn"

const DownloadBtnContainer = () => {
  return (
    <div className="hidden md:block container mx-auto px-4 z-30 text-center">
      <h3 className="text-5xl text-white font-bold mb-2">Nunya Exams</h3>
      {/* <p className="text-3xl mb-4 text-white">available on</p>
      <div>
        <DownloadButton
          store="google"
          location="https://play.google.com/store/apps/details?id=com.nunyae.schoolapp"
        />
        <DownloadButton store="apple" location="/comingSoon" />
      </div> */}
      <h4 className="text-3xl mb-4 text-white">Coming soon on all mobile Store</h4>
    </div>
  )
}

export default DownloadBtnContainer
