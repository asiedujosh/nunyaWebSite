import HeroAboutBanner from "../components/heroAboutBanner"

const Contact = () => {
  return (
    <>
      <HeroAboutBanner title="Contact" />
      <div className="bg-gray-100 min-h-screen">
        <div className="container mx-auto py-16 px-4 md:px-0">
          <div className="max-w-lg mx-auto">
            <h2 className="text-2xl font-semibold mb-4">
              Nunya Contact Information:
            </h2>
            <p className="mb-4">Email: nunyaexams@gmail.com</p>
            <p className="mb-8">Address: Airport Area Accra</p>

            <h2 className="text-2xl font-semibold mb-4">
              Assistance and Support:
            </h2>
            <p className="mb-4">Phone Number: +233 200 588 522</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
