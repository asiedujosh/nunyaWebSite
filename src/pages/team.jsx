import HeroAboutBanner from "../components/heroAboutBanner"

const Team = () => {
  return (
    <>
      <HeroAboutBanner title="Team" />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Our Team</h1>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Executive Team</h2>
          <ul className="list-disc pl-6">
            <li>
              CEO: Oversees the overall strategy, vision, and direction of the
              company.
            </li>
            <li>
              CTO: Leads the technical development and manages the technical
              team responsible for designing and maintaining the app.
            </li>
            <li>
              CFO: Manages the company's finances and accounting functions.
            </li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Technical Team</h2>
          <ul className="list-disc pl-6">
            <li>
              Development team: Responsible for the design and development of
              the app.
            </li>
            <li>
              Quality Assurance team: Responsible for testing and ensuring that
              the app functions as intended.
            </li>
            <li>
              Database team: Responsible for the design and maintenance of the
              database that stores exam information and student data.
            </li>
            <li>
              IT team: Responsible for managing the company's network
              infrastructure, security, and technical support.
            </li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Sales and Marketing Team</h2>
          <ul className="list-disc pl-6">
            <li>
              Sales team: Responsible for selling the app to educational
              institutions and other potential clients.
            </li>
            <li>
              Marketing team: Responsible for developing and executing marketing
              campaigns to promote the app and increase brand awareness.
            </li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Customer Support Team</h2>
          <ul className="list-disc pl-6">
            <li>
              Support team: Provides technical support to clients and assists
              with any issues that arise during the use of the app.
            </li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Administrative Team</h2>
          <ul className="list-disc pl-6">
            <li>
              Human Resources: Responsible for recruiting, hiring, and managing
              employees.
            </li>
            <li>
              Legal Team: Responsible for ensuring compliance with regulations
              and managing legal affairs.
            </li>
            <li>
              Operations Team: Responsible for managing the day-to-day
              operations of the company, including administrative functions such
              as billing, payroll, and procurement.
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Team
