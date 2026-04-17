"use client";

import { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from "recharts";

const StatsPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const timeline = JSON.parse(sessionStorage.getItem("timeline")) || [];

    const result = {
      call: 0,
      text: 0,
      video: 0,
    };

    timeline.forEach((item) => {
      if (item.type === "call") result.call++;
      if (item.type === "text") result.text++;
      if (item.type === "video") result.video++;
    });

    setData([
      { name: "Text", value: result.text },
      { name: "Call", value: result.call },
      { name: "Video", value: result.video },
    ]);
  }, []);

  const COLORS = ["#8b5cf6", "#22c55e", "#16a34a"];

  return (
    <div className="w-9/12 mx-auto mt-20">
      <h1 className="font-bold text-6xl">Friendship Analytics</h1>
      <div className="bg-gray-100 p-5 rounded-lg mt-10">
        <h1 className="text-3xl font-bold mb-6">By Interaction Type</h1>

        <div style={{ width: "100%", height: 300 }}>
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={70}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>

              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default StatsPage;
