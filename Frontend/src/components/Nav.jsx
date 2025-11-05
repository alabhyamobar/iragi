import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useMediaQuery } from "react-responsive";
import { Bars3Icon } from "@heroicons/react/24/solid";
import NavMobMenue from "./NavMobMenue";

gsap.registerPlugin(ScrollTrigger);

const Nav = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const navRef = useRef(null);
  const [open, setOpen] = useState(false);

  useGSAP(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: navRef.current,
          start: "top top",
          end: "10px",
          scrub: 1,
        },
      })
      .to(navRef.current, {
        backgroundColor: "#c4903680",
        backdropFilter: "blur(6px)",
        duration: 0.3,
        
      });
  });

  const toggle = () => setOpen((prev) => !prev);

  return (
    <>
      <div
        ref={navRef}
        className={`w-[95%] md:w-[80%] lg:w-[70%] lg:ml-55  m-2 h-10 rounded-full overflow-hidden bg-[#ae7f2d] shadow-2xl shadow-black fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-4 transition-all duration-300 ${
          open && isMobile ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <div className="logo flex items-center gap-2">
          <img
            src="/images/iragi_logo.png"
            alt="iragi_logo"
            className="w-10 h-10 object-cover"
          />
          <span className="text-white text-lg font-bold">
            Iragi Renovations
          </span>
        </div>

        <div className="flex items-center gap-4 lg:w-[58%] justify-between">
          {isMobile ? (
            <button
              onClick={toggle}
              className="h-[80%] w-[30px] border-2 border-white flex items-center justify-center rounded-md"
            >
              <Bars3Icon className="w-6 h-6 text-white" />
            </button>
          ) : (
            <ul className="hidden md:flex gap-6 text-white font-semibold text-lg">
              <li className="cursor-pointer hover:text-black">Home</li>
              <li className="cursor-pointer hover:text-black">About</li>
              <li className="cursor-pointer hover:text-black">Services</li>
              <li className="cursor-pointer hover:text-black">Contact</li>
            </ul>
          )}

          <div className="w-8 h-8 bg-blue-200 rounded-full overflow-hidden border-2 border-white cursor-pointer">
            <img
              src="/images/user_profile.png"
              alt="user_profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {isMobile && <NavMobMenue toggle={toggle} open={open} />}
    </>
  );
};

export default Nav;
