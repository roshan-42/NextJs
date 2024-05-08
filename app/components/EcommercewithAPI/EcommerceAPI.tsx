"use client";
import Image from "next/image";
import React from "react";
import useSWR from "swr";
import Navbar from "./Navbar";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const EcommerceAPI = () => {
  // =================Get data==============================
  const { data, error } = useSWR(
    "http://api.fakeshop-api.com/products/getAllProducts",
    fetcher
  );
  console.log("data________________", data);

  // ==================Turnicat title name================================
  function truncateTitle(title, maxLength = 20) {
    return title.length > maxLength
      ? title.substring(0, maxLength - 3) + "..."
      : title;
  }
  // ===============================Post data (add to cart)==================================

  return (
    <div>
      <Navbar />
      <div className="h-screen flex flex-col items-center justify-center  p-5">
        <div className="flex flex-wrap gap-5 ">
          {data?.map((item, index) => (
            <div className=" shadow-xl p-2">
              <div>
                <div className="h-48 w-48  relative">
                  <Image
                    src={item.image}
                    layout="fill"
                    objectFit="contain"
                    alt=""
                  />
                </div>
              </div>
              <div className="">
                <div>
                  <p className="text-lg font-bold">
                    {truncateTitle(item.title)}
                  </p>
                  <p>{item.price}$</p>
                </div>

                <button className="bg-black px-4 h-fit text-white rounded-lg">
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EcommerceAPI;
