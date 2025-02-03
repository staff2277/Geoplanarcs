import OurServices from "../components/OurServices";

const Home = () => {
  return (
    <div className="h-[100vh]">
      <div
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7)), url(/bg7.jpg)",
          backgroundRepeat: "no-repeat",
        }}
        className="h-full flex items-center pl-[10%]"
      >
        <div className="text-white font-semibold">
          <h1 className="text-[4.5rem]">Welcome to Geoplanarcs</h1>
          <p className="text-[2rem] text-[#2db32d]">
            Your Reliable Partner in Architecture and Real Estate Development
          </p>
        </div>
      </div>
      <div>
        <OurServices />
      </div>
    </div>
  );
};

export default Home;
