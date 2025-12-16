import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import Logo1 from "../../assets/Logo1.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { label: "Who we are", path: "/who" },
    { label: "What We Offer", path: "/what" },
    { label: "How We Get There", path: "/whatgetthere" },
    { label: "ITD Online Login", path: "/LoginPage" },
    // { label: "Partner With Us", path: "/PartnerUsPage" },
    // { label: "Partner With Us", path: "/PartnerUsPage" },
    { label: "Cars", path: "/PartnerUsPage" },
    { label: "Heavy Vehicle", path: "/PartnerUsPage" },
  ];

  return (
    <header className="w-full fixed top-0 left-0 right-0">
      <nav
        className={`py-6  px-4 bg-black ${
          isSticky ? "sticky top-0 left-0 right-0 border-b text-blue-900 bg-black duration-300" : ""
        }`}
      >
        <div className="flex text-base gap-8 items-center justify-between flex-row-reverse lg:flex-row lg:justify-between">
          <a href="/" className="">
            <img src={Logo1} alt="logo" className="w-[130px]" />
          </a>
          <ul className="lg:flex space-x-6 hidden">
            {navLinks.map(({ label, path }) => (
              <li key={path} className="ml-4">
                <Link
                  to={path}
                  className="text-lg font-bold cursor-pointer border-2 border-black hover:border-white hover:bg-blue-900 rounded-t-md py-1 px-2 text-white transition-all ease-in duration-200 "
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Mobile nav */}
        <div className="lg:hidden top-10 absolute left-5">
          <button onClick={toggleMenu} className="text-black focus:outline-none focus:text-gray-500">
            {isMenuOpen ? <RxCross2 className="h-10 w-6 text-gray-500" /> : <FaBars className="h-10 w-6 text-gray-500" />}
          </button>
        </div>
        <div
          className={`h-full px-4 mt-24 py-7 bg-gray-600  ${
            isMenuOpen ? "block fixed top-0 right-0 left-0 " : "hidden"
          }`}
        >
          <ul className="gap-16">
            {navLinks.map(({ label, path }) => (
              <li key={path} className="ml-4 border-b-2 p-2">
                <Link to={path} className="text-xl font-bold cursor-pointer">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};
export default Navbar;