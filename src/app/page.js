export default function Page() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-10">

      <header className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Mai Tran</h1>
        <p className="text-sm text-gray-500 mt-1">
          Tampa, FL | (901) 216-9028 | mtran32@usf.edu | linkedin.com/in/mai-tran-nguyen-thao-7ba7952b5
        </p>
        <p className="text-sm text-gray-700 mt-3">
          Motivated Business Analytics & Information Systems student at the University of South Florida
          with demonstrated proficiency in Microsoft Office 365, data analysis, systems design, Python
          programming, and database management. Experienced in translating complex data into actionable
          business insights through visualization and quantitative analysis. Eager to contribute
          analytical and technical skills to a data-driven organization.
        </p>
      </header>

      <section className="border-t border-gray-200 pt-6 mt-6">
        <h2 className="text-xl font-semibold text-gray-800 uppercase tracking-wide mb-3">Education</h2>
        <div>
          <div className="flex justify-between">
            <p className="font-semibold text-gray-900">University of South Florida (USF)</p>
            <p className="text-sm text-gray-500">Expected May 2027</p>
          </div>
          <p className="text-sm text-gray-700">Bachelor of Science in Business Analytics & Information Systems</p>
          <p className="text-sm text-gray-500">Muma College of Business | Junior Standing | Tampa, FL</p>
          <p className="text-sm font-semibold text-gray-700 mt-3 mb-1">Relevant Coursework</p>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
            <li>ISM 3011 – Systems Analysis & Design: SDLC, Use Cases, Data Flow Diagrams, feasibility analysis</li>
            <li>ISM 3232 – Business Application Development: Python, OOP, GUI design, AI-assisted coding</li>
            <li>CGS 2100 – Computer Applications for Business: Excel, Word, PowerPoint, Access, Biz Cafe simulation</li>
            <li>Business Analytics: Descriptive, diagnostic, predictive & prescriptive analytics; Tableau; dashboard design</li>
          </ul>
        </div>
      </section>

      <section className="border-t border-gray-200 pt-6 mt-6">
        <h2 className="text-xl font-semibold text-gray-800 uppercase tracking-wide mb-3">Skills</h2>
        <ul className="text-sm text-gray-700 space-y-2">
          <li><span className="font-semibold">Microsoft Office 365:</span> Excel (Pivot Tables, VLOOKUP, Solver, Macros, VBA, What-If Analysis, Conditional Formatting), Word, PowerPoint, Access</li>
          <li><span className="font-semibold">Data Analytics:</span> Descriptive, Diagnostic, Predictive & Prescriptive Analytics; Tableau; Power BI; SQL; Dashboard Design; Data Visualization</li>
          <li><span className="font-semibold">Programming:</span> Python; Object-Oriented Programming; GUI Development; AI-Assisted Development; IDE Proficiency</li>
          <li><span className="font-semibold">Information Systems:</span> SDLC; Systems Analysis & Design; Data Flow Diagrams; Use Case Modeling; Feasibility Analysis; Database Design</li>
          <li><span className="font-semibold">Business:</span> Business Planning; Break-Even Analysis; Marketing (4Ps); Inventory Management; Staffing Analysis; Report Writing</li>
          <li><span className="font-semibold">Soft Skills:</span> Critical Thinking; Team Collaboration; Written & Verbal Communication; Problem Solving; Attention to Detail</li>
        </ul>
      </section>

      <section className="border-t border-gray-200 pt-6 mt-6">
        <h2 className="text-xl font-semibold text-gray-800 uppercase tracking-wide mb-3">Projects</h2>
        <div className="space-y-4">

          <div>
            <p className="font-semibold text-gray-900">Biz Cafe Business Simulation <span className="font-normal text-gray-500">| CGS 2100</span></p>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 mt-1">
              <li>Directed all aspects of a simulated small business — staffing, pricing, operations, marketing, and financial tracking</li>
              <li>Developed an Excel data dashboard integrating charts, financial metrics, and What-If analysis to evaluate profitability</li>
              <li>Produced a written business report interpreting quantitative evidence and recommending operational improvements</li>
              <li>Collaborated within a project team to divide responsibilities, meet deadlines, and present data-supported strategies</li>
            </ul>
          </div>

          <div>
            <p className="font-semibold text-gray-900">Business Information System Design <span className="font-normal text-gray-500">| ISM 3011</span></p>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 mt-1">
              <li>Executed full systems analysis lifecycle from requirements gathering through implementation planning</li>
              <li>Produced Use Case diagrams, Data Flow Diagrams, and UI prototypes to document system design</li>
              <li>Delivered feasibility report assessing technical, economic, and organizational viability of proposed solution</li>
            </ul>
          </div>

          <div>
            <p className="font-semibold text-gray-900">Business Application Development <span className="font-normal text-gray-500">| ISM 3232</span></p>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 mt-1">
              <li>Engineered a Python business application incorporating OOP principles, exception handling, GUI, and file processing</li>
              <li>Applied structured software development methodology from design through deployment; utilized AI tools to accelerate development</li>
            </ul>
          </div>

          <div>
            <p className="font-semibold text-gray-900">Data-Driven Business Decision Analysis <span className="font-normal text-gray-500">| Business Analytics</span></p>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 mt-1">
              <li>Executed multi-method analytics on business datasets; produced prescriptive models for optimal business recommendations</li>
              <li>Designed interactive dashboards with storytelling-driven visualizations to communicate insights to non-technical stakeholders</li>
            </ul>
          </div>

        </div>
      </section>

      <section className="border-t border-gray-200 pt-6 mt-6">
        <h2 className="text-xl font-semibold text-gray-800 uppercase tracking-wide mb-3">Interests</h2>
        <p className="text-sm text-gray-700">
          Business Intelligence | Data Visualization | Process Automation | Enterprise Technology | Financial Analytics | UX & Interface Design | Emerging AI Tools in Business
        </p>
      </section>

      <footer className="border-t border-gray-200 pt-6 mt-6 text-center text-xs text-gray-400">
        <p>Mai Tran — mtran32@usf.edu</p>
      </footer>

    </main>
  );
}