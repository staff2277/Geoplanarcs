import Staff from "../components/Staff";
import Footer from "../components/Footer";
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
      <div className="flex  py-[5rem] max-md:flex-col-reverse items-center mb-[5rem] justify-center lg:px-[10%] max-md:px-[5%]  gap-10">
        <div className="flex relative ">
          <img
            className="w-[50%]   rounded-tr-[40%] rounded-bl-[40%] "
            src="/vs4.jpg"
            alt=""
          />
          <img
            className="w-[50%]  rounded-tl-[40%] rounded-br-[40%]"
            src="/vs3.jpg"
            alt=""
          />
        </div>
        <div className="">
          <h3 className="text-green-500 xl:text-[2.8rem] lg:text-[2.4rem] sm:text-[2rem] max-sm:text-[1.5rem] font-semibold">
            Vision
          </h3>
          <p>
            At Geoplanarcs, we are dedicated to transforming visions into
            reality. With a team of experienced professionals, we have
            successfully executed numerous projects in the architectural and
            real estate domain, earning a reputation for innovation and
            excellence.
          </p>
        </div>
      </div>
      <Staff />
      <Footer />
    </div>
  );
};

export default About;
