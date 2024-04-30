import { RootState } from "@/Store/Store";
import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "@/Store/Slices/Counter";

const Products = () => {
  const count: Number = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  localStorage.setItem("count", JSON.stringify(0));

  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]);

  const Products = [
    {
      id: 1,
      name: "first",
      price: 400,
    },
    {
      id: 2,
      name: "second",
      price: 400,
    },
    {
      id: 3,
      name: "third",
      price: 400,
    },
    {
      id: 4,
      name: "fourth",
      price: 400,
    },
    {
      id: 5,
      name: "fifth",
      price: 400,
    },
  ];
  const storeDataInLocalStorage = (item: any) => {
    let initialItemsJSON = localStorage.getItem("key");
    // console.log(initialItemsJSON);
    let initialItems = initialItemsJSON ? JSON.parse(initialItemsJSON) : [];
    console.log("______________", initialItems);
    initialItems.push(item);
    localStorage.setItem("key", JSON.stringify(initialItems));
  };
  // let initialItemsJSON = localStorage.getItem("key");
  // console.log(initialItemsJSON);
  // let initialItems = initialItemsJSON ? JSON.parse(initialItemsJSON) : [];
  // console.log(initialItems);
  // initialItems.push(item);
  // localStorage.setItem("key", JSON.stringify(initialItems));
  return (
    <div className=" h-screen flex items-center justify-center">
      <div className=" gap-5 flex">
        {Products.map((item, index) => (
          <div className="bg-gray-300 w-fit flex flex-row gap-5 p-5">
            <div className="flex flex-col">
              <div className="bg-blue-400">Image</div>
              <p>{item.name}</p>
              <p>{item.price}</p>
              <div></div>
              <button
                onClick={() => {
                  dispatch(increment());
                  storeDataInLocalStorage(item);
                }}
                className="bg-orange-500 px-4 rounded-lg"
              >
                Add to cart
              </button>
              <p>{count}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
