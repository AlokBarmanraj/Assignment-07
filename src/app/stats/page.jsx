// import React from 'react';

// const StatsPage = () => {
//     return (
//         <div>
//             <h1>This is stats Page</h1>
//         </div>
//     );
// };

// export default StatsPage;




























// "use client";

// import { useEffect, useState } from "react";

// const StatsPage = () => {
//   const [stats, setStats] = useState({
//     call: 0,
//     text: 0,
//     video: 0,
//   });

//   useEffect(() => {
//     const data =
//       JSON.parse(sessionStorage.getItem("timeline")) || [];

//     const result = {
//       call: 0,
//       text: 0,
//       video: 0,
//     };

//     data.forEach((item) => {
//       if (item.type === "call") result.call++;
//       if (item.type === "text") result.text++;
//       if (item.type === "video") result.video++;
//     });

//     setStats(result);
//   }, []);

//   return (
//     <div className="w-9/12 mx-auto mt-10">

//       <h1 className="text-4xl font-bold mb-6">
//         Stats Page
//       </h1>

//       <div className="grid grid-cols-3 gap-4">

//         <div className="p-6 bg-gray-100 rounded-lg text-center">
//           <h2 className="text-2xl font-bold">Call</h2>
//           <p className="text-3xl">{stats.call}</p>
//         </div>

//         <div className="p-6 bg-gray-100 rounded-lg text-center">
//           <h2 className="text-2xl font-bold">Text</h2>
//           <p className="text-3xl">{stats.text}</p>
//         </div>

//         <div className="p-6 bg-gray-100 rounded-lg text-center">
//           <h2 className="text-2xl font-bold">Video</h2>
//           <p className="text-3xl">{stats.video}</p>
//         </div>

//       </div>

//     </div>
//   );
// };

// export default StatsPage;

























"use client";

import { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from "recharts";

const StatsPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const timeline =
      JSON.parse(sessionStorage.getItem("timeline")) || [];

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
    <div className="w-9/12 mx-auto mt-10">

      <h1 className="text-3xl font-bold mb-6">
        By Interaction Type
      </h1>

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
  );
};

export default StatsPage;