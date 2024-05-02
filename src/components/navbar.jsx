import React, { useContext, useEffect } from "react"
import { AuthApiData } from "../contextApi/auth/authContextApi"
import { Link, useNavigate } from "react-router-dom"
import logo from "../assets/logo.png"

const Navbar = () => {
  const { userProfile, processLogout, alreadyLoggedIn, setRegisterStage } =
    useContext(AuthApiData)

  const navigate = useNavigate()

  console.log(userProfile)

  useEffect(() => {
    if (!alreadyLoggedIn) {
      navigate("/")
    }
  }, [alreadyLoggedIn])

  let handleLogout = () => {
    // console.log("Logginout")
    processLogout()
  }

  let handleSignIn = () => {
    setRegisterStage(2)
  }

  let handleSignUp = () => {
    setRegisterStage(3)
  }

  return (
    <div className="flex justify-between items-center bg-blue-900 text-white p-4">
      <div className="flex items-center">
        <div className="mr-4 flex items-center">
          <img src={logo} alt="site-logo" width="50px" />
          <span className="text-xl font-bold">
            {!alreadyLoggedIn ? (
              <Link to="">Nunya Exams</Link>
            ) : userProfile &&
              (userProfile.username ||
                (userProfile.data && userProfile.data.username)) ? (
              `Welcome ${userProfile.username || userProfile.data.username}`
            ) : (
              <Link to="">Nunya Exams</Link>
            )}
          </span>
        </div>
      </div>
      <div>
        <div className="flex items-center">
          <Link to="/about" className="text-white  hover:text-gray-400 mr-4">
            About
          </Link>
          <Link to="/team" className="text-white  hover:text-gray-400 mr-4">
            Team
          </Link>
          <Link
            to="/termsAndCondition"
            className="text-white  hover:text-gray-400 mr-4"
          >
            T&C
          </Link>
          <Link to="/contact" className="text-white  hover:text-gray-400 mr-4">
            Contact
          </Link>
          <Link
            to="/testimony"
            className="text-white  hover:text-gray-400 mr-4"
          >
            Testimonial
          </Link>

          {alreadyLoggedIn &&
          userProfile &&
          (userProfile.username ||
            (userProfile.data && userProfile.data.username)) ? (
            <button
              className="text-white hover:text-gray-400"
              onClick={() => handleLogout()}
            >
              Logout
            </button>
          ) : (
            <>
              <span
                className="text-white hover:text-gray-400 mr-4 rounded-xl border-2 border-white hover:border-gray-400 px-4 py-2 cursor-pointer"
                onClick={handleSignIn}
              >
                SignIn
              </span>

              <span
                className="text-white hover:text-gray-400 mr-4 rounded-xl border-2 border-white px-4 py-2 hover:border-gray-400 cursor-pointer"
                onClick={handleSignUp}
              >
                SignUp
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar
