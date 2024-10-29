import { Outlet, Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import classNames from "classnames";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  //Detect scrolling for background change
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerClass = classNames(
    "flex  justify-around  top-0 left-0 w-full z-50 transition-all h-12 p-2",
    {
      "bg-blue-200 shadow-lg backdrop-blur-lg": scrolled,
      "bg-blue-500": !scrolled,
    }
  );

  return (
    <>
      <nav className={headerClass}>
        <div className="justify-around ml-8">
          <ul className="flex gap-10 items-center">
            <li>
              <Link to="/">NearRide</Link>
            </li>
            <li>
              <Link to="/ride">Ride</Link>
            </li>
            <li>
              <Link to="/drive">Drive</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
        <div>
          <ul className="flex gap-5">
            <li>
              <Link to="/connect-wallet">Launch App</Link>
            </li>
           
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
  );
}
