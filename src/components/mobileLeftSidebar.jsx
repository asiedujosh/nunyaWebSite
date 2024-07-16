import React, { useState } from "react"
import { Link } from "react-router-dom"

const MobileLeftSidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <div className="w-full md:hidden">
      <button
        className="w-full py-4 px-4 bg-blue-500 text-white hover:bg-blue-600 cursor-pointer"
        onClick={toggleSidebar}
      >
        {isExpanded ? "Collapse Menu" : "Expand Menu"}
      </button>
      {isExpanded && (
        <ul className="grid grid-cols-1 gap-1">
          <Link
            to="/dashboard"
            className="block py-4 px-4 hover:bg-gray-200 cursor-pointer border-b border-gray-300 truncate"
            onClick={() => setIsExpanded(false)}
          >
            Dashboard
          </Link>
          <Link
            to="/dashboard/quizInfo"
            className="block py-4 px-4 hover:bg-gray-200 cursor-pointer border-b border-gray-300 truncate"
            onClick={() => setIsExpanded(false)}
          >
            Quiz
          </Link>
          <Link
            to="/dashboard/oralQuizInfo"
            className="block py-4 px-4 hover:bg-gray-200 cursor-pointer border-b border-gray-300 truncate"
            onClick={() => setIsExpanded(false)}
          >
            Oral Quiz
          </Link>
          <Link
            to="/dashboard/records"
            className="block py-4 px-4 hover:bg-gray-200 cursor-pointer border-b border-gray-300 truncate"
            onClick={() => setIsExpanded(false)}
          >
            Records
          </Link>
          <Link
            to="/dashboard/oralRecords"
            className="block py-4 px-4 hover:bg-gray-200 cursor-pointer border-b border-gray-300 truncate"
            onClick={() => setIsExpanded(false)}
          >
            Oral Records
          </Link>
          <Link
            to="/dashboard/analysis"
            className="block py-4 px-4 hover:bg-gray-200 cursor-pointer border-b border-gray-300 truncate"
            onClick={() => setIsExpanded(false)}
          >
            Analysis
          </Link>
          <Link
            to="/dashboard/oralAnalysis"
            className="block py-4 px-4 hover:bg-gray-200 cursor-pointer border-b border-gray-300 truncate"
            onClick={() => setIsExpanded(false)}
          >
            Oral Analysis
          </Link>
          <Link
            to="/dashboard/store"
            className="block py-4 px-4 hover:bg-gray-200 cursor-pointer border-b border-gray-300 truncate"
            onClick={() => setIsExpanded(false)}
          >
            Store
          </Link>
          <Link
            to="/dashboard/settings"
            className="block py-4 px-4 hover:bg-gray-200 cursor-pointer border-b border-gray-300 truncate"
            onClick={() => setIsExpanded(false)}
          >
            Settings
          </Link>
          <Link
            to="/dashboard/faqs"
            className="block py-4 px-4 hover:bg-gray-200 cursor-pointer border-b border-gray-300 truncate"
            onClick={() => setIsExpanded(false)}
          >
            Faqs
          </Link>
        </ul>
      )}
    </div>
  )
}

export default MobileLeftSidebar
