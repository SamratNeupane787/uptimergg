"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import { HashIcon, Lock, LogIn, Menu, X } from "lucide-react";
import {
  SignInButton,
  SignUpButton,
  SignedOut,
  SignedIn,
  UserButton,
} from "@clerk/nextjs";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-transparent px-6 md:px-12 z-10 pt-12">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-2xl font-light">
          <HashIcon />
          <span>Uptimer.GG</span>
        </div>

        <div className="z-10 md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white focus:outline-none"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <ul className="hidden md:flex text-sm md:text-base text-slate-300 flex-row items-center gap-5">
          {[
            { name: "Features", href: "#features" },
            { name: "Solution", href: "#solution" },
            { name: "Pricing", href: "#pricing" },
            { name: "About", href: "#about" },
          ].map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="hover:cursor-pointer hover:text-white transition duration-150"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        <SignedOut>
          <div className="hidden md:flex flex-row gap-3">
            <SignInButton mode="modal">
              <Button className="flex items-center gap-2 transition duration-75">
                <LogIn size={16} />
                Login
              </Button>
            </SignInButton>
            <SignUpButton mode="modal">
              <Button className="bg-white text-black flex items-center gap-2">
                <Lock size={16} />
                Sign Up
              </Button>
            </SignUpButton>
          </div>
        </SignedOut>

        <SignedIn>
          <div className="hidden md:flex">
            <UserButton />
          </div>
        </SignedIn>
      </div>

      {menuOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4">
          {["Features", "Solution", "Pricing", "About"].map((item) => (
            <span
              key={item}
              className="text-slate-300 hover:text-white hover:scale-105 transition duration-150 text-sm"
            >
              {item}
            </span>
          ))}

          <SignedOut>
            <div className="flex flex-col gap-2 mt-4">
              <SignInButton mode="modal">
                <Button className="flex items-center gap-2 transition duration-75">
                  <LogIn size={16} />
                  Login
                </Button>
              </SignInButton>
              <SignUpButton mode="modal">
                <Button className="bg-white text-black flex items-center gap-2">
                  <Lock size={16} />
                  Sign Up
                </Button>
              </SignUpButton>
            </div>
          </SignedOut>

          <SignedIn>
            <div className="mt-4">
              <UserButton />
            </div>
          </SignedIn>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
