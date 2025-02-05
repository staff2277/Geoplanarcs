import Footer from "../components/Footer";
const Services = () => {
  return (
    <div className="border-2">
      <div
        className="h-[50vh] flex items-center border-2 lg:pl-[15%] sm:pl-[5%] max-sm:pl-[2%]"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7)), url(/p2.jpg)",
          backgroundPosition: "center",
        }}
      >
        <h1 className="flex items-center text-white h-full py-[3rem] xl:text-[3.5rem] lg:text-[3rem] sm:text-[2rem] max-sm:text-[1.5rem] font-semibold">
          Our Services
        </h1>
      </div>
      <div className="lg:px-[15%] sm:px-[5%] max-sm:px-[2%]">
        <div className="mt-[5rem]">
          <h1 className="text-green-500 xl:text-[2.5rem]  sm:text-[2rem] max-sm:text-[1.5rem] font-semibold">
            Architectural Design & Drafting
          </h1>
          <p>
            At Geoplanarcs, we believe in transforming spaces through innovative
            architectural design, thoughtful landscaping, bespoke interior
            solutions, and strategic land development. Whether you&apos;re
            building a new home, revitalizing an outdoor space, or making a
            smart real estate investment, our expertise ensures that your vision
            is brought to life with precision and creativity.
          </p>
        </div>
        <div>
          <h1 className="text-green-500 italic text-[1.5rem] font-bold">
            2D & 3D Architectural Drawings
          </h1>
          <p>
            Our architects use advanced design software such as AutoCAD, Revit,
            and SketchUp to create highly detailed architectural drawings. These
            include floor plans, elevations, sectional drawings, and 3D renders
            that provide a clear representation of the final design.
          </p>
        </div>
        <div>
          <h1 className="text-green-500 italic text-[1.5rem] font-bold">
            Construction Documentation & Permit Approvals
          </h1>
          <p>
            A well-documented plan is crucial for smooth execution. We prepare
            comprehensive construction documentation that includes technical
            drawings, material specifications, and compliance reports.
            Additionally, we assist in securing building permits and approvals,
            ensuring all designs meet local building codes and safety standards.
          </p>
        </div>
        <div>
          <div className="mt-[5rem]">
            <div>
              <h1 className="text-green-500 xl:text-[2.5rem] sm:text-[2rem] max-sm:text-[1.5rem] font-semibold">
                Landscaping & Outdoor Design
              </h1>
              <p>
                Outdoor spaces are as important as interiors, contributing to
                the overall beauty and functionality of a property. Our
                landscaping solutions range from elegant garden designs to
                large-scale commercial and urban green spaces.
              </p>
            </div>
            <div>
              <h1 className="text-green-500 italic text-[1.5rem] font-bold">
                Garden & Hardscape Design
              </h1>
              <p>
                Whether you desire a tranquil backyard garden, a contemporary
                rooftop oasis, or a corporate landscape, we provide tailored
                garden design solutions. Our expertise includes water features,
                walkways, patios, retaining walls, and outdoor seating areas,
                crafted to enhance your environment.
              </p>
            </div>
            <div>
              <h1 className="text-green-500 italic text-[1.5rem] font-bold">
                Sustainable Landscaping & Eco-Friendly Solutions
              </h1>
              <p>
                At Geoplanarcs, we prioritize sustainable landscaping by
                integrating rainwater harvesting systems, drought-resistant
                plants, and environmentally friendly irrigation techniques. Our
                designs not only enhance the aesthetics but also reduce water
                consumption and support biodiversity.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="my-[5rem]">
            <h1 className="text-green-500 xl:text-[2.5rem]  sm:text-[2rem] max-sm:text-[1.5rem] font-semibold">
              Interior Design & Space Planning
            </h1>
            <p>
              A well-designed interior elevates the functionality and appeal of
              any space. Our interior design services are tailored to create
              spaces that reflect our clients’ personality, lifestyle, and
              business identity.
            </p>
          </div>
        </div>
        <div>
          <div>
            <h1 className="text-green-500 xl:text-[2.5rem] sm:text-[2rem] max-sm:text-[1.5rem] font-semibold">
              Land Sales & Development Advisory
            </h1>
            <p>
              Investing in land requires careful planning and strategic
              decision-making. At Geoplanarcs, we provide expert guidance on
              land acquisition, real estate development, and regulatory
              compliance, helping clients maximize their investments.
            </p>
          </div>
          <div>
            <h1 className="text-green-500 italic text-[1.5rem] font-bold">
              Land Acquisition & Feasibility Studies
            </h1>
            <span>
              We assist clients in identifying high-potential land opportunities
              based on market trends, zoning laws, and environmental factors.
              Our feasibility studies include:
              <ol className="list-disc pl-7">
                <li>Soil analysis and topographic surveys</li>
                <li>Infrastructure and accessibility assessments</li>
                <li>Market demand analysis for real estate development</li>
              </ol>
            </span>
          </div>
          <div>
            <h1 className="text-green-500 italic text-[1.5rem] font-bold">
              Real Estate Investment Consultation
            </h1>
            <p>
              For those looking to buy, sell, or develop land, our team provides
              customized investment strategies to ensure profitability. We
              evaluate factors such as land appreciation rates, development
              potential, and legal frameworks to guide clients toward informed
              decisions.
            </p>
          </div>
          <div>
            <h1 className="text-green-500 italic text-[1.5rem] font-bold">
              Legal & Regulatory Compliance
            </h1>
            <p>
              Navigating the legal aspects of land transactions can be complex.
              Our team works with legal experts and local authorities to ensure
              that all documentation, zoning regulations, and title deeds are in
              order, safeguarding our clients from future disputes.
            </p>
          </div>
        </div>
        <div>
          <div>
            <h1 className="text-green-500 xl:text-[2.5rem] sm:text-[2rem] max-sm:text-[1.5rem] font-semibold">
              Land Surveying & Mapping
            </h1>
            <p>
              Accurate land measurements are critical for any construction, real
              estate, or land development project. At Geoplanarcs, we offer
              comprehensive land surveying and mapping services to provide
              precise data for informed decision-making.
            </p>
          </div>
          <div>
            <h1 className="text-green-500 italic text-[1.5rem] font-bold">
              Topographic & Boundary Surveys
            </h1>
            <p>
              Our topographic surveys help clients understand the elevation,
              contours, and features of their land, while boundary surveys
              establish clear property lines to prevent disputes and legal
              issues.
            </p>
          </div>
          <div>
            <h1 className="text-green-500 italic text-[1.5rem] font-bold">
              Construction & Engineering Surveys
            </h1>
            <p>
              We provide site preparation surveys, staking, and layout surveys
              to ensure accurate positioning of buildings, roads, and
              infrastructure.
            </p>
          </div>
          <div>
            <h1 className="text-green-500 italic text-[1.5rem] font-bold">
              GIS & Remote Sensing Services
            </h1>
            <p>
              Using Geographic Information Systems (GIS) and drone technology,
              we conduct aerial mapping, land use analysis, and geospatial data
              collection for large-scale projects.
            </p>
          </div>
        </div>
        <div className="mt-[5rem] mb-[8rem]">
          <h1 className="text-green-500 mb-[1rem] xl:text-[2.5rem] sm:text-[2rem] max-sm:text-[1.5rem] font-semibold">
            Our Process: From Concept to Completion
          </h1>
          <span>
            <ul className="list-decimal">
              <li>
                <b className="text-green-500 italic">
                  Consultation & Project Briefing –
                </b>{" "}
                We discuss the client&apos;s vision, requirements, and budget.
              </li>
              <li>
                <b className="text-green-500 italic">
                  Site Analysis & Feasibility Study –
                </b>{" "}
                We conduct thorough site inspections and planning assessments.
              </li>
              <li>
                <b className="text-green-500 italic">Design Development –</b>{" "}
                Our team creates architectural drawings, 3D visualizations, and
                technical documents.
              </li>
              <li>
                <b className="text-green-500 italic">
                  Regulatory Compliance & Permits –{" "}
                </b>
                We ensure all approvals and legal requirements are met.
              </li>
              <li>
                <b className="text-green-500 italic">
                  Execution & Project Management –
                </b>{" "}
                We oversee construction, design implementation, and land
                surveying.
              </li>
              <li>
                <b className="text-green-500 italic">
                  Final Review & Handover –
                </b>{" "}
                We deliver a well-executed, high-quality project that exceeds
                expectations.
              </li>
            </ul>
          </span>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Services;
