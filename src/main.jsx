import React from "react"
import ReactDOM from "react-dom/client"
import AuthApiDataProvider from "./contextApi/auth/authContextApi.jsx"
import PackageApiDataProvider from "./contextApi/package/packageContextApi.jsx"
import QuestionApiDataProvider from "./contextApi/question/questionContextApi.jsx"
import RecordApiDataProvider from "./contextApi/records/recordsContextApi.jsx"
import NewsApiDataProvider from "./contextApi/news/newsContextApi.jsx"
import StoreApiDataProvider from "./contextApi/store/storeContextApi.jsx"
import { MathJaxContext } from "better-react-mathjax"
import App from "./App.jsx"
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthApiDataProvider>
      <StoreApiDataProvider>
        <PackageApiDataProvider>
          <NewsApiDataProvider>
            <QuestionApiDataProvider>
              <RecordApiDataProvider>
                <MathJaxContext>
                  <App />
                </MathJaxContext>
              </RecordApiDataProvider>
            </QuestionApiDataProvider>
          </NewsApiDataProvider>
        </PackageApiDataProvider>
      </StoreApiDataProvider>
    </AuthApiDataProvider>
  </React.StrictMode>
)
