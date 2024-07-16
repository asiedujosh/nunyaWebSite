import "./App.css"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom"
import Navbar from "./components/navbar"
import Footer from "./components/Footer"
import Home from "./pages/home"
import Dashboard from "./pages/dashboard"
import About from "./pages/about"
import Team from "./pages/team"
import QuestionsNotAvailable from "./pages/questionsNotAvailble"
import NotPurchased from "./pages/notPurchased"
import TermsAndCondition from "./pages/termsAndCondition"
import DashboardHome from "./pages/dashboardHome"
import Gameboard from "./pages/gameboard"
import Records from "./pages/records"
import RecordsView from "./pages/recordsView"
import QuizInfo from "./pages/quiz"
import Settings from "./pages/settings"
import Faqs from "./pages/faqs"
import Analysis from "./pages/analysis"
import OralAnalysis from "./pages/oralAnalysis"
import Cart from "./pages/cart"
import AnalysisDetail from "./pages/analysisDetails"
import Store from "./pages/store"
import Purchase from "./pages/purchase"
import GameResult from "./pages/gameResult"
import Review from "./pages/review"
import Free from "./pages/free"
import Contact from "./pages/contact"
import Testimonial from "./pages/testimonial"

function App() {
  return (
    <div className="overflow-hidden">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/termsAndCondition" element={<TermsAndCondition />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="/dashboard" element={<DashboardHome />} />
            <Route path="/dashboard/cart" element={<Cart />} />
            <Route path="/dashboard/gameboard" element={<Gameboard />} />
            <Route
              path="/dashboard/questionNotAvailable"
              element={<QuestionsNotAvailable />}
            />
            <Route path="/dashboard/gameResult" element={<GameResult />} />
            <Route path="/dashboard/quizInfo" element={<QuizInfo />} />
            <Route path="/dashboard/notPurchased" element={<NotPurchased />} />
            <Route path="/dashboard/records" element={<Records />} />
            <Route path="/dashboard/recordsreview" element={<RecordsView />} />
            <Route path="/dashboard/review" element={<Review />} />
            <Route path="/dashboard/analysis" element={<Analysis />} />
            <Route path="/dashboard/oralAnalysis" element={<OralAnalysis />} />
            <Route
              path="/dashboard/analysisDetail"
              element={<AnalysisDetail />}
            />
            <Route path="/dashboard/store" element={<Store />} />
            <Route path="/dashboard/purchase" element={<Purchase />} />
            <Route path="/dashboard/free" element={<Free />} />
            <Route path="/dashboard/settings" element={<Settings />} />
            <Route path="/dashboard/faqs" element={<Faqs />} />
          </Route>
        </Routes>

        <Footer />
      </Router>
    </div>
  )
}

export default App
