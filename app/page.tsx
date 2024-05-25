import React from "react";
import Image from "next/image";
import Home from "./components/Landing/Home";
import Try from "./components/Landingrev/Try";
import Hero from "./components/Modal/Hero";
import Mainfilemodal from "./components/1. Latest/Mainfilemodal";
import Mainfile from "./components/1. Latest/Mainfile";
import Todo from "./components/2. ToDo practice/Todo";
import Products from "./components/Ecommerce/Products";
import TodoApi from "./components/3. todoAPi/TodoApi";
import EcommerceAPI from "./components/EcommercewithAPI/EcommerceAPI";
import Inbox from "./components/ReuseableComponents/Inbox";
import This from "./components/ReuseableComponents/This";

export default function Page() {
  return (
    <div>
      {/* <Home /> */}
      {/* <Try /> */}
      {/* <Hero /> */}
      {/* <Mainfile />
      ================================
      <Todo /> */}
      {/* <Products /> */}
      {/* <TodoApi /> */}
      {/* <EcommerceAPI /> */}
      <This />

      <Inbox />
    </div>
  );
}
