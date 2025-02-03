import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="absolute  top-0 flex justify-between items-center w-full px-[3rem] py-[15px]">
      <div>
        <img className="w-[200px]" src="/logo4.svg" alt="logo" />
      </div>
      <ul className="flex gap-5 text-white">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
