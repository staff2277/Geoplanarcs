const Contact = () => {
  return (
    <div>
      <div
        className="relative  h-[50vh] flex flex-col justify-center items-center bg-black"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7)), url(/hallbg.jpg)",
          backgroundPosition: "center",
        }}
      >
        {" "}
        <img className="w-[1000px] " src="/logo4.svg" alt="backgrond picture" />
        <div className="absolute w-full h-full">
          <h1 className="text-white lg:text-[3rem] md:text-[2.5rem] sm:text-[2rem] max-sm:text-[1.8rem]  italic flex justify-end items-end h-full pr-[3rem] py-[3rem]">
            Get in touch with us
          </h1>
        </div>
      </div>
      <div className="bg-blue-200">
        <form action="https://formsubmit.co/wnfynn@gmailcom" method="POST">
          <input type="text" name="name" required></input>
          <input type="email" name="email" required></input>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
