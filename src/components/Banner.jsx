import React from "react";

const Banner = () => {
  return (
    <div className="pt-10 md:pt-16 lg:pt-20">
      <div className="text-center space-y-4 md:space-y-5">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1F2937] leading-snug md:leading-tight">
          Friends to keep close in your life
        </h1>

        <p className="text-sm md:text-base lg:text-lg text-[#1F2937]">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the
          <br className="hidden lg:block"/>
          relationships that matter most.
        </p>

        <button className="btn bg-[#244D3F] text-white rounded-lg px-4 py-2 md:px-6 md:py-3">
          + Add a Friend
        </button>
      </div>
    </div>
  );
};

export default Banner;
