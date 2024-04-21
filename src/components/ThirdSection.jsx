import React from "react"
import backgroundImage from "../assets/image/heroImage.jpg"
import ScreenShot from "../assets/image/screenShot.png"
import ImageOne from "../assets/image/studentOne.jpg"
import ImageTwo from "../assets/image/studentTwo.jpg"
// import ImageThree from "../assets/image/studentThree.png"
// import ImageFour from "../assets/image/studentFour.png"

const ThirdSection = () => {
  return (
    <div
      className="relative bg-cover bg-center flex items-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        overflow: "hidden",
      }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 bg-blue-500 opacity-50 z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent z-20"></div>

      {/* Sign-in Card */}
      <div
        className="container mx-auto z-30 "
        style={{ height: "48vh", width: "1000px" }}
      >
        <img src={ScreenShot} alt="Placeholder" className="w-full" />
      </div>
    </div>
  )
}

export default ThirdSection
