import Link from "next/link";
import React from "react";

const notFoundPage = () => {
  return (
    <div>
      <div className="h-screen flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-9xl font-bold text-[#244D3F]">404</h1>
        <p className="text-2xl mt-4 text-black">
          Page Not Found.
        </p>

        <Link
          href="/"
          className="mt-6 px-4 py-2 bg-green-700 text-white rounded-lg"
        >
          <button className="text-3xl font-bold cursor-pointer">Go Home</button>
        </Link>
      </div>
    </div>
  );
};

export default notFoundPage;
