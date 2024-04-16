import React, { useState, useContext } from "react"
import { PaystackButton } from "react-paystack"
import { AuthApiData } from "../contextApi/auth/authContextApi"
import { PackageApiData } from "../contextApi/package/packageContextApi"
import { StoreApiData } from "../contextApi/store/storeContextApi"

const MakePaymentBtn = ({ data }) => {
  const { userProfile } = useContext(AuthApiData)
  const { processPurchase, cart } = useContext(StoreApiData)
  const { processSubscribe, loading, setLoading } = useContext(PackageApiData)

  const successFeature = () => {
    console.log("There transaction was successful")
    data.premium
      ? processSubscribe({
          id: userProfile && userProfile.id,
          username: userProfile && userProfile.username,
          tel: userProfile && userProfile.tel,
          email: userProfile && userProfile.email,
          amount: price,
        })
      : processPurchase({
          userId: userProfile && userProfile.id,
          data: cart,
        })
    setLoading((prev) => !prev)
    console.log("Data transfer success")
  }

  const componentProps = {
    email: userProfile.data ? userProfile.data.email : userProfile.email,
    amount: data ? data.amount * 100 : "10",
    currency: "GHS",
    metadata: {
      name: userProfile.data ? userProfile.data.username : userProfile.username,
      phone: userProfile.data ? userProfile.data.tel : userProfile.tel,
    },
    channels: ["card", "mobile_money"],
    // publicKey: process.env.PAYSTACK_KEY,
    publicKey: "pk_test_57f2a278d997d17ffe923ca52982cb5240e4446c",
    text: "Pay Now",
    onSuccess: () => successFeature(),
    onClose: () => alert("Wait! Don't leave :("),
  }

  return (
    <>
      <PaystackButton {...componentProps} />
    </>
  )
}

export default MakePaymentBtn
