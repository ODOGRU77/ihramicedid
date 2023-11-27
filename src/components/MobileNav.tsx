// "use client";

// import { ArrowRight, Menu } from "lucide-react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { useEffect, useState } from "react";

// const MobileNav = ({ isAuth }: { isAuth: boolean }) => {
//   const [isOpen, setOpen] = useState<boolean>(false);

//   const toggleOpen = () => setOpen((prev) => !prev);

//   const pathname = usePathname();

//   useEffect(() => {
//     if (isOpen) toggleOpen();
//   });

//   const closeOnCurrent = (href: string) => {
//     if (pathname === href) {
//       toggleOpen();
//     }
//   };

//   return (
//     <div className="sm:hidden">
//       <Menu onClick={toggleOpen} className="relative h-5 w-5 text-primary" />

//       {isOpen ? (
//         <div className="fixed animate-in slide-in-from-top-5 fade-in-20 inset-0 z-0 w-full">
//           <ul className="absolute bg-white border-b border-zinc-200 shadow-xl grid w-full gap-3 px-50 pt-20 pb-8">
//             {!isAuth ? (
//               <>
//                 <li>
//                   <Link
//                     onClick={() => closeOnCurrent("/sign-up")}
//                     className="flex items-center w-full font-semibold text-green-600"
//                     href="/sign-up"
//                   >
//                     Başlamak için
//                     <ArrowRight className="ml-2 h-5 w-5" />
//                   </Link>
//                 </li>
//                 <li className="my-3 h-px w-full bg-gray-300" />
//                 <li>
//                   <Link
//                     onClick={() => closeOnCurrent("/sign-in")}
//                     className="flex items-center w-full font-semibold"
//                     href="/sign-in"
//                   >
//                     Giriş yap
//                   </Link>
//                 </li>
//                 <li className="my-3 h-px w-full bg-gray-300" />
//                 <li>
//                   <Link
//                     onClick={() => closeOnCurrent("/pricing")}
//                     className="flex items-center w-full font-semibold"
//                     href="/pricing"
//                   >
//                     Planlar
//                   </Link>
//                 </li>
//               </>
//             ) : (
//               <>
//                 <li>
//                   <Link
//                     onClick={() => closeOnCurrent("/")}
//                     className="flex items-center w-full font-semibold"
//                     href="/"
//                   >
//                     Anasayfa
//                   </Link>
//                 </li>
//                 <li className="my-3 h-px w-full bg-gray-300" />
//                 <li>
//                   <Link
//                     className="flex items-center w-full font-semibold"
//                     href="/sign-out"
//                   >
//                     Çıkış yap
//                   </Link>
//                 </li>
//               </>
//             )}
//           </ul>
//         </div>
//       ) : null}
//     </div>
//   );
// };

// export default MobileNav;

"use client";

import Link from "next/link";
import React, { useState } from "react";
import { buttonVariants } from "./ui/button";
import { BiLogIn } from "react-icons/bi";

const MobileNav = () => {
  const [isClick, setIsClick] = useState(false);

  const toggleNavbar = () => {
    setIsClick(!isClick);
  };
  return (
    <>
      <nav className="">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center"></div>
            <div className="hidden md:block"></div>
            <div className="md:hidden flex items-center ">
              <button
                onClick={toggleNavbar}
                className="inline-flex items-center justify-center p-2 rounded-md text-white md:text-white hover:text-white focusÇoutline-none focus:ring-2 focus:ring-inset focus:ring-white "
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
            <div className=" px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                href="/"
                className="text-white block hover:bg-white hover:text-black rounded-lg p-2"
              >
                Anasayfa
              </a>
              <a
                href="/"
                className="text-white block hover:bg-white hover:text-black rounded-lg p-2"
              >
                Akıl ve Fikir Sorgulama
              </a>
              <a
                href="/"
                className="text-white block hover:bg-white hover:text-black rounded-lg p-2"
              >
                Ebced Hesabı Nedir?
              </a>
              <Link
                className={buttonVariants({ variant: "default" })}
                href="/sign-in"
              >
                <BiLogIn />
                <p className="p-1 mx-1 w-full">Giriş yap</p>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default MobileNav;
