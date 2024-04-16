import React, { useContext, useState, useEffect } from "react"
import { AuthApiData } from "../contextApi/auth/authContextApi"
import InputField from "./inputField"
import SignBtn from "./signBtn"
import { SIGNIN } from "../constants/homeConstant"

const SignIn = () => {
  const {
    processLogin,
    signInLoading,
    setSignInLoading,
    setSignInError,
    setRegisterStage,
    signInError,
  } = useContext(AuthApiData)
  const [formData, setFormData] = useState({
    username: null,
    password: null,
  })
  const [error, setError] = useState()

  useEffect(() => {
    if (signInError) {
      let err = []
      let errData = {
        errName: "username",
        errMsg: "Username or password incorrect",
      }
      err.push(errData)
      setError(err)
    }
  }, [signInError])

  let handleNext = (data) => {
    setRegisterStage(data)
  }

  const handleInputChange = (data, field) => {
    setFormData({ ...formData, [field]: data })
  }

  const handleLogin = () => {
    formData.username = formData.username && formData.username.trim()
    formData.password = formData.password && formData.password.trim()
    let err = []
    SIGNIN.field.map((item, index) => {
      if (!formData.username || !formData.password) {
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
      setError(error)
      setSignInLoading(true)
      setSignInError(false)
      processLogin(formData)
      // console.log(formData)
    }
  }

  return (
    <div className="container mx-auto px-4 z-30">
      <div className="max-w-md md:ml-40">
        <div className="bg-white bg-opacity-75 shadow-lg p-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl">{SIGNIN.title}</h2>
            <a
              onClick={() => handleNext(1)}
              className="inline-block font-bold text-sm text-blue-500 hover:text-blue-800"
              href="#"
            >
              Back
            </a>
          </div>
          <form>
            {SIGNIN.field.map((item) => {
              return (
                <InputField
                  key={item.id}
                  field={item}
                  value={formData}
                  defaultVal={item.defaultValue}
                  readOnly={item.readOnly}
                  change={(data, field) => {
                    handleInputChange(data, field)
                  }}
                />
              )
            })}
            <div className="flex items-center justify-between">
              <SignBtn btnText={"Sign In"} action={handleLogin} />
              <a
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                href="#"
              >
                Forgot Password?
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignIn
