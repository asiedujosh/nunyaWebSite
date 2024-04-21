import React, { useContext, useEffect } from "react"
import { AuthApiData } from "../contextApi/auth/authContextApi"
import { Link, useNavigate } from "react-router-dom"
import capitalizeFirstLetter from "../utils/firstLetterCaps"

const Navbar = () => {
  const { userProfile, processLogout, alreadyLoggedIn } =
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

  return (
    <div className="flex justify-between items-center bg-blue-900 text-white p-4">
      <div className="flex items-center">
        <div className="mr-4">
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
        <div className="flex">
          <Link to="/about" className="text-gray-400  hover:text-white mr-4">
            About
          </Link>
          <Link to="/team" className="text-gray-400  hover:text-white mr-4">
            Team
          </Link>
          <Link
            to="/termsAndCondition"
            className="text-gray-400  hover:text-white mr-4"
          >
            T&C
          </Link>
          <Link to="/contact" className="text-gray-400  hover:text-white mr-4">
            Contact
          </Link>

          {alreadyLoggedIn &&
            userProfile &&
            (userProfile.username ||
              (userProfile.data && userProfile.data.username)) && (
              <button
                className="text-gray-400 hover:text-white"
                onClick={() => handleLogout()}
              >
                Logout
              </button>
            )}
        </div>
      </div>
    </div>
  )
}

export default Navbar
