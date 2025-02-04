const About = () => {
  return (
    <div>
      <div
        className="h-[50vh] flex items-center lg:pl-[15%] sm:pl-[5%] max-sm:pl-[2%]"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7)), url(/plan2.jpg)",
          backgroundPosition: "bottom",
        }}
      >
        <h1 className="text-white xl:text-[3.2rem] lg:text-[2.4rem] sm:text-[2rem] max-sm:text-[1.5rem] font-semibold">
          About Us
        </h1>
      </div>
      <div>
        <div>
          <img src="/" alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
