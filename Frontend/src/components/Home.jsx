import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";


gsap.registerPlugin(ScrollTrigger);

const Home = ({ id, refProp }) => {
  const lbrushref = useRef(null);
  const rbrushref = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        lbrushref.current,
        { rotate: 0, transformOrigin: "bottom center" },
        { rotate: 45, duration: 1 ,delay:0.5 }
      );

      gsap.fromTo(
        rbrushref.current,
        { rotate: 0, transformOrigin: "bottom center" },
        { rotate: -45, duration: 1 ,delay:0.5}
      );

      const t1 = gsap.timeline({
        scrollTrigger: {
          trigger: refProp.current,
          start: "top top",
          end: "bottom top",
          // markers: true,
          scrub: true,
        },
      });
      t1.to(lbrushref.current, { y: -200 }, 0);
      t1.to(rbrushref.current, { y: 200 }, 0);
    },
    { scope: refProp }
  );

  return (
    <div
      id={id}
      ref={refProp}
      className="hero  h-[75vh] w-screen flex justify-center relative"
    >
      <div className="hero-text flex flex-col gap-2 justify-center items-center  h-80 w-full  mt-35">
        <h1 className="relative  text-5xl font-bold font-[brush] text-red-700">IRAGI RENOS</h1>
        <p className="w-[70%] text-black text-xl">Welcome to Iragi renos , we convert houses to homes</p>
        <div className="buttons h-15 mt-10 w-full flex justify-center items-center gap-4">
          <Link to="/contact" className="px-5 py-2 rounded border border-red-700 text-red-700 font-[brush]  hover:bg-red-800 transition-colors hover:bg-red-700 hover:text-white ">Contact</Link>
          <Link to="/explore" className="px-5 py-2 rounded  bg-red-700 text-white font-[brush] transition-colors">Explore</Link>
        </div>
      </div>
      <div
        ref={lbrushref}
        className="left-brush absolute h-40 w-25 -left-10 z-20 overflow-hidden -translate-x-[20px] translate-y-[10vh]"
      >
        <img
          className="h-full w-full object-contain"
          src="/images/iragi_brush2.png"
          alt=""
        />
      </div>

      <div
        ref={rbrushref}
        className="right-brush absolute z-20 -right-10 h-40 w-30 overflow-hidden translate-x-1/3 translate-y-[55vh]"
      >
        <img
          className="h-full w-full object-contain"
          src="/images/iragi_brush2.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Home;
