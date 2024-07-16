import React, { useContext, useEffect } from "react"
import { SystemInfoApiData } from "../contextApi/systemInfo/systemInfoContextApi"
import HeroAboutBanner from "../components/heroAboutBanner"
import ServiceSection from "../components/ServiceSection"

const About = () => {
  const { processGetAbout, aboutList } = useContext(SystemInfoApiData)

  useEffect(() => {
    processGetAbout()
  }, [])

  return (
    <>
      <HeroAboutBanner title="About" />

      <div className="container mx-auto py-16 px-4 md:px-0">
        <div className="flex flex-col">
          <div>
            {aboutList.length > 0 ? (
              <div
                dangerouslySetInnerHTML={{
                  __html: aboutList[0].about,
                }}
              />
            ) : (
              <p className="text-lg mb-8">Loading....</p>
            )}
          </div>
        </div>
      </div>
      <ServiceSection />
    </>
  )
}

export default About
