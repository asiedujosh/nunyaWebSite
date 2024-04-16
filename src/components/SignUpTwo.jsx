import React, { useContext, useState } from "react"
import { AuthApiData } from "../contextApi/auth/authContextApi"
import InputField from "./inputField"
import { SIGNUP } from "../constants/homeConstant"
import SignBtn from "./signBtn"

const SignUpTwo = () => {
  const {
    registerStage,
    setRegisterStage,
    registerFormData,
    setRegisterFormData,
  } = useContext(AuthApiData)
  const [error, setError] = useState()

  let handleNext = (data) => {
    setRegisterStage(data)
  }

  const handleInputChange = (data, field) => {
    setRegisterFormData({ ...registerFormData, [field]: data })
  }

  const handleStageChange = () => {
    //Check If its filled in
    let err = []
    SIGNUP.field2.map((item, index) => {
      if (!registerFormData[item.name]) {
        let errData = {
          errName: item.name,
          errMsg: `* ${item.label} cannot be empty`,
        }
        err.push(errData)
      }
    })

    if (err.length !== 0) {
      setError(err)
    } else {
      let i = registerStage + 1
      setRegisterStage(i)
    }
    // console.log(registerFormData);
  }

  return (
    <div className="container mx-auto px-4 z-30">
      <div className="max-w-md md:ml-40">
        <div className="bg-white bg-opacity-75 shadow-lg p-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl mb-4">Sign Up</h2>
            <a
              onClick={() => handleNext(1)}
              className="inline-block font-bold text-sm text-blue-500 hover:text-blue-800"
              href="#"
            >
              Back
            </a>
          </div>
          <form>
            {SIGNUP.field2.map((item) => {
              return (
                <InputField
                  key={item.id}
                  field={item}
                  value={registerFormData}
                  defaultVal={item.defaultValue}
                  err={error}
                  readOnly={item.readOnly}
                  change={(data, field) => {
                    handleInputChange(data, field)
                  }}
                />
              )
            })}
            <div className="flex items-center justify-between">
              <SignBtn btnText={"Next"} action={handleStageChange} />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignUpTwo
