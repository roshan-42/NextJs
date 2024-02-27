"use client";
import React, { useState } from "react";

const Todo = () => {
  const [text, setText] = useState("");
  const [click, setClick] = useState([]);
  return (
    <div>
      <p>{click}</p>
      <input
        onChange={(e) => setText(e.target.value)}
        type="text"
        placeholder="input "
      />
      <button
        onClick={() => setClick([...click, text])}
        className="bg-green-600 rounded-full p-2"
      >
        Click
      </button>
    </div>
  );
};

export default Todo;
