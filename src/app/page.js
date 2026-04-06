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

    </main>
  );
}