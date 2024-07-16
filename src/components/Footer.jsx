import React from "react"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 w-full">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <p className="text-sm mb-2 md:mb-0">
          &copy; 2024 Nunya Exams. All rights reserved.
        </p>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
          <Link to="/about" className="hover:text-gray-300">
            About Us
          </Link>
          <Link to="/contact" className="hover:text-gray-300">
            Contact
          </Link>
          <Link to="/termsAndCondition" className="hover:text-gray-300">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
