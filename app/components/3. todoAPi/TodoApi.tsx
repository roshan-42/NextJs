"use client";
import React, { useState } from "react";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const TodoApi = () => {
  const [show, setShow] = useState(true);
  const [title, setTitle] = useState("");
  const [storeID, setStoreID] = useState(0);
  const [description, setDescription] = useState("");

  //   ===========================Get request using SWR============================
  const { data, error, mutate } = useSWR(
    "http://127.0.0.1:8000/todo/",
    fetcher
  );
  console.log("data..............", data);

  //   =====================Post request==================================

  const handleAdd = async () => {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        description: description,
      }),
    };
    const response = await fetch("http://127.0.0.1:8000/todo/", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        mutate();
        setTitle("");
        setDescription("");
      })
      .catch((error) => console.error(error));
  };

  //======================================Delete Request=============================================

  const handleDelete = async (itemID) => {
    const requestOptions = {
      method: "DELETE",
    };
    const response = await fetch(
      `http://127.0.0.1:8000/todo/${itemID}/`,
      requestOptions
    )
      .then((response) => {
        // response.json();
        console.log(response);
        if (response.status === 204) {
          mutate();
        }
      })
      .catch((error) => console.error(error));
  };

  //   =====================================Patch Request=================================

  const handleUpdate = async () => {
    const requestOptions = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        description: description,
      }),
    };
    const response = await fetch(
      `http://127.0.0.1:8000/todo/${storeID}/`,
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        mutate();
        setTitle("");
        setStoreID(0);
        setDescription("");
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="text-black  h-screen flex flex-col gap-10 items-center justify-center">
      <div className="flex flex-col gap-2">
        <input
          onChange={(e) => setTitle(e.target.value)}
          className="p-3 rounded-xl"
          type="text"
          value={title}
          placeholder="enter title here"
        />
        <input
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          className="p-3 rounded-xl"
          value={description}
          type="text"
          placeholder="enter title description"
        />
        <button
          onClick={handleAdd}
          className={` ${
            !show ? "hidden" : "block"
          } bg-blue-400 px-4 rounded-md text-white`}
        >
          Add
        </button>
        <button
          onClick={() => {
            setShow(!show);
            handleUpdate();
          }}
          className={` ${
            !show ? "block" : "hidden"
          }   bg-blue-400 px-4 rounded-md text-white`}
        >
          Update
        </button>
      </div>

      <div>
        {data?.map((item, index) => (
          <div className="flex justify-between gap-5">
            <div className="flex flex-col gap-3">
              <p className="font-bold text-xl">{item.title}</p>
              <p>{item.description}</p>
            </div>

            <button
              onClick={() => handleDelete(item.id)}
              className="bg-red-500 text-white px-3 border rounded-xl  "
            >
              Delete
            </button>

            <button
              onClick={() => {
                setShow(false);
                setTitle(item.title);
                setDescription(item.description);
                setStoreID(item.id);
              }}
              className="bg-red-500 text-white px-3 border rounded-xl "
            >
              Update
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoApi;
