"use client";

import { IoCall, IoVideocam } from "react-icons/io5";
import { IoMdText } from "react-icons/io";
import { toast } from "react-toastify";

const ClickActive = ({ name }) => {
  const handleAction = (type) => {
    const newEvent = {
      id: Date.now(),
      type,
      name,
      date: new Date().toDateString(),
    };

    const existing = JSON.parse(sessionStorage.getItem("timeline")) || [];

    sessionStorage.setItem("timeline", JSON.stringify([...existing, newEvent]));
    toast.success(`${name} ${type.toUpperCase()} successfully! ✅`);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <div
        onClick={() => handleAction("call")}
        className="bg-gray-200 rounded-lg p-6 text-center cursor-pointer hover:bg-gray-300"
      >
        <h2 className="font-bold text-xl flex flex-col items-center gap-2">
          <IoCall />
          Call
        </h2>
        
      </div>

      <div
        onClick={() => handleAction("text")}
        className="bg-gray-200 rounded-lg p-6 text-center cursor-pointer hover:bg-gray-300"
      >
        <h2 className="font-bold text-xl flex flex-col items-center gap-2">
          <IoMdText />
          Text
        </h2>
      </div>

      <div
        onClick={() => handleAction("video")}
        className="bg-gray-200 rounded-lg p-6 text-center cursor-pointer hover:bg-gray-300"
      >
        <h2 className="font-bold text-xl flex flex-col items-center gap-2">
          <IoVideocam />
          Video
        </h2>
      </div>
    </div>
  );
};

export default ClickActive;
