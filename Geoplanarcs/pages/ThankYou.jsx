import { Link } from "react-router-dom";

const ThankYou = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h2 className="text-3xl font-bold text-green-600">Thank You! 🎉</h2>
      <p className="text-lg mt-2">Your message has been sent successfully.</p>
      <p>We will contact you shortly</p>
      <Link
        to="/"
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default ThankYou;
