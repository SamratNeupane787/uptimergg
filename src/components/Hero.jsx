"use client";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Lock } from "lucide-react";
import Link from "next/link";

function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(true), 600);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="relative isolate overflow-hidden h-[32rem] flex items-center justify-center px-4 sm:px-8">
     
      <div className="absolute inset-0 ">
        <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-red-700 blur-3xl opacity-20 rounded-full"></div>
      </div>

     
      <div className="text-center space-y-6 flex flex-col items-center gap-3">
        <h1
          className={`text-4xl sm:text-5xl md:text-6xl font-semibold transition-opacity duration-700 ${
            visible ? "opacity-100" : "opacity-0"
          }`}
        >
          Easy Uptime Monitor <span className="text-red-700">App</span>
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-medium">
          <span className="text-red-700">Monitor.</span> Alert. Relax.
        </h2>

        <div className=" flex items-center justify-center w-48 h-[3rem] rounded-full bg-red-600">
          SignUp
        </div>
      </div>
    </div>
  );
}

export default Hero;
