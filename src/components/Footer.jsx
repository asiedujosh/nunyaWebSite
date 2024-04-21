import React from "react"
import { Link, useNavigate } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 bottom-0 w-full">
      <div className="container mx-auto flex justify-between items-center">
        <p className="text-sm">&copy; 2024 Nunya Exams. All rights reserved.</p>
        <div className="flex space-x-4">
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
