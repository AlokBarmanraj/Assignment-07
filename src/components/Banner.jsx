import React from "react";

const Banner = () => {
  return (
    <div className="pt-20">
      <div className="text-center space-y-5">
        <h1 className="text-5xl font-bold font-[#1F2937]">Friends to keep close in your life</h1>
        <p className="font-[#1F2937]">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the <br /> relationships that matter most.
        </p>
        <button className="btn bg-[#244D3F] text-white rounded-lg">+Add a Friend</button>
      </div>
    </div>
  );
};

export default Banner;
