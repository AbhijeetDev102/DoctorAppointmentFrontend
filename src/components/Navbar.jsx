import React from "react";
import Button from "@mui/material/Button";
import { Link, matchPath, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const navItems = [
    {
      path: "/",
      value: "Home",
    },
    {
      path: "/service",
      value: "Service",
    },
    {
      path: "/contact",
      value: "Contact Us",
    },
  ];
  
  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname);
  };

  return (
    <>
      <nav className="border py-3 fixed top-0 w-full">
        <div className="max-w-[1200px] w-[90%] m-auto">
          <div className="flex justify-between items-center">
            <Link to="/" className="logo font-medium text-3xl text-[#0067CF] cursor-pointer">LOGO</Link>

            {/* ==============navitems============= */}

            <div>
              <ul className="flex gap-5">
                {navItems?.map((val, ind) => (
                  <li>
                    <Link
                      to={val?.path}
                      className={` font-medium ${
                        matchRoute(val?.path)
                          ? "text-blue-600 border-b-2 border-b-blue-600"
                          : null
                      }`}
                    >
                      {val?.value}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* ==============nav buttons================= */}

            <div className="flex gap-3">
              <Button variant="text">Sign Up</Button>
              <Button variant="contained">Login</Button>
            </div>
            
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
