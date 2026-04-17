"use client";

import { useEffect, useState } from "react";
import { IoCall, IoVideocam } from "react-icons/io5";
import { IoMdText } from "react-icons/io";

const TimeLinePage = () => {
  const [timeline, setTimeline] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const data = JSON.parse(sessionStorage.getItem("timeline"));

    if (data && data.length > 0) {
      setTimeline(data);
    } else {
      setTimeline([]);
    }

    setTimeout(() => {
      sessionStorage.removeItem("timeline");
    }, 0);
  }, []);

  const getIcon = (type) => {
    if (type === "call") return <IoCall />;
    if (type === "text") return <IoMdText />;
    if (type === "video") return <IoVideocam />;
  };

  const filtered =
    filter === "all"
      ? timeline
      : timeline.filter((item) => item.type === filter);

  return (
    <div className="w-9/12 mx-auto mt-16">
      <h1 className="font-bold text-6xl">Timeline</h1>

      <select
        onChange={(text) => setFilter(text.target.value.toLowerCase())}
        className="select border-gray-200 shadow-2xl"
      >
        <option value="all">Filter Timeline</option>
        <option value="call">Call</option>
        <option value="text">Text</option>
        <option value="video">Video</option>
      </select>

      <div className="mt-8">
        {filtered.length === 0 ? (
          <p className="text-center font-bold text-4xl">No Filter</p>
        ) : (
          filtered.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-3 bg-gray-100 p-4 rounded-lg mb-3"
            >
              <span className="text-4xl">{getIcon(item.type)}</span>

              <div>
                <div className="flex gap-1 items-center">
                  <p className="font-bold">{item.type.toUpperCase()}</p>
                  <span>with</span>
                  <p>{item.name}</p>
                </div>

                <p className="text-sm text-gray-500">{item.date}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default TimeLinePage;

