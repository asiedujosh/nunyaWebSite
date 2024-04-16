import React from "react"

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 bottom-0 w-full">
      <div className="container mx-auto flex justify-between items-center">
        <p className="text-sm">&copy; 2024 Nunya Exams. All rights reserved.</p>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-gray-300">
            About Us
          </a>
          <a href="#" className="hover:text-gray-300">
            Contact
          </a>
          <a href="#" className="hover:text-gray-300">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
