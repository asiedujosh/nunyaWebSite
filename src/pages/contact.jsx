import React, { useContext, useEffect } from "react"
import { SystemInfoApiData } from "../contextApi/systemInfo/systemInfoContextApi"
import HeroAboutBanner from "../components/heroAboutBanner"

const Contact = () => {
  const { processGetContact, contactList } = useContext(SystemInfoApiData)

  useEffect(() => {
    processGetContact()
  }, [])

  return (
    <>
      <HeroAboutBanner title="Contact" />
      <div className="bg-gray-100 min-h-screen">
        <div className="container mx-auto py-16 px-4 md:px-0">
          <div className="max-w-lg mx-auto">
            <h2 className="text-2xl font-semibold mb-4">
              Nunya Contact Information:
            </h2>
            <p className="mb-4">Email: {contactList[0]?.email}</p>
            <p className="mb-8">Address: {contactList[0]?.address}</p>

            <h2 className="text-2xl font-semibold mb-4">
              Assistance and Support:
            </h2>
            <p className="mb-4">Phone Number: {contactList[0]?.phoneNo}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
