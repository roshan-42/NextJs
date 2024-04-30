"use client";
import React, { useState, useEffect } from "react";

// const Cart = () => {
//   const [cartItems, setCartItems] = useState([]);

//   useEffect(() => {
//     const storedItems = localStorage.getItem("cartItems");
//     if (storedItems) {
//       setCartItems(JSON.parse(storedItems));
//     }
//   }, []);
const Cart = () => {
  const storedItemsJSON = localStorage.getItem("key");
  console.log("@@@@@@@@@@@@@", storedItemsJSON);
  let storedItems = storedItemsJSON ? JSON.parse(storedItemsJSON) : [];
  console.log("______________", storedItems);

  return (
    <div className=" flex flex-col justify-center   items-center h-screen">
      {storedItems.map((item: any, index: any) => (
        <div
          className="bg-white shadow-lg w-[30%] flex justify-between p-5 "
          key={index}
        >
          <div className="flex flex-col">
            <p>name:{item.name}</p>
            <p>price:{item.price}</p>
          </div>

          <div>
            <button className="bg-red-500 text-white p-1 px-2 rounded-md">
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
