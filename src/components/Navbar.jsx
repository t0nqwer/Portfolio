import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../style";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav
      className={` ${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-50 bg-primary`}
    >
      <div className="flex items-center justify-between w-full mx-auto max-w-7xl">
        <Link
          to="/"
          className="flex items-center gap-2 "
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          {/* <img src={logo} alt="logo" className="object-contain w-9 h-9" /> */}
          <h1 className=" text-white text-[18px] font-bold curser-pointer flex">
            {" "}
            Jirapat Teja <span className="hidden ml-5 sm:block">|</span>{" "}
            <span className="hidden ml-5 sm:block">Portfolio</span>
          </h1>
        </Link>
        <ul className="flex-row hidden gap-10 list-none sm:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                // to={`#${link.id}`}
                href={`#${link.id}`}
                className={`${
                  active === link.title ? "text-white" : "text-secondary"
                } text-[18px] font-medium hover:text-white cursor-pointer`}
                onClick={() => {
                  setActive(link.id);
                }}
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-end flex-1 select-none sm:hidden">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="z-20 object-contain w-6 h-6 cursor-pointer"
            onClick={() => {
              setToggle(!toggle);
            }}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-primary  absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="flex flex-col items-start justify-end gap-10 list-none sm:hidden">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className={`${
                      active === link.title ? "text-white" : "text-secondary"
                    } font-poppins font-medium cursor-pointer text-[16px] hover:text-white`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(link.id);
                    }}
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
