import React from "react";

const CountCard = () => {
  return (
    <div className="w-9/12 mx-auto grid grid-cols-4 text-center">
      <div className="bg-white shadow-sm p-8">
        <div>
          <h3>10</h3>
          <h4>Total Friends</h4>
        </div>
      </div>
      <div className="bg-white shadow-xl">
        <div>
          <h3>3</h3>
          <h4>On Track</h4>
        </div>
      </div>
      <div className="bg-white shadow-xl">
        <div>
          <h3>6</h3>
          <h4>Need Attention</h4>
        </div>
      </div>
      <div className="bg-white shadow-xl">
        <div>
          <h3>12</h3>
          <h4>Interactions This Month</h4>
        </div>
      </div>
    </div>
  );
};

export default CountCard;
