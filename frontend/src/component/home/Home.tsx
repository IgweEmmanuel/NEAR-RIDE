import React, { useState } from "react";
import { Link } from "react-router-dom";


export default function Home() {
 
  const [usrInp, setUsrInp] = useState<string>("");
  
  const handleUsrInp = (event: any) => {
    setUsrInp(event.target.value);
  };
  



  return (
<div className="">
      {/* hero section */}
    <div className="relative flex flex-col items-center justify-center w-full min-h-screen px-3 overflow-hidden bg-background mt-20">
        <div className="text-center">
            <h1 className="-mt-30 pt-26 text-5xl font-bold text-black md:text-8xl ml-6">
                Welcome to{" "}
            </h1>
            <h1 className="text-blue-600 text-5xl font-bold md:text-8xl">
                NearRide
            </h1>
        </div>
    </div>
</div>
  );
}

         
        

        
    

      
     
     