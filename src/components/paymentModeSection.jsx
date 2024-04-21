import React from "react"
import PayOne from "../assets/image/applePay.png"
import PayTwo from "../assets/image/googlePay.png"
import PayThree from "../assets/image/visa.png"
import PayFour from "../assets/image/momo.png"

const PaymentSection = () => {
  return (
    <section className="bg-gray-900 text-white py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">
          Easy Purchase With You Prefered Payment Mode
        </h2>
        <div className="flex justify-center items-center flex-wrap gap-4">
          <div className="w-64 h-64 overflow-hidden rounded-md shadow-lg relative">
            <img
              src={PayOne}
              alt="Image 1"
              className="w-full h-full object-contain transition-transform duration-300 transform hover:scale-105"
            />
          </div>
          <div className="w-64 h-64 overflow-hidden rounded-md shadow-lg relative">
            <img
              src={PayTwo}
              alt="Image 2"
              className="w-full h-full object-contain transition-transform duration-300 transform hover:scale-105"
            />
          </div>
          <div className="w-64 h-64 overflow-hidden rounded-md shadow-lg relative">
            <img
              src={PayThree}
              alt="Image 3"
              className="w-full h-full object-contain transition-transform duration-300 transform hover:scale-105"
            />
          </div>
          <div className="w-64 h-64 overflow-hidden rounded-md shadow-lg relative">
            <img
              src={PayFour}
              alt="Image 3"
              className="w-full h-full object-contain transition-transform duration-300 transform hover:scale-105"
            />
          </div>
          {/* Add more image divs as needed */}
        </div>
      </div>
    </section>
  )
}

export default PaymentSection
