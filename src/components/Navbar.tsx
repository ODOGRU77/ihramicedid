"use client";

import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
  const [isClick, setIsClick] = useState(false);

  const toggleNavbar = () => {
    setIsClick(!isClick);
  };
  return (
    <>
      <nav className="sticky text-xl inset-x-0 top-0 z-30 w-full px-4 shadow-xl bg-[#E0E1DD]/20 backdrop-blur-lg transition-all duration-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="flex items-center justify-between font-semibold h-16">
            <div className="flex items-center">
              <div className="">
                <a href="/" className="text-primary font-bold text-2xl">
                  İhram-ı Cedid
                </a>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 text-primary flex items-center space-x-4">
                <a href="/AkilveFikirSorgulama" className=" rounded-lg p-2">
                  Akıl ve Fikir Sorgulama
                </a>
                <a href="/EbcedHesabiNedir" className=" rounded-lg p-2">
                  Ebced Hesabı Nedir?
                </a>
              </div>
            </div>
            <div className="md:hidden flex items-center ">
              <button
                onClick={toggleNavbar}
                className="inline-flex text-primary items-center justify-center p-2 rounded-md  focus-outline-none focus:ring-2 focus:ring-inset "
              >
                {isClick ? (
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        {isClick && (
          <div className="md:hidden">
            <div className="text-primary  px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                href="/AkilveFikirSorgulama"
                className="block  hover:bg-white/40 hover:text-primaryrounded-lg p-2"
              >
                Akıl ve Fikir Sorgulama
              </a>
              <a
                href="/EbcedHesabiNedir"
                className=" block hover:bg-white/40 hover:text-primary rounded-lg p-2"
              >
                Ebced Hesabı Nedir?
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
