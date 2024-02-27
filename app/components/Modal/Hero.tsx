"use client";
import React, { useState } from "react";
import HeroModal from "./HeroModal";

const Hero = () => {
  const [showModal, setShowmodal] = useState(false);

  return (
    <div>
      <div className="w-full flex items-center justify-center ">
        <button
          onClick={() => setShowmodal(true)}
          className="bg-green-600 border border-white rounded-full p-2  mt-11   "
        >
          Modal button
        </button>
        <HeroModal isVisible={showModal} onClose={() => setShowmodal(false)} />
      </div>
    </div>
  );
};

export default Hero;
