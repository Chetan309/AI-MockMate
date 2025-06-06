"use client";
import { Button } from "@/components/ui/button";
import { FaUser } from "react-icons/fa";
import { SignInButton, UserButton, useUser } from "@clerk/nextjs";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { AiFillHome } from "react-icons/ai";
import { MdDashboardCustomize } from "react-icons/md";
import { BsFillQuestionSquareFill } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";

function Header() {
  const path = usePathname();
  const router = useRouter();
  const { isSignedIn } = useUser();

  useEffect(() => {
    console.log(path);
  }, [path]);
  const NaivgateToDashboard = () => {
    router.push("/dashboard/");
  };
  const NaivgateToHome = () => {
    router.push("/");
  };
  const NaivgateToaboutdeveloper = () => {
    router.push("/aboutdeveloper/");
  };
  const NaivgateTohowitworks = () => {
    router.push("/#howitworks/");
  };

  return (
    <>
      <div className="relative flex p-4 justify-between items-center shadow-sm text-gray-600">
        {/* Background image with opacity */}
        <div
          className="absolute inset-0 opacity-55 z-[-1]"
          style={{ backgroundColor: "#c49e1a" }}
        ></div>


        {/* Content */}
        <div className="flex gap-10 cursor-pointer">
        <Image
            src="/pic.png"
            width={190}
            height={100}
            alt="AI Mockmate Logo"
            onClick={NaivgateToHome}
          />
          <ul className="hidden md:flex gap-2 font-semibold">
            <li
              className={`flex gap-1 font-extrabold text-black hover:bg-slate-800 hover:rounded-md hover:text-slate-200 pr-4 pl-4 text-center transition-all cursor-pointer p-2 ${
                path == "/"
              }`}
              onClick={NaivgateToHome}
            >
              <span className="p-1">
                <AiFillHome className="w-4 h-4" />
              </span>
              Home
            </li>
            <li
              className={`flex gap-1 font-extrabold pr-4 pl-4 text-black hover:bg-slate-800 hover:rounded-md hover:text-slate-200 transition-all cursor-pointer p-2 ${
                path == "/dashboard"
              }`}
              onClick={NaivgateToDashboard}
            >
              <span className="p-1">
                <MdDashboardCustomize className="w-4 h-4" />
              </span>
              Dashboard
            </li>
            <li
              className={`flex gap-1 font-extrabold pr-4 pl-4 text-black hover:bg-slate-800 hover:rounded-md hover:text-slate-200 transition-all cursor-pointer p-2 ${
                path == "/#howitworks" && "text-cyan-700 font-bold"
              }`}
              onClick={NaivgateTohowitworks}
            >
              <span className="p-1">
                <BsFillQuestionSquareFill className="w-4 h-4" />
              </span>
              How it works
            </li>
            <li
              className={`flex gap-1 font-extrabold pr-4 pl-4 text-black hover:bg-slate-800 hover:rounded-md hover:text-slate-200 transition-all cursor-pointer p-2 ${
                path == "/aboutdeveloper" && "text-cyan-700 font-bold"
              }`}
              onClick={NaivgateToaboutdeveloper}
            >
              <span className="p-1">
                <FaUserCircle className="w-4 h-4" />
              </span>
              About Developer
            </li>
          </ul>
        </div>
        {isSignedIn ? (
          <UserButton />
        ) : (
          <Button className="flex gap-2 justify-center bg-transparent font-bold text-black hover:bg-slate-800 hover:text-slate-300 w-[100px]">
            <SignInButton>Login</SignInButton>
            <FaUser />
          </Button>
        )}
      </div>
    </>
  );
}

export default Header;
