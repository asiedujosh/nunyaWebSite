import React, { useContext, useState } from "react"
import SignBtn from "../components/signBtn"
import { useNavigate } from "react-router-dom"
import MainStore from "../components/mainStore"
import MainFree from "../components/mainFree"
import MainPurchase from "../components/mainPurchase"
import { StoreApiData } from "../contextApi/store/storeContextApi"

const Free = () => {
  const { cart } = useContext(StoreApiData)

  const navigate = useNavigate()

  return (
    <div className="h-full overflow-scroll">
      <div className="container mx-auto px-4 z-30 mt-4">
        <div className="max-w-full">
          <div className="flex justify-between">
            <div className="flex space-x-2">
              <SignBtn
                btnText={"Store"}
                action={() => {
                  navigate("/dashboard/store")
                }}
              />
              <SignBtn
                btnText={"Purchase"}
                action={() => {
                  navigate("/dashboard/purchase")
                }}
              />
              <SignBtn
                btnText={"Free"}
                action={() => {
                  navigate("/dashboard/free")
                }}
              />
            </div>
            <div>
              <SignBtn
                btnText={`Cart ${cart.length}`}
                action={() => {
                  navigate("/dashboard/cart")
                }}
              />
            </div>
          </div>
          <div className="bg-white bg-opacity-75 shadow-lg p-8 mt-4">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl">Free</h2>
            </div>

            <MainFree />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Free
