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
          <div className="max-w-md">
            <h2 className="text-3xl mb-4">{title}</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroAboutBanner
