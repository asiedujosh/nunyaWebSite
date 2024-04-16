import HeroAboutBanner from "../components/heroAboutBanner"

const About = () => {
  return (
    <>
      <HeroAboutBanner title="About" />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">About Nunya Exams</h1>
        <p className="text-lg mb-6">
          Our vision as an online exam app is to create a seamless and
          user-friendly platform that facilitates efficient and secured online
          exams. The app will be designed to meet the needs of both students and
          educators, and will incorporate the latest technology to ensure that
          the online exam experience is engaging, effective and fair.
        </p>
        <h2 className="text-2xl font-bold mb-4">Key Features</h2>
        <ul className="list-disc pl-6 mb-6">
          <li>
            Secure authentication and identity verification - The app will
            incorporate robust security features to ensure that students and/or
            educators are accurately authenticated and verified before taking
            the exam. This will include features such as facial recognition,
            two-factor authentication and biometric verification.
          </li>
          <li>
            Customizable exam creation and management - The app will provide
            educators with the ability to create and manage exams with ease.
            This will include features such as question banks, curated exam
            templates, and the ability to set specific exam parameters such as
            time limits and access controls.
          </li>
          <li>
            Automated grading and reporting - The app will incorporate
            intelligent algorithms to automatically grade exams and generate
            detailed reports. This will save educators time and provide them
            with actionable insights into student performance.
          </li>
          <li>
            Interactive exam experience - The app will provide students with a
            rich and interactive exam experience that is engaging and intuitive.
            This will include features such as interactive questions, multimedia
            content, and the ability to ask questions and receive feedback in
            real-time.
          </li>
          <li>
            Seamless integration with learning management systems - The app will
            seamlessly integrate with popular learning management systems (LMS),
            making it easy for educators to manage exams and for students to
            access their results and feedback.
          </li>
        </ul>
        <p className="text-lg mb-6">
          Our goal is to create an online exam app that is reliable, secure and
          effective, and that meets the needs of both educators and students. By
          leveraging the latest technology and incorporating innovative
          features, we believe that our app (Nunya Exams) will transform the
          online exam experience and provide educators with a powerful tool to
          enhance student learning and performance.
        </p>
      </div>
    </>
  )
}

export default About
