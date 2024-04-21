import { useContext, useEffect } from "react"
import { AuthApiData } from "../contextApi/auth/authContextApi"
import Navbar from "../components/navbar"
import { useNavigate } from "react-router-dom"
import SmallDownloadBtnContainer from "../components/smallDloadBtnContainer"
import HeroBanner from "../components/herobanner"
import AboutSection from "../components/AboutSection"
import ThirdSection from "../components/ThirdSection"
import ServiceSection from "../components/ServiceSection"
import FourthSection from "../components/FourthSection"
import TestimonialSection from "../components/TestimonialSection"
import PaymentSection from "../components/paymentModeSection"
import DownloadBtnContainer from "../components/downloadBtnContainer"
import Footer from "../components/Footer"

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
      <PaymentSection />
      <TestimonialSection />
    </>
  )
}

export default Home
