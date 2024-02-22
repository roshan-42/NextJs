"use client";
import React, { useState } from "react";
import Modalsec from "./Modalsec";

const Try = () => {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <div className="relative ">
      <img
        src="https://cdn.pixabay.com/photo/2024/01/25/12/30/forest-8531787_1280.jpg"
        alt=""
      />
      <div className="absolute top-[50%]">
        <button
          onClick={() => setIsVisible(!isVisible)}
          className=" bg-blue-400 p-3 rounded-full"
        >
          Click mee
        </button>
      </div>
      <div
        className={`absolute ${
          isVisible ? "flex" : "hidden"
        } flex justify-center top-10 w-full`}
      >
        <Modalsec />
      </div>
    </div>
  );
};

export default Try;
