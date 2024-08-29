import { useContext, useEffect } from "react"
import { AuthApiData } from "../contextApi/auth/authContextApi"
import { useNavigate } from "react-router-dom"
import { FloatingWhatsApp } from "react-floating-whatsapp"
import SmallDownloadBtnContainer from "../components/smallDloadBtnContainer"
import HeroBanner from "../components/herobanner"
import AboutSection from "../components/AboutSection"
import ThirdSection from "../components/ThirdSection"
import ServiceSection from "../components/ServiceSection"
import PaymentSection from "../components/paymentModeSection"

const Home = () => {
  const { alreadyLoggedIn } = useContext(AuthApiData)

  const navigate = useNavigate()

  useEffect(() => {
    if (alreadyLoggedIn) {
      navigate("/dashboard")
    } else {
      navigate("/")
    }
  }, [alreadyLoggedIn])

  return (
    <>
      <HeroBanner />
      <div className="block my-10 md:hidden">
        <SmallDownloadBtnContainer />
      </div>
      <AboutSection />
      <ServiceSection />
      <ThirdSection />
      {/* <PaymentSection /> */}
      <FloatingWhatsApp
        phoneNumber="0200588522"
        accountName="Nunya Administrator"
      />
    </>
  )
}

export default Home
