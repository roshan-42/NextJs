"use client";
import React, { useState } from "react";
import Mainfilemodal from "./Mainfilemodal";

const Mainfile = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-red-800 border-2 border-white p-2 rounded-full"
      >
        Click Me
      </button>
      <div className={`${isOpen ? "flex" : "hidden"}`}>
        <Mainfilemodal onClose={() => setIsOpen(false)} />
      </div>
    </div>
  );
};

export default Mainfile;
