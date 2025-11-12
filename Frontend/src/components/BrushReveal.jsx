import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

const BrushReveal = () => {
  const brushref = useRef(null);
  const canvaref = useRef(null);
  useGSAP(()=>{
    const tl = gsap.timeline();
    tl.to(brushref.current , {
      y:"106%",
      duration:2,
      delay:0.5,
    })
    tl.to(".masked", {
      webkitMaskSize: "1200% 1200%", 
      maskSize: "1200% 1200%",
      maskPosition:"center",
      duration: 1,
      ease: "power3.out",
    });
    tl.to(canvaref.current,{
      display:"none"
    })
  })
  return (
    <div ref={canvaref} className="h-full w-screen   absolute z-90">
      <div className="canva  h-screen w-full relative ">
        <img className="masked w-full h-full " src="images/home.png" alt="" />
        <div ref={brushref} className="cover h-[90vh] w-full bg-white top-0 flex  absolute z-50 justify-center">
          <div className="brush h-30 w-20">
            <img
              className="h-full w-full relative -translate-y-[10vh]"
              src="images/iragi_brush2.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrushReveal;
