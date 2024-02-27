"use client";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import Image from "next/image";
import Modal from "./Modal";

const Home = () => {
  const [isOpen, setOpen] = useState(false);

  const image_url = [
    "https://cdn.pixabay.com/photo/2023/11/20/10/40/vietnam-8400803_1280.jpg",
    "https://cdn.pixabay.com/photo/2024/01/04/21/54/volcano-8488486_1280.jpg",
    "https://cdn.pixabay.com/photo/2023/09/30/18/25/goose-8286275_1280.jpg",
  ];
  return (
    <div className="relative">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {image_url.map((item, index) => (
          <SwiperSlide key={index}>
            <div>
              <Image
                src={item}
                alt=""
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "100vh" }}
              />
              <button
                onClick={() => setOpen(!isOpen)}
                className="bg-blue-500 absolute rounded-full p-3 top-[50%] left-[45%]"
              >
                Click me
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } z-50 absolute top-[40%] border w-full flex justify-center`}
      >
        <Modal isVisible={isOpen} onClose={() => setOpen(false)} />
      </div>
    </div>
  );
};

export default Home;
