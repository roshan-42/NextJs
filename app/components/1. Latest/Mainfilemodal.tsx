import React from "react";

const Mainfilemodal = ({ onClose }: any) => {
  return (
    <div className="inset-0">
      <div className="bg-blue-400">
        <button
          onClick={() => onClose()}
          className="bg-green-800 border-2 border-white p-2 rounded-full"
        >
          Close
        </button>
        <div>
          <p>Welcome to this modal</p>
          <button className="bg-green-800 border-2 border-white p-2 rounded-full">
            First Button
          </button>
          <button className="bg-green-800 border-2 border-white p-2 rounded-full">
            Second Button
          </button>
        </div>
      </div>
    </div>
  );
};

export default Mainfilemodal;
