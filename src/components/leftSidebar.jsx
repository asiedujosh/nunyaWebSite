import { Link } from "react-router-dom"

const LeftSidebar = () => {
  return (
    <div className="hidden md:block bg-gray-100 lg:w-1/6">
      <ul>
        <Link
          to="/dashboard"
          className="block py-4 px-4 hover:bg-gray-200 cursor-pointer border-b border-gray-300"
        >
          Dashboard
        </Link>
        <Link
          to="/dashboard/quizInfo"
          className="block py-4 px-4 hover:bg-gray-200 cursor-pointer border-b border-gray-300"
        >
          Quiz
        </Link>
        <Link
          to="/dashboard/oralQuizInfo"
          className="block py-4 px-4 hover:bg-gray-200 cursor-pointer border-b border-gray-300"
        >
          Oral Quiz
        </Link>
        <Link
          to="/dashboard/records"
          className="block py-4 px-4 hover:bg-gray-200 cursor-pointer border-b border-gray-300"
        >
          Records
        </Link>
        <Link
          to="/dashboard/records"
          className="block py-4 px-4 hover:bg-gray-200 cursor-pointer border-b border-gray-300"
        >
          Oral Records
        </Link>
        <Link
          to="/dashboard/analysis"
          className="block py-4 px-4 hover:bg-gray-200 cursor-pointer border-b border-gray-300"
        >
          Analysis
        </Link>
        <Link
          to="/dashboard/oralAnalysis"
          className="block py-4 px-4 hover:bg-gray-200 cursor-pointer border-b border-gray-300"
        >
          Oral Analysis
        </Link>
        <Link
          to="/dashboard/store"
          className="block py-4 px-4 hover:bg-gray-200 cursor-pointer border-b border-gray-300"
        >
          Store
        </Link>
        <Link
          to="/dashboard/settings"
          className="block py-4 px-4 hover:bg-gray-200 cursor-pointer border-b border-gray-300"
        >
          Settings
        </Link>
        <Link
          to="/dashboard/faqs"
          className="block py-4 px-4 hover:bg-gray-200 cursor-pointer border-b border-gray-300"
        >
          Faqs
        </Link>
      </ul>
    </div>
  )
}

export default LeftSidebar
