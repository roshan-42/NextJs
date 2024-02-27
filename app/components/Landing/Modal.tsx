"use client";
import React, { useState } from "react";

const Modal = ({ isVisible, onClose }: any) => {
  const [showDiv, setShowDiv] = useState(0);
  return (
    // ==========Entire div=====================
    <div
      className={`${
        isVisible ? "flex" : "hidden"
      } bg-gray-800 w-[50%] p-4 items-center justify-center flex-col`}
    >
      {/* ========================cross button===================== */}
      {/* ========================cross button===================== */}

      {/* ========================cross button===================== */}

      <div className="z-30 p-2 w-full">
        <button
          onClick={() => onClose(3)}
          className=" bg-green-400 p-2 rounded-full"
        >
          Close
        </button>
      </div>

      {/* ========For title and buttons============= */}
      <div className="flex flex-col gap-3">
        <div className="">
          <p className="text-3xl">Langtang Trek</p>
        </div>
        <div className="flex gap-2">
          <button className="w-14 bg-white p-1 rounded-full"></button>
          <button className="w-14 bg-white p-1 rounded-full"></button>
          <button className="w-14 bg-white p-1 rounded-full"></button>
          <button className="w-14 bg-white p-1 rounded-full"></button>
        </div>
      </div>
      {/* ================body part================== */}
      {/* =======================first div================== */}
      <div
        className={`${showDiv == 0 ? "flex" : "hidden"}  flex-col gap-3 mt-2`}
      >
        <p>Are you looking to customize your own tour</p>
        <div className="flex flex-col gap-3">
          <button
            onClick={() => {
              setShowDiv(1);
            }}
            className="bg-green-800 border border-white rounded-full p-3"
          >
            customize your tour
          </button>
          <button className="bg-green-800 border border-white rounded-full p-3">
            Join a Tour
          </button>
        </div>
      </div>
      {/* ================second div============================== */}
      <div
        className={`${
          showDiv == 1 ? "flex" : "hidden"
        } flex-col gap-2 text-3xl`}
      >
        <p>Second Div: Are you creating this tour for yourserlf?</p>
        <button
          onClick={() => setShowDiv(2)}
          className="bg-green-800 border border-white rounded-full "
        >
          Yes, I am creating
        </button>
        <button className="bg-green-800 border border-white rounded-full ">
          No, I am not creating
        </button>
      </div>
      {/* ====================Third Div======================== */}
      <div
        className={`${
          showDiv == 2 ? "flex" : "hidden"
        } flex-col gap-2 text-3xl`}
      >
        <p className="text-3xl">How experienced you are?</p>
        <button
          onClick={() => {
            onClose();
            setShowDiv(0);
          }}
          className="bg-green-600 p-2 border-2 border-white rounded-full"
        >
          Beginner
        </button>
        <button className="bg-green-600 p-2 border-2 border-white rounded-full">
          Advanced
        </button>
        <button className="bg-green-600 p-2 border-2 border-white rounded-full">
          Expert
        </button>
      </div>
    </div>
  );
};

export default Modal;
