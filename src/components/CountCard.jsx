import React from "react";

const CountCard = () => {
  return (
    <div className="w-full px-3.5 lg:px-0 lg:w-9/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-center gap-5 pt-10">
      <div className="bg-white shadow-sm p-8 border border-gray-200 rounded-xl">
        <div>
          <h3 className="font-bold text-4xl text-[#244D3F]">10</h3>
          <h4 className="font-bold text-xl text-[#64748B]">Total Friends</h4>
        </div>
      </div>
      <div className="bg-white shadow-sm p-8 border border-gray-200 rounded-xl">
        <div>
          <h3 className="font-bold text-4xl text-[#244D3F]">3</h3>
          <h4 className="font-bold text-xl text-[#64748B]">On Track</h4>
        </div>
      </div>
      <div className="bg-white shadow-sm p-8 border border-gray-200 rounded-xl">
        <div>
          <h3 className="font-bold text-4xl text-[#244D3F]">6</h3>
          <h4 className="font-bold text-xl text-[#64748B]">Need Attention</h4>
        </div>
      </div>
      <div className="bg-white shadow-sm p-8 border border-gray-200 rounded-xl">
        <div>
          <h3 className="font-bold text-4xl text-[#244D3F]">12</h3>
          <h4 className="font-bold text-xl text-[#64748B]">Interactions This Month</h4>
        </div>
      </div>
    </div>
  );
};

export default CountCard;
