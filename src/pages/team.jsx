import React, { useContext, useEffect } from "react"
import { SystemInfoApiData } from "../contextApi/systemInfo/systemInfoContextApi"
import HeroAboutBanner from "../components/heroAboutBanner"

const Team = () => {
  const { processGetTeam, teamList } = useContext(SystemInfoApiData)

  useEffect(() => {
    processGetTeam()
  }, [])

  return (
    <>
      <HeroAboutBanner title="Team" />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div>
          {teamList.length > 0 ? (
            <div
              dangerouslySetInnerHTML={{
                __html: teamList[0].team,
              }}
            />
          ) : (
            <p className="text-lg mb-8">Loading....</p>
          )}
        </div>
      </div>
    </>
  )
}

export default Team
