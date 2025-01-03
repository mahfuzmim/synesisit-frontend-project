import { useSelector } from "react-redux";
import Bell from "../assets/images/BellRinging03.png";
import logo from "../assets/images/synesislogo.png";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const bellCounter = useSelector((state) => state.bellCounter.count); // Get counter value
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const location = useLocation();
  console.log(location);
  console.log(location?.state?.id);
  console.log(`'/post/${location?.state?.id}' `);

  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900 border-b-2">
        <div className="flex flex-wrap items-center justify-between p-4 pb-0">
          {/* Logo Section */}
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src={logo}
              className="h-16 w-full sm:h-[4.5rem] lg:h-[6.3rem] xl:[7.6rem]"
              alt="Logo"
            />
          </Link>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="inline-flex items-center p-2 ml-3 text-sm 
            text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none 
            focus:ring-2 focus:ring-gray-200 dark:text-gray-400 
            dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-cta"
            aria-expanded={isMenuOpen ? "true" : "false"}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              ></path>
            </svg>
          </button>

          {/* Navigation Menu */}
          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } w-full lg:flex lg:w-auto lg:items-center`}
            id="navbar-cta"
          >
            <div
              className="flex flex-col gap-2
            items-center font-medium p-4 lg:p-0 mt-4 
            border border-gray-100 rounded-lg bg-gray-50 
            lg:flex-row lg:space-x-8 rtl:space-x-reverse lg:mt-0 
            lg:border-0 lg:bg-white dark:bg-gray-800 lg:dark:bg-gray-900 
            dark:border-gray-700"
            >
              {/* Bell Counter */}
              {location.pathname != `/post/${location?.state?.id}` && (
                <div className="relative flex items-center w-[208px] h-[55px] bg-[#D9D9D933] justify-center rounded-[10px]">
                  <p className="text-xl font-normal">Bell Counter</p>
                  <img src={Bell} alt="Bell Icon" className="ml-2" />
                  <p className="absolute text-[1.1rem] font-bold top-0 right-3">
                    {bellCounter}
                  </p>
                </div>
              )}{" "}
              {/* Sign In Button */}
              <button className="w-[152px] p-0 font-normal h-[32px] bg-[#E3E3E3] border border-[#767676] rounded-[10px] text-[#1E1E1E]">
                Sign in
              </button>
              {/* Register Button */}
              <button className="w-[152px] p-0 font-normal h-[32px] bg-[#2C2C2C] border border-[#2C2C2C] rounded-[10px] text-[#F5F5F5]">
                Register
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
