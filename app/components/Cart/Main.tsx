"use client";
import React from "react";
import Products from "./Products";

import { useDispatch, useSelector } from "react-redux";

import { decrement, increment } from "@/Store/Slices/Counter";

const Main = () => {
  const count = useSelector((state: any) => state.counter.value);

  return (
    <div>
      <div className="bg-gray-300 px-8 p-5 flex gap-5">
        <button className="bg-orange-500 px-2 rounded-lg">Cart</button>
        <p>{count}</p>
      </div>
      <div>
        <Products />
      </div>
    </div>
  );
};

export default Main;
