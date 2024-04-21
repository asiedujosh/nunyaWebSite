import HeroAboutBanner from "../components/heroAboutBanner"

const TermsAndCondition = () => {
  return (
    <>
      <HeroAboutBanner title="Terms & Condition" />
      <div className="bg-gray-100 min-h-screen">
        <div className="container mx-auto py-16 px-4 md:px-0">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold mb-4">
              Information We Collect:
            </h2>
            <ul className="list-disc pl-6 mb-6">
              <li>Name</li>
              <li>Email address</li>
              <li>Student ID number</li>
              <li>IP address</li>
              <li>Device information</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">
              Purpose of Collecting Information:
            </h2>
            <ul className="list-disc pl-6 mb-6">
              <li>Verify the identity of the student</li>
              <li>Ensure the security of the exam</li>
              <li>Monitor for academic integrity</li>
              <li>Allow students to have easy access to past exam questions</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">Use of Information:</h2>
            <ul className="list-disc pl-6 mb-6">
              <li>Administering the exam</li>
              <li>Identifying the student</li>
              <li>Ensuring the security of the exam</li>
              <li>Analyzing exam results</li>
              <li>Monitoring for academic integrity</li>
              <li>
                Collecting feedback for continuous improvements on our platform
              </li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">
              Protection of Information:
            </h2>
            <p className="mb-6">
              At Nunya Exams, we take appropriate measures to protect personal
              information collected during online exams, including but not
              limited to:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Using secure servers to store information</li>
              <li>Restricting access to personal information</li>
              <li>Using encryption to protect information</li>
              <li>Regularly updating security measures</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">
              Disclosure of Information:
            </h2>
            <p className="mb-6">
              We do not disclose personal information collected during online
              exams to third parties, except in the following circumstances:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>When required by law</li>
              <li>When necessary to protect the security of the exam</li>
              <li>
                When necessary to protect the academic integrity of the exam
              </li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">
              Retention of Information:
            </h2>
            <p className="mb-6">
              Personal information collected during online exams is retained for
              a period of 12 months to administer the exam and analyze the
              results. After this time, we securely delete or destroy the
              information.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Updates to Policy:</h2>
            <p className="mb-6">
              We may update this privacy policy from time to time. We will
              notify students of any changes to this policy by email or by
              posting a notice on the exam platform.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Contact:</h2>
            <p className="mb-6">
              Should you have any questions or concerns about this privacy
              policy or the use of your personal information during online
              exams, please contact us at{" "}
              <a href="mailto:nunyaexam@gmail.com" className="text-blue-500">
                nunyaexam@gmail.com
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default TermsAndCondition
