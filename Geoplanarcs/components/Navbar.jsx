import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import clsx from "clsx";
import HamburgerMenu from "./Hamburger";
const Navbar = () => {
  const location = useLocation();
  return (
    <nav className="absolute z-50 top-0 flex justify-between items-center w-full px-[3rem] py-[15px]">
      <div>
        <Link to="/">
          <img
            className="w-[200px]"
            src={location.pathname == "/thank-you" ? "/logo.svg" : "/logo4.svg"}
            alt="logo"
          />
        </Link>
      </div>
      <ul
        className={clsx({
          "flex gap-5 max-md:hidden": true,
          "text-white": location.pathname !== "/thank-you",
          "text-black": location.pathname == "/thank-you",
        })}
      >
        <li
          className={clsx({
            hidden: location.pathname == "/",
          })}
        >
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
      <HamburgerMenu />
    </nav>
  );
};

export default Navbar;
