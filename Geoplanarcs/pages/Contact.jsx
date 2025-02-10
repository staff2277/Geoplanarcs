import { useState } from "react";
import Footer from "../components/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
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
      <div className="max-w-lg mx-auto p-6 bg-white shadow-lg mt-[3rem] rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <form
          action="https://formsubmit.co/23c9d27867bfd351cd78f0d2bcdca09f"
          method="POST"
          className="flex flex-col gap-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="border p-2 rounded-md"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="border p-2 rounded-md"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="border p-2 rounded-md h-32"
          ></textarea>

          <input type="hidden" name="_captcha" value="false" />
          <input
            type="hidden"
            name="_next"
            value="http://localhost:5173/thank-you"
          />

          <button
            type="submit"
            className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>
      </div>
      <div className="mt-[5rem]">
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
