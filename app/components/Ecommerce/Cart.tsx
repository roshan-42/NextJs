"use client";
import React from "react";

const Cart = () => {
  let product_dataJSON = localStorage.getItem("products");
  let product_data = product_dataJSON ? JSON.parse(product_dataJSON) : "";
  console.log(product_data);

  let item_quantity = (id) => {
    return product_data.filter((item) => item.id == id).length;
  };
  console.log("Item_quantity_________", item_quantity);

  return (
    <div className="bg-white h-screen flex items-center justify-center">
      <div className="w-[40%]">
        <p>Cart Items:</p>
        <div className=" shadow-md flex flex-wrap gap-10">
          {product_data.map((item: any, index: any) => (
            <div className="bg-white shadow-lg p-5 px-10" key={index}>
              <div className="flex ">
                <p>Product Name:</p>
                <span>{item.name} </span>
                <div>Quantity:{item_quantity(item.id)}</div>
              </div>

              <p>
                Price:<span>{item.price} </span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
