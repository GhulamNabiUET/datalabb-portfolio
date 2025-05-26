import React from "react";
import { TypewriterEffectSmooth } from "../UI/TypeWriter";

const Hero = () => {
  return (
    <div className="hero">

    
    <div className="min-h-screen flex flex-col items-center justify-center relative bg-[#F5F7F8] text-white overflow-hidden">
      {/* Hero Text Section */}
      <div className="max-w-4xl pb-4 pt-8 md:pt-12 lg:pt-16 text-center">

<p className="text-black text-2xl md:text-4xl lg:text-6xl font-semibold leading-snug animate-fadeIn mt-22">
  Unveiling the Power of AI, Data Science & Machine Learning
</p>

<p className="text-gray-600 md:text-lg lg:text-xl mt-4 font-light leading-relaxed px-6 md:px-24 lg:py-8 animate-fadeIn">
  Dive into our vibrant case studies and witness the power of technology
  as it collaborates with our clients to achieve their boldest digital
  innovation dreams. Explore how our projects have revolutionized
  industries, empowered businesses, and left a lasting impact.
</p>

        {/* Typewriter Effect */}
        <TypewriterEffectSmoothDemo />

        {/* Tags Section for Small Screens */}
        <div className="py-5 flex items-center justify-center w-full mx-auto flex-wrap gap-x-2 gap-y-2 sm:hidden">
          <Tag label="Data Science" bgColor="bg-red-500" />
          <Tag label="Artificial Intelligence" bgColor="bg-yellow-500" />
          <Tag label="Machine Learning" bgColor="bg-blue-500" />
          <Tag label="Deep Learning" bgColor="bg-purple-500" />
          <Tag label="Gen AI" bgColor="bg-green-500" />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Hero;

export function TypewriterEffectSmoothDemo() {
  // const words = [
  //   { text: "Data Science |", className: "text-red-500 dark:text-red-500" },
  //   { text: "Artificial Intelligence |", className: "text-yellow-500" },
  //   { text: "Machine Learning |", className: "text-blue-500" },
  //   { text: "Deep Learning |", className: "text-purple-500" },
  //   { text: "Gen AI", className: "text-green-500" },
  // ];
  const words = [
    { text: "Data Science |", className: "text-[#b23b3b]" },        // Muted Crimson Red
    { text: "Artificial Intelligence |", className: "text-[#c79e34]" }, // Elegant Gold/Amber
    { text: "Machine Learning |", className: "text-[#4178be]" },     // Soft Tech Blue
    { text: "Deep Learning |", className: "text-[#7a52a3]" },        // Muted Purple
    { text: "Gen AI", className: "text-[#2e7d5b]" },                 // Forest Green
  ];
  
  return (
    <div className="hidden md:flex flex-col items-center justify-center my-8">
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}

// Tag Component for Reusability
function Tag({ label, bgColor }) {
  return (
    <p
      className={`p-2 ${bgColor} rounded-full text-xs md:text-sm font-semibold shadow-md hover:scale-105 transition-transform duration-200`}
    >
      {label}
    </p>
  );
}
