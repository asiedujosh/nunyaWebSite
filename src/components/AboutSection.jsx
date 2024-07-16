import React, { useContext, useEffect } from "react"
import { SystemInfoApiData } from "../contextApi/systemInfo/systemInfoContextApi"
import AboutCard from "./Aboutcard"
import ImageOne from "../assets/image/exam1.jpg"
import ImageTwo from "../assets/image/exam2.jpg"
import ImageThree from "../assets/image/exam3.jpg"
import ImageFour from "../assets/image/exam4.jpg"

const AboutSection = () => {
  const { processGetProduct, productList } = useContext(SystemInfoApiData)

  useEffect(() => {
    processGetProduct()
  }, [])

  return (
    <div className="container mx-auto py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Our Various Exams</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Card 1 */}
        {productList.map((item) => (
          <AboutCard
            imageData={item.productImage}
            title={item.title}
            content={item.description}
          />
        ))}
        {/* <AboutCard
          imageData={ImageOne}
          title="Cambridge O-Level Exams"
          content="The Cambridge O-Level exam, now known as Cambridge IGCSE (International General Certificate of Secondary Education), is an internationally recognized qualification taken by students usually at the end of their secondary education. It covers a wide range of subjects and is administered by Cambridge Assessment International Education, a part of the University of Cambridge."
        /> */}
        {/* Card 2 */}
        {/* <AboutCard
          imageData={ImageTwo}
          title="Cambridge A-Level Exams"
          content="Cambridge A-Level exams, also known as Cambridge International A Levels, are advanced level qualifications typically taken by students after completing their secondary education. They are recognized worldwide and are administered by Cambridge Assessment International Education, a part of the University of Cambridge. A-Levels offer a more in-depth study of subjects compared to O-Levels or IGCSEs and are often a requirement for admission to universities in many countries."
        /> */}
        {/* Card 3 */}
        {/* <AboutCard
          imageData={ImageThree}
          title="Checkpoint Exams"
          content="Checkpoint exams are assessments conducted by the Cambridge Assessment International Education for students typically in the middle of secondary education, around the age of 14. These exams are part of the Cambridge Lower Secondary program and are taken in subjects like English, mathematics, and science. They serve as a checkpoint to assess students’ progress and readiness for the next stage of their education."
        /> */}
        {/* Card 4 */}
        {/* <AboutCard
          imageData={ImageFour}
          title="West African Examinations Council Certificate Examination"
          content="The West African Examinations Council Senior Secondary Certificate Examination. It is a standardized test taken by students in their final year of senior secondary school education in West African countries such as Nigeria, Ghana, Sierra Leone, Liberia, and The Gambia. The exam typically covers a wide range of subjects and is an important requirement for students seeking admission into tertiary institutions or pursuing other career paths."
        /> */}
      </div>
    </div>
  )
}

export default AboutSection
