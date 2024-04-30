"use client";
import { stringify } from "querystring";
import React from "react";

const Products = () => {
  const product_list = [
    {
      id: 1,
      name: "first",
      price: 100,
    },
    {
      id: 2,
      name: "Second",
      price: 130,
    },
    {
      id: 3,
      name: "Third",
      price: 200,
    },
    {
      id: 4,
      name: "Fourth",
      price: 160,
    },
  ];
  const storeProduct = (item: any) => {
    let initialdataJSON = localStorage.getItem("products");
    let initialData = initialdataJSON ? JSON.parse(initialdataJSON) : [];
    console.log("initial data___________", initialData);
    initialData.push(item);

    localStorage.setItem("products", JSON.stringify(initialData));
  };
  return (
    <div className="bg-white h-screen flex items-center justify-center">
      <div className="flex gap-5">
        {product_list.map((item, index) => (
          <div className="bg-white shadow-lg">
            <p>Name: {item.name}</p>
            <p>Price: {item.price}</p>
            <button
              onClick={() => storeProduct(item)}
              className="bg-black px-5 rounded-xl text-white"
            >
              Add to cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
