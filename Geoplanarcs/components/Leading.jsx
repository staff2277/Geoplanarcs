const Leading = () => {
  return (
    <div className="flex max-md:flex-col items-center my-[5rem] justify-center lg:px-[10%] max-md:px-[5%] py-[2rem] gap-10 bg-green-100">
      <div className="">
        <h1 className="text-green-500 xl:text-[2.8rem] lg:text-[2.4rem] sm:text-[2rem] max-sm:text-[1.5rem] font-semibold">
          Leading Brand
        </h1>
        <p>
          Geoplanarcs is a leading architecture and real estate development firm
          based in Hohoe, Ghana. We specialize in offering comprehensive
          services for overseas clients, including planning, drawings, land
          sales, legal consultancy, and construction.
        </p>
      </div>
      <div className="flex justify-center">
        <img className="rounded-2xl " src="/bg3.jpg" alt="" />
      </div>
    </div>
  );
};

export default Leading;
