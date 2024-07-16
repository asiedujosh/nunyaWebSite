import React, { useContext, useEffect, useState } from "react"
import { AuthApiData } from "../contextApi/auth/authContextApi"
import { Link, useNavigate } from "react-router-dom"
import logo from "../assets/logo.png"

const Navbar = () => {
  const { userProfile, processLogout, alreadyLoggedIn, setRegisterStage } =
    useContext(AuthApiData)
  const navigate = useNavigate()

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    if (!alreadyLoggedIn) {
      navigate("/")
    }
  }, [alreadyLoggedIn, navigate])

  const handleLogout = () => {
    processLogout()
  }

  const handleSignIn = () => {
    setRegisterStage(2)
  }

  const handleSignUp = () => {
    setRegisterStage(3)
  }

  return (
    <div className="flex justify-between items-center bg-blue-900 text-white p-4">
      <div className="flex items-center">
        <img src={logo} alt="site-logo" className="w-12 h-12 mr-2" />
        <span className="text-xl font-bold">
          {!alreadyLoggedIn ? (
            <Link to="/">Nunya Exams</Link>
          ) : userProfile &&
            (userProfile.username ||
              (userProfile.data && userProfile.data.username)) ? (
            `Welcome ${userProfile.username || userProfile.data.username}`
          ) : (
            <Link to="/">Nunya Exams</Link>
          )}
        </span>
      </div>

      <div className="hidden md:flex items-center">
        <Link to="/about" className="text-white hover:text-gray-400 mr-4">
          About
        </Link>
        <Link to="/team" className="text-white hover:text-gray-400 mr-4">
          Team
        </Link>
        <Link
          to="/termsAndCondition"
          className="text-white hover:text-gray-400 mr-4"
        >
          T&C
        </Link>
        <Link to="/contact" className="text-white hover:text-gray-400 mr-4">
          Contact
        </Link>
        <Link to="/testimonial" className="text-white hover:text-gray-400 mr-4">
          Testimonial
        </Link>

        {alreadyLoggedIn &&
        userProfile &&
        (userProfile.username ||
          (userProfile.data && userProfile.data.username)) ? (
          <button
            className="text-white hover:text-gray-400"
            onClick={handleLogout}
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

      <div className="md:hidden">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-white focus:outline-none"
        >
          ☰
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="absolute top-0 left-0 w-1/2 h-full bg-blue-900 text-white z-50">
          <div className="flex flex-col items-start p-4">
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="self-end text-xl"
            >
              ✖
            </button>
            <Link
              to="/"
              className="text-white hover:text-gray-400 mt-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-white hover:text-gray-400 mt-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/team"
              className="text-white hover:text-gray-400 mt-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Team
            </Link>
            <Link
              to="/termsAndCondition"
              className="text-white hover:text-gray-400 mt-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              T&C
            </Link>
            <Link
              to="/contact"
              className="text-white hover:text-gray-400 mt-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              to="/testimonial"
              className="text-white hover:text-gray-400 mt-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Testimonial
            </Link>

            {alreadyLoggedIn &&
            userProfile &&
            (userProfile.username ||
              (userProfile.data && userProfile.data.username)) ? (
              <button
                className="text-white hover:text-gray-400 mt-4"
                onClick={() => {
                  handleLogout()
                  setIsMobileMenuOpen(false)
                }}
              >
                Logout
              </button>
            ) : (
              <>
                <span
                  className="text-white hover:text-gray-400 mt-4 rounded-xl border-2 border-white hover:border-gray-400 px-4 py-2 cursor-pointer"
                  onClick={() => {
                    handleSignIn()
                    setIsMobileMenuOpen(false)
                  }}
                >
                  SignIn
                </span>

                <span
                  className="text-white hover:text-gray-400 mt-4 rounded-xl border-2 border-white px-4 py-2 hover:border-gray-400 cursor-pointer"
                  onClick={() => {
                    handleSignUp()
                    setIsMobileMenuOpen(false)
                  }}
                >
                  SignUp
                </span>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default Navbar
