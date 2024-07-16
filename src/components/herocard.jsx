import React, { useContext, useEffect } from "react"
import { SystemInfoApiData } from "../contextApi/systemInfo/systemInfoContextApi"
import { AuthApiData } from "../contextApi/auth/authContextApi"

const HeroCard = () => {
  const { setRegisterStage } = useContext(AuthApiData)
  const { heroBannerList, processGetHeroBanner } = useContext(SystemInfoApiData)

  useEffect(() => {
    processGetHeroBanner()
  }, [])

  let handleNext = () => {
    setRegisterStage((prev) => prev + 1)
  }

  return (
    <div className="container mx-auto px-4 z-30">
      <div className="max-w-md md:ml-40">
        {heroBannerList.length > 0 ? (
          <div className="bg-white bg-opacity-75 shadow-lg p-8">
            <h2 className="text-3xl mb-4">{heroBannerList[0].title}</h2>
            <p className="mb-4">{heroBannerList[0].body}</p>
            <div className="flex items-center justify-between">
              <button
                onClick={handleNext}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 focus:outline-none focus:shadow-outline w-full"
                type="button"
              >
                Try Now
              </button>
            </div>
          </div>
        ) : (
          <div className="bg-white bg-opacity-75 shadow-lg p-8">
            <h2 className="text-3xl mb-4">Loading...</h2>
          </div>
        )}
      </div>
      {console.log(heroBannerList)}
    </div>
  )
}

export default HeroCard
