import React from "react"
import ReactDOM from "react-dom/client"
import SystemInfoApiDataProvider from "./contextApi/systemInfo/systemInfoContextApi.jsx"
import AuthApiDataProvider from "./contextApi/auth/authContextApi.jsx"
import PriceApiDataProvider from "./contextApi/price/priceContextApi"
import ExamSubjectApiDataProvider from "./contextApi/examSubjectRelation/examSubjectRelationContextApi"
import SubscriptionApiDataProvider from "./contextApi/subscription/subscriptionContextApi"
import PriviledgeApiDataProvider from "./contextApi/priviledge/priviledgeContextApi"
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
    <SystemInfoApiDataProvider>
      <AuthApiDataProvider>
        <SubscriptionApiDataProvider>
          <PriviledgeApiDataProvider>
            <PriceApiDataProvider>
              <ExamSubjectApiDataProvider>
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
              </ExamSubjectApiDataProvider>
            </PriceApiDataProvider>
          </PriviledgeApiDataProvider>
        </SubscriptionApiDataProvider>
      </AuthApiDataProvider>
    </SystemInfoApiDataProvider>
  </React.StrictMode>
)
