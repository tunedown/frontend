"use client";
import React from "react";
import Logo from "./Logo";
import { useRouter } from "next/navigation";
if (typeof window === "undefined") {
  console.log("Oops, `window` is not defined");
}
const Navbar = () => {
  const router = useRouter();

  const handleMonitorClick = () => {
    const monitorElement = document.getElementById("monitor");
    if (monitorElement) {
      monitorElement.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push("/");
    }
  };

  return (
    <div className="w-screen flex justify-between">
      <Logo />
      <div className="flex flex-row justify-evenly w-2/5 items-center font-poppins font-medium text-xl">
        <h2
          onClick={() => router.push("/")}
          className="hover:opacity-65 cursor-pointer"
        >
          home
        </h2>
        <h2
          onClick={() => {
            console.log("pushing");
            router.push("/listen");
          }}
          className="hover:opacity-65 cursor-pointer"
        >
          listen
        </h2>
        <h2
          onClick={handleMonitorClick}
          className="hover:opacity-65 cursor-pointer"
        >
          monitor
        </h2>
      </div>
    </div>
  );
};

export default Navbar;
