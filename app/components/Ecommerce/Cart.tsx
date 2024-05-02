"use client";
import React, { useState, useEffect } from "react";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const storeProduct = (item: any) => {
    let initialdataJSON = localStorage.getItem("products");
    let initialData = initialdataJSON ? JSON.parse(initialdataJSON) : [];
    console.log("initial data___________", initialData);
    initialData.push(item);

    localStorage.setItem("products", JSON.stringify(initialData));
    setCartItems(initialData);
  };

  const decrement = (itemID) => {
    const indexToremove = cartItems.findIndex((item) => item.id == itemID);
    let updatedCart = [...cartItems];
    updatedCart.splice(indexToremove, 1);
    localStorage.setItem("products", JSON.stringify(updatedCart));
    setCartItems(updatedCart);
  };

  useEffect(() => {
    const cartDataJSON = localStorage.getItem("products");
    const cartData = cartDataJSON ? JSON.parse(cartDataJSON) : [];
    setCartItems(cartData);
  }, []);

  const itemQuantity = (itemID) => {
    return cartItems.filter((item) => item.id == itemID).length;
  };
  console.log("total items======================", itemQuantity);

  const itemOccurance = () => {
    let sameItems = [];
    cartItems.map((item) => {
      const checkedSameID = sameItems.find((sItems) => sItems.id === item.id);
      if (!checkedSameID) {
        sameItems.push(item);
      }
    });
    return sameItems;
  };

  const removeItem = (itemID) => {
    const newCartItems = cartItems.filter((nitem) => nitem.id !== itemID);

    setCartItems(newCartItems);
    return newCartItems;
  };

  return (
    <div className="bg-white h-screen flex items-center justify-center">
      <div className="w-[40%]">
        <p>Cart Items:</p>
        <div className=" shadow-md flex flex-wrap gap-10">
          {itemOccurance().map((item, index) => (
            <div className="bg-white shadow-lg p-5 px-10" key={index}>
              <div className="flex">
                <p>Product Name:</p>
                <span>{item.name} </span>
              </div>
              <p>
                Price:<span>{item.price} </span>
              </p>
              <div className="flex gap-3">
                <button
                  onClick={() => decrement(item.id)}
                  className="bg-black text-white p-1 rounded-md w-4"
                >
                  -
                </button>
                <div>Quantity: {itemQuantity(item.id)} </div>
                <button
                  onClick={() => storeProduct(item)}
                  className="bg-black text-white p-1 rounded-md w-4"
                >
                  +
                </button>
              </div>
              <button
                onClick={() => removeItem(item.id)}
                className="bg-red-400 px-5 rounded-lg mt-5"
              >
                {" "}
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
