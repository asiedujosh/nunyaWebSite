import HeroAboutBanner from "../components/heroAboutBanner"
import ServiceSection from "../components/ServiceSection"

const About = () => {
  return (
    <>
      <HeroAboutBanner title="About" />

      <div className="container mx-auto py-16 px-4 md:px-0">
        <div className="flex flex-col">
          <div>
            <p className="text-lg mb-8">
              Nunya Exams is a leading provider of online exam preparation
              resources, helping students worldwide prepare for a variety of
              academic and professional exams. Our mission is to empower
              learners to achieve their goals and unlock their full potential by
              providing high-quality, comprehensive study materials and
              personalized support.
            </p>
            <p className="text-lg mb-8">
              Since our founding in 2023, we have helped thousands of students
              succeed in their exams and reach their academic and career goals.
              Our team of experienced educators and exam experts are dedicated
              to creating engaging, effective study materials that cater to a
              variety of learning styles and preferences.
            </p>

            <p className="text-lg mb-8">
              We offer a wide range of exam prep resources, including practice
              tests, study guides, video lessons, and interactive quizzes. Our
              materials cover a diversity of subjects and exams, including
              standardized tests such as Cambridge IGCSE, Cambridge O Level,
              Cambridge International AS & A Levels, BECE, and WASSCE, as well
              as other professional exams.
            </p>
            <p className="text-lg mb-8">
              At Nunya Exams, we believe that exam preparation should be
              accessible and affordable for all students. That is why we offer
              flexible pricing options and free resources, such as study tips
              and test-taking strategies, to help students make the most of
              their study time.
            </p>
            <p className="text-lg mb-8">
              Whether you're a high school student preparing for your college
              entrance exams or a working professional looking to advance your
              career, Nunya Exams has the resources and support you need to
              succeed. Thank you for choosing us as your exam preparation
              partner, and we look forward to having you on board.
            </p>
          </div>
        </div>
      </div>
      <ServiceSection />
    </>
  )
}

export default About
