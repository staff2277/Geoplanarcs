import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import clsx from "clsx";
const Navbar = () => {
  const location = useLocation();
  return (
    <nav className="absolute  top-0 flex justify-between items-center w-full px-[3rem] py-[15px]">
      <div>
        <Link to="/">
          <img
            className="w-[200px]"
            src={location.pathname == "/services" ? "/logo4.svg" : "/logo4.svg"}
            alt="logo"
          />
        </Link>
      </div>
      <ul
        className={clsx({
          "text-white": location.pathname == "/services",
          "": location.pathname !== "/services",
          "flex gap-5 text-white": true,
        })}
      >
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
