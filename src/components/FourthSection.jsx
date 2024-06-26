import React from "react"
import AboutCard from "./Aboutcard"
import ImageOne from "../assets/image/studentOne.jpg"
import ImageTwo from "../assets/image/studentTwo.jpg"
// import ImageThree from "../assets/image/studentThree.png"
// import ImageFour from "../assets/image/studentFour.png"

const FourthSection = () => {
  return (
    <div className="container mx-auto py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Tests And More</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {/* Card 1 */}
        <AboutCard imageData={ImageOne} />
        {/* Card 2 */}
        <AboutCard imageData={ImageTwo} />
      </div>
    </div>
  )
}

export default FourthSection
