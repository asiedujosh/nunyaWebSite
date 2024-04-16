import React, { useContext } from "react"
import { AuthApiData } from "../contextApi/auth/authContextApi"
import SignBtn from "./signBtn"
import Separator from "./separator"

const SignOptions = () => {
  const { setRegisterStage } = useContext(AuthApiData)

  let handleNext = (data) => {
    setRegisterStage(data)
  }

  return (
    <div className="container mx-auto px-4 z-30">
      <div className="max-w-md md:ml-40">
        <div className="bg-white bg-opacity-75 shadow-lg p-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl ">Sign Options</h2>
            <a
              onClick={() => handleNext(0)}
              className="inline-block font-bold text-sm text-blue-500 hover:text-blue-800"
              href="#"
            >
              Back
            </a>
          </div>

          <div className="flex items-center justify-between mb-2">
            <SignBtn
              btnText={"Sign In"}
              action={() => handleNext(2)}
              fullWidth
            />
          </div>
          <Separator text="OR" />
          <div className="flex items-center justify-between mb-2">
            <SignBtn
              btnText={"Sign Up"}
              action={() => handleNext(3)}
              fullWidth
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignOptions
