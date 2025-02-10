const Staff = () => {
  return (
    <div>
      <div className="mb-[5rem] max-md:px-[5%] md:px-[1%] lg:px-[5%]">
        <div className="w-full mb-[2rem] flex justify-center text-green-500 xl:text-[2.8rem] lg:text-[2.4rem] sm:text-[2rem] max-sm:text-[1.5rem] font-semibold">
          Our Staff
        </div>

        {/* Scrollable Container */}
        <div className="flex space-x-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory px-4 justify-center">
          {[
            { role: "CEO", name: "Sumaila Osumanu", image: "/prof.jpg" },
            {
              role: "Architecture Planner",
              name: "Faisal Osumanu",
              image: "/prof.jpg",
            },
            { role: "Surveyor", name: "Rashid Osumanu", image: "/prof.jpg" },
            {
              role: "Website Developer & IT Support",
              name: "Mustapha Osman",
              image: "/ai15.jpg",
            },
          ].map((staff, index) => (
            <div
              key={index}
              className=" flex flex-col justify-center items-center border-2 border-green-200 rounded-4xl text-center py-[3rem] px-[5rem] min-w-[300px] snap-center"
            >
              <span>
                <img
                  className="rounded-full w-[150px]"
                  src={staff.image}
                  alt="profile pic"
                />
              </span>
              <p className="py-2 font-bold text-green-500">{staff.role}</p>
              <p>{staff.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Staff;
