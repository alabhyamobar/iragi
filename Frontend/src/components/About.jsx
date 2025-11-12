import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const About = ({ refProp }) => {
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const sectionRef = useRef(null);
  const whyChooseTextRef = useRef(null);
  const whyChooseImageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // About text animation (scroll)
      gsap.from(textRef.current, {
        x: -120,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      // About image animation (scroll)
      gsap.from(imageRef.current, {
        x: 120,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      // Why choose us text animation (scroll)
      gsap.from(whyChooseTextRef.current, {
        x: -120,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: whyChooseTextRef.current,
          start: "top 85%",
        },
      });

      // Why choose us image animation (scroll)
      gsap.from(whyChooseImageRef.current, {
        x: 120,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: whyChooseImageRef.current,
          start: "top 85%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={(el) => {
        sectionRef.current = el;
        if (refProp) refProp.current = el;
      }}
      className="bg-[#efd7ad] flex flex-col justify-center px-6 md:px-20 py-16"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        {/* Text Content */}
        <div ref={textRef} className="flex-1 text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-red-700 font-[brush] mb-6">
            Our Story
          </h2>
          <p className="text-gray-800 mb-4 text-base sm:text-lg leading-relaxed">
            At Iragi Renovations, we are committed to transforming spaces with
            precision, creativity, and unmatched craftsmanship.
          </p>
          <p className="text-gray-800 text-base sm:text-lg leading-relaxed">
            We specialize in premium painting, renovation, and finishing
            solutions for homes and commercial spaces.
          </p>
        </div>

        {/* Image */}
        <div ref={imageRef} className="flex-1 w-full">
          <div className="rounded-xl overflow-hidden shadow-lg w-full">
            <img
              src="/images/about.jpg"
              alt="painting crew"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="max-w-7xl mx-auto mt-20 flex flex-col lg:flex-row items-center gap-10">
        {/* Text */}
        <div ref={whyChooseTextRef} className="flex-1 text-center lg:text-left">
          <h2 className="text-2xl sm:text-4xl lg:text-4xl font-bold text-red-700 font-[brush] mb-6">
            Why Choose Us
          </h2>

          <ul className="text-gray-800 space-y-3 text-base sm:text-lg list-disc list-inside">
            <li>Trusted by homeowners and businesses.</li>
            <li>Customized painting & renovation solutions.</li>
            <li>Dedicated project support and coordination.</li>
            <li>Clean, fast, and hassle-free execution.</li>
            <li>Skilled and experienced professionals.</li>
            <li>Transparent pricing with no hidden costs.</li>
          </ul>

          <div className="mt-10">
            <button className="bg-red-700 text-white px-6 py-3 rounded-md font-semibold hover:bg-green-900 transition">
              Book Free Visit
            </button>
          </div>
        </div>

        {/* Image */}
        <div ref={whyChooseImageRef} className="flex-1 w-full">
          <div className="rounded-xl overflow-hidden shadow-lg w-full">
            <img
              src="/images/office.jpg"
              alt="Renovation process"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
