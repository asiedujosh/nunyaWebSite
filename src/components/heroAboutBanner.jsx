import backgroundImage from "../assets/image/heroImage.jpg"

const HeroAboutBanner = ({ title }) => {
  return (
    <div
      className="relative bg-cover bg-center items-center"
      style={{ backgroundImage: `url(${backgroundImage})`, height: "20vh" }}
    >
      {/* Background Image */}
      <div className="md:absolute inset-0 bg-black opacity-50 z-10"></div>
      <div className="md:absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent z-20"></div>
      <div className="md:flex w-full">
        <div className="container mx-auto z-30">
          <div className="flex w-full justify-center items-center">
            <h2 className="text-5xl text-white font-bold mb-4 my-14">
              {title}
            </h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroAboutBanner
