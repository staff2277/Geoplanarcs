import OurServices from "../components/OurServices";
import Leading from "../components/Leading";
import HomeGrid from "../components/HomeGrid.jsx";
import Footer from "../components/Footer.jsx";

const Home = () => {
  return (
    <div className="h-[100vh]">
      <div
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7)), url(/bg7.jpg)",
          backgroundRepeat: "no-repeat",
        }}
        className="h-full flex items-center lg:pl-[10%] sm:pl-[5%] max-sm:pl-[2%] "
      >
        <div className="text-white font-semibold">
          <h1 className="xl:text-[4.5rem] lg:text-[4rem] sm:text-[3rem] max-sm:text-[2.1rem]">
            Welcome to Geoplanarcs
          </h1>
          <p className=" xl:text-[2rem] lg:text-[1.8rem] sm:text-[1.4rem] max-sm:text-[1rem] text-[#2db32d]">
            Your Reliable Partner in Architecture and Real Estate Development
          </p>
        </div>
      </div>
      <div className="max-md:px-[5%] md:px-[1%] lg:px-[5%] ">
        <OurServices />
      </div>
      <Leading />
      <HomeGrid />
      <Footer />
      <Footer />
    </div>
  );
};

export default Home;
