const OurServices = () => {
  return (
    <div className="py-[5rem] gap-5 grid md:grid-cols-3 md:mt-[20px]">
      <div className="">
        <div className="flex items-center gap-4">
          <span>
            <img className="w-[50px]" src="/planing.svg" alt="planing logo" />
          </span>
          <h3 className="font-semibold text-[1.2rem]">Planning & Design</h3>
        </div>
        <p className="mt-2">
          We take charge of every aspect of the project, providing efficient
          management to ensure timely delivery, cost-effectiveness, and seamless
          coordination between all stakeholders.
        </p>
      </div>
      <div>
        <div className="flex items-center gap-4">
          <span>
            <img className="w-[50px]" src="/sale.svg" alt="sale logo" />
          </span>
          <h3 className="font-semibold text-[1.2rem]">Land Sales</h3>
        </div>
        <p className="mt-2">
          We facilitate the acquisition of prime land for your projects,
          offering valuable insights and guidance to secure the ideal locations
          for your developments.
        </p>
      </div>
      <div>
        <div className="flex items-center gap-4">
          <span>
            <img className="w-[50px]" src="/consult.svg" alt="cunsult logo" />
          </span>
          <h3 className="font-semibold text-[1.2rem]">Legal Consultancy</h3>
        </div>
        <p className="mt-2">
          Navigating complex legal requirements is simplified with our
          consultancy services, ensuring compliance and mitigating risks
          throughout the project lifecycle.
        </p>
      </div>
    </div>
  );
};

export default OurServices;
