import React from "react";

const Navbar = () => {
  return (
    <div className="bg-black text-white h-14 flex items-center px-10 justify-between">
      <div>Navbar</div>
      <div>
        <button className="bg-orange-500 px-4 text-black rounded-xl">
          cartitems
        </button>{" "}
      </div>
      <div></div>
    </div>
  );
};

export default Navbar;
