const HomeGrid = () => {
  return (
    <div className="flex items-center max-md:flex-col-reverse my-[5rem] justify-center lg:px-[10%] max-md:px-[5%] py-[2rem] gap-10">
      <div className="relative border-2 border-amber-500">
        <img className="w-[80%] border-2 " src="/plan1.png" alt="plan image" />
        <img
          className="w-1/2 border-2  absolute top-0 left-1/2"
          src="/plan6.png"
          alt="plan image"
        />
        <img
          className="w-1/2 border-2 border-red-600 absolute bottom-[0] left-1/2"
          src="/plan3.png"
          alt="plan image"
        />
      </div>
      <div>
        <h1 className="text-green-500 xl:text-[2.8rem] lg:text-[2.4rem] sm:text-[2rem] max-sm:text-[1.5rem] font-semibold">
          Your Reliable Partner in Architecture and Real Estate Development
        </h1>
        <p>
          Our sleek and user-friendly website showcases our diverse range of
          services, a portfolio of our successful projects, and client
          testimonials, emphasizing our commitment to excellence and
          trustworthiness.
        </p>
      </div>
    </div>
  );
};

export default HomeGrid;
