import React, { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import SignBtn from "../components/signBtn"

const NotPurchased = () => {
  const navigate = useNavigate()

  const goToStore = async () => {
    navigate("/dashboard/store")
  }

  return (
    <div className="container mx-auto px-4 z-30 mt-4">
      <div className="max-w-full">
        <div>{/** Carousel here */}</div>
        <div className="bg-white bg-opacity-75 shadow-lg p-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl">Purchase questions from our store</h2>
          </div>
          <div>
            <SignBtn
              btnText={"Go to store"}
              action={goToStore}
              fullWidth={"w-full"}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotPurchased
