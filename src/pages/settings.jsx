import React, { useContext, useState } from "react"
import { SETTINGCONSTANT } from "../constants/settingConstant"
import SignBtn from "../components/signBtn"
import { AuthApiData } from "../contextApi/auth/authContextApi"

const Settings = () => {
  return (
    <div className="container mx-auto px-4 z-30 mt-4">
      <div className="max-w-full">
        <div className="bg-white bg-opacity-75 shadow-lg p-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl">Settings</h2>
          </div>
          {SETTINGCONSTANT.list.map((item) => (
            <div className="block mb-4">
              <SignBtn
                btnText={item.title}
                action={() => {
                  console.log("We are cool")
                }}
                fullWidth={"w-full"}
              />
            </div>
          ))}
          <div></div>
        </div>
      </div>
    </div>
  )
}

export default Settings
