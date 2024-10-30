import React, { useState } from "react";
import Navbar from "../Layout/Navbar";
import icon from "../assets/images/icon.png";

export default function ConnectionPage() {
  const [isLoading, setLoading] = useState(false);

  return (
    <>
      <div className="flex flex-col md:flex-row lg:flex-row h-screen bg-[#042B2B] lg:p-4 p-0">
        {/* Left section with the logo */}
        <div className="md:w-1/2 w-full bg-[#94bd8a] md:bg-[#9ace8e] flex items-center justify-center py-1 md:py-0">
          <div className="flex items-center justify-center gap-1">
            <img
              src={icon}
              alt="NearRide logo"
              width={200}
              height={200}
              className="w-200 h-200"
            />
          </div>
        </div>

        {/* Right section with connect wallet */}
        <div
          className={`md:w-1/2 w-full bg-[#042B2B] flex flex-col items-center justify-center py-8 md:py-0 h-full`}
        >
          <div className="text-center md:text-left">
            <h1 className={`text-white md:text-5xl text-4xl font-bold mb-4 `}>
              Connect Wallet
            </h1>
            <p className={`text-gray-300 mb-6 text-[18px] md:text-[19px]`}>
              Choose a wallet you want to connect.
              <br />
              There are several wallet providers.
            </p>
            <div
              className={`py-3 bg-[#03ED0E] text-[#000] font-semibold rounded-full hover:bg-green-500 transition px-[80px] w-full`}
            >
               
               <button className={`bg-[#03ED0E] rounded-full hover:bg-green-500 transition w-full border-none`}
               onClick=''>
                CONNECT WALLET
                </button>
                
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
