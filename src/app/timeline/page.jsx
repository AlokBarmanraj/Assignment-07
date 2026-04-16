import React from "react";

const TimeLinePage = () => {
  return (
    <div className="w-9/12 mx-auto mt-16">
      <h1 className="font-bold text-6xl">Timeline</h1>
      <div>
        <select
          defaultValue="Filter Timeline"
          className="select border-gray-200 shadow-2xl"
        >
          <option disabled={true}>Filter Timeline</option>
          <option>Call</option>
          <option>Text</option>
          <option>Video</option>
        </select>
      </div>
    </div>
  );
};

export default TimeLinePage;
