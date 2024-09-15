import React from "react";
if (typeof window === "undefined") {
  console.log("Oops, `window` is not defined");
}
const Hero = () => {
  return (
    <div className="w-full flex items-center justify-start pl-24 py-16">
      <h1 className="text-9xl font-bold font-playfair flex justify-center items-start gap-2 flex-col">
        <span>Harmonize </span>
        <span>your Heartbeat.</span>
      </h1>
    </div>
  );
};

export default Hero;
