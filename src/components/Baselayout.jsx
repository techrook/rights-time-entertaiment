import React from "react";

function Baselayout({ children }) {
  return (
    <div className="grid h-screen w-full place-items-center gap-0 bg-gray-800 text-white">
      <div className="w-full h-full p-4">{children}</div>
    </div>
  );
}

export default Baselayout;