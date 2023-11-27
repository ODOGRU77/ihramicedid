// import { authOptions } from "@/lib/auth";
// import { getServerSession } from "next-auth";
// import Link from "next/link";
// import { BiLogIn } from "react-icons/bi";
// import MaxWidthWrapper from "./MaxWidthWrapper";
// import MobileNav from "./MobileNav";
// import UserAccountNav from "./UserAccountNav";
// import { buttonVariants } from "./ui/button";
// import { NavLink } from "react-router-dom";
// import { getSession } from "next-auth/react";

// const Navbar = async () => {
//   const session = await getServerSession(authOptions);
//   const user = getSession();
//   return (
//     <nav className="sticky text-xl inset-x-0 top-0 z-30 w-full px-4 shadow-xl bg-[#E0E1DD]/20 backdrop-blur-lg transition-all duration-500">
//       <MaxWidthWrapper>
//         <div className="flex w-full h-16 items-center justify-between">
//           <Link href="/" className="flex z-40 font-semibold">
//             <span>İhram-ı Cedid.</span>
//           </Link>

//           {/* <MobileNav isAuth={!!user} /> */}

//           <div className="hidden sm:block sm:space-x-5 ">
//             <Link
//               href="/hesaplama"
//               className={buttonVariants({
//                 variant: "ghost",
//                 size: "sm",
//               })}
//             >
//               <span className="text-xl">Akıl ve Fikir Sorgulama</span>
//             </Link>
//             <Link
//               href="/info"
//               className={buttonVariants({
//                 variant: "ghost",
//                 size: "sm",
//               })}
//             >
//               <span className="text-xl">Ebced Hesabı Nedir?</span>
//             </Link>
//             {session?.user ? (
//               <UserAccountNav />
//             ) : (
//               <Link
//                 className={buttonVariants({ variant: "default" })}
//                 href="/sign-in"
//               >
//                 <BiLogIn />
//                 <p className="p-1 mx-1 w-full">Giriş yap</p>
//               </Link>
//             )}
//           </div>

//           {/* Orta Kısım */}
//           <MobileNav />
//         </div>
//       </MaxWidthWrapper>
//     </nav>
//   );
// };

// export default Navbar;

"use client";

import Link from "next/link";
import React, { useState } from "react";
import { buttonVariants } from "./ui/button";
import { BiLogIn } from "react-icons/bi";
import Image from "next/image";

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
              <div className="flex shrink-0">
                <a href="/" className="">
                  <Image
                    src="/İhram-i-Cedid-Logo.png"
                    alt="logo"
                    width={200}
                    height={70}
                    quality={100}
                  />
                </a>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 text-primary flex items-center space-x-4">
                <a href="/hesaplama" className=" rounded-lg p-2">
                  Akıl ve Fikir Sorgulama
                </a>
                <a href="/info" className=" rounded-lg p-2">
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
                href="/"
                className="block  hover:bg-white/40 hover:text-primaryrounded-lg p-2"
              >
                Akıl ve Fikir Sorgulama
              </a>
              <a
                href="/"
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
