"use client";
import React, { useState } from "react";

const HeroModal = ({ isVisible, onClose }) => {
  if (!isVisible) return null;
  //if is visible is not set return null
  return (
    <div className=" fixed inset-0 flex justify-center items-center">
      <div className="flex flex-col bg-blue-500 p-5 rounded-xl">
        <button
          onClick={() => onClose()}
          className="bg-green-600 border w-fit border-white p-1 rounded-full"
        >
          X
        </button>

        <div className="flex flex-col gap-3">
          <p>hello heading</p>
          <button className="bg-green-600 border border-white p-2 rounded-full">
            Click1
          </button>
          <button className="bg-green-600 border border-white p-2 rounded-full">
            click2
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroModal;
