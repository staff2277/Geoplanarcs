const Footer = () => {
  return (
    <div className=" grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] max-md:flex-col items-center  justify-center lg:px-[10%] max-lg:px-[5%] py-[5rem] gap-10 bg-green-100">
      <div className=" h-full">
        <h3 className="font-bold text-green-500 mb-4">GET IN TOUCH</h3>
        <p>
          Contact us to discuss your project requirements and explore how
          Geoplanarcs can bring your architectural and real estate visions to
          life. We are eager to collaborate on your next venture.
        </p>
      </div>
      <div className="h-full">
        <h3 className="font-bold text-green-500 mb-4">CONTACT</h3>
        <div className="flex gap-3 mb-2">
          <span>
            <img className="w-[30px]" src="/location.svg" alt="" />
          </span>
          <span className="text-nowrap">Hohoe, Ghana</span>
        </div>
        <div className="flex gap-3 mb-2">
          <span>
            <img className="w-[30px]" src="/phone.svg" alt="" />
          </span>
          <span>+233 24 4025 454</span>
        </div>
        <div className="flex gap-3 mb-2">
          <span>
            <img className="w-[30px]" src="/mail.svg" alt="" />
          </span>
          <span>geoplanarcs@gmail.org</span>
        </div>
      </div>
      <div className="h-full">
        <h3 className="font-bold text-green-500 mb-4">WE OFFER</h3>
        <div className="*:mb-2">
          <p>Land Sales</p>
          <p>Legal Consultancy</p>
          <p>Construction</p>
          <p>Interior Design</p>
          <p>Land Surveying</p>
        </div>
      </div>
      <div className="h-full">
        <h3 className="font-bold text-green-500 mb-4">SOCIALS</h3>
        <div className="flex">
          <a href="#">
            <img className="w-[60px]" src="/insta.svg" alt="" />
          </a>
          <a href="#">
            <img className="w-[60px]" src="/fb.svg" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
