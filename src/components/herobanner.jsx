import React, { useContext } from "react"
import backgroundImage from "../assets/image/heroImage.jpg"
import DownloadBtnContainer from "./downloadBtnContainer"
import { AuthApiData } from "../contextApi/auth/authContextApi"
import SignOptions from "./signOptions"
import HeroCard from "./herocard"
import SignIn from "./signIn"
import SignUpTwo from "./SignUpTwo"
import SignUpOne from "./SignUpOne"
import SignUpThree from "./SignUpThree"

const HeroBanner = () => {
  const { registerStage } = useContext(AuthApiData)

  let cardOutput = () => {
    switch (registerStage) {
      case 0:
        return <HeroCard />
      case 1:
        return <SignOptions />
      case 2:
        return <SignIn />
      case 3:
        return <SignUpOne />
      case 4:
        return <SignUpTwo />
      default:
        return <SignUpThree />
    }
  }

  return (
    <div
      className="relative bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url(${backgroundImage})`, height: "60vh" }}
    >
      {/* Background Image */}
      <div className="md:absolute inset-0 bg-black opacity-50 z-10"></div>
      <div className="md:absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent z-20"></div>
      <div className="md:flex w-full">
        {cardOutput()}
        {/* Sign-in Card */}
        {/* <SignOptions /> */}
        {/* <HeroCard /> */}
        <DownloadBtnContainer />
      </div>
    </div>
  )
}

export default HeroBanner
