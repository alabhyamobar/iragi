import React, { useEffect, useRef } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import gsap from "gsap";
import { ScrollProvider } from "../context/ScrollContext";

function NavMobMenue({ toggle, open }) {
  const menuRef = useRef(null); 
  

  useEffect(() => {
    if (open) {
      gsap.fromTo(
        menuRef.current,
        { x: "-100%" },      
        {
          x: "0%",
          duration: 0.3,
          ease: "power3.out",
        }
      );
    } else {
      gsap.to(menuRef.current, {
        x: "-100%",
        duration: 0.5,
        ease: "power3.inOut",
      });
    }
  },);

  return (
    <div
      ref={menuRef}
      className="md:hidden fixed top-0 left-0 w-full h-full z-50 bg-white flex flex-col text-black"
    >
      
      <div className="top-nav w-full h-14 bg-[#ae7f2d] flex p-2 justify-between items-center">
        <div className="left h-full w-[30vh] flex gap-3 justify-start items-center">
          <div className="logo h-full w-[25%] flex items-center justify-center overflow-hidden rounded-md">
            <img
              src="/images/iragi_logo.png"
              alt="iragi_logo"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-black text-lg font-bold">Iragi Renovations</span>
        </div>

        <button
          onClick={toggle}
          className="contact h-[90%] w-[11%] border-2 border-black rounded-md flex items-center justify-center mr-4"
        >
          <XMarkIcon className="w-6 h-6 text-black" />
        </button>
      </div>

      
      <ul className="flex flex-col items-start mt-6 ml-6 gap-5 text-xl font-semibold">
        <li className="cursor-pointer">Home</li>
        <li className="cursor-pointer">Services</li>
        <li className="cursor-pointer">Projects</li>
        <li className="cursor-pointer">Contact</li>
      </ul>
    </div>
  );
}

export default NavMobMenue;
