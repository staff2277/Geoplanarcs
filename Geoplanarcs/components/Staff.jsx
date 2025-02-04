const Staff = () => {
  return (
    <div>
      <div className="bg-green-100 py-[2rem] max-md:px-[5%] md:px-[1%] lg:px-[5%]">
        <div className="w-full mb-[2rem] flex justify-center text-green-500 xl:text-[2.8rem] lg:text-[2.4rem] sm:text-[2rem] max-sm:text-[1.5rem] font-semibold">
          Our Staff
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))]   place-items-center gap-10">
          <div className="border-2 border-green-200 rounded-4xl text-center w-fit  py-[3rem] px-[5rem]">
            <span>
              <img
                className="rounded-full w-[150px] "
                src="/ai15.jpg"
                alt="profile pic"
              />
            </span>
            <p className="py-2 font-bold text-green-500">
              Architecture Planner
            </p>
            <p>Faisal Osumanu</p>
          </div>
          <div className="border-2 border-green-200 rounded-4xl text-center w-fit  py-[3rem] px-[5rem]">
            <span>
              <img
                className="rounded-full w-[150px] "
                src="/ai15.jpg"
                alt="profile pic"
              />
            </span>
            <p className="py-2 font-bold text-green-500">Surveyor</p>
            <p>Rashid Osumanu</p>
          </div>
          <div className="border-2 border-green-200 rounded-4xl text-center w-fit  py-[3rem] px-[5rem]">
            <span className="flex justify-center">
              <img
                className="rounded-full w-[150px] "
                src="/ai15.jpg"
                alt="profile pic"
              />
            </span>
            <p className="py-2 font-bold text-green-500">
              Website Developer & IT Support
            </p>
            <p>Mustapha Osman</p>
          </div>
          <div className="border-2 border-green-200 rounded-4xl text-center w-fit  py-[3rem] px-[5rem]">
            <span>
              <img
                className="rounded-full w-[150px] "
                src="/ai15.jpg"
                alt="profile pic"
              />
            </span>
            <p className="py-2 font-bold text-green-500">Landscaper</p>
            <p>John Doe</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Staff;
