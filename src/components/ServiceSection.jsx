import {
  UserGroupIcon,
  AcademicCapIcon,
  BriefcaseIcon,
  UserIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/solid"

const ServiceSection = () => {
  return (
    <section className="bg-gray-900 text-white py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Trusted by</h2>
        <div className="flex justify-between">
          <div className="flex flex-col items-center">
            <AcademicCapIcon className="w-24 h-24 mb-2" />
            <p className="text-3xl font-bold mb-2">500+</p>
            <p className="text-lg">Schools</p>
          </div>
          <div className="h-16 border-l border-r border-white"></div>
          <div className="flex flex-col items-center">
            <UserGroupIcon className="w-24 h-24 mb-2" />
            <p className="text-3xl font-bold mb-2">1000+</p>
            <p className="text-lg">Students</p>
          </div>
          <div className="h-16 border-l border-r border-white"></div>
          <div className="flex flex-col items-center">
            <BriefcaseIcon className="w-24 h-24 mb-2" />
            <p className="text-3xl font-bold mb-2">20+</p>
            <p className="text-lg">Exam Council</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServiceSection
