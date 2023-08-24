import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function RentPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("/rent")
      .then((response) => {
        setItems(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="flex flex-row justify-around border-2  border-[#0C6164] py-4 px-6">
        <div className="flex border border-gray rounded-full py-2 px-2 shadow-md shadow-gray-300 items-center">
          <input
            placeholder={searchTerm ? searchTerm : "Search for item...."}
            type="text"
            className="border border-gray rounded-full search px-60  text-[#0C6164]"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="bg-primary rounded-full text-[#0C6164] font-bold p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="justify-center ml-2 mt-5 mb-5 grid gap-x-20 gap-y-8 grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        {filteredItems.length > 0 &&
          filteredItems.map((item, index) => (
            <Link to={"/rent/" + item._id} key={index}>
              <div
                key={index}
                className="mr-3 flex justify-center shrink-0 gap-4 border-2 border-[#0C6164] bg-slate-100 p-4 rounded-2xl"
              >
                <div className="justify-center">
                  {item.photos?.[0] && (
                    <img
                      className="rounded-lg object-cover aspect-square"
                      src={"http://localhost:4000/" + item.photos?.[0]}
                      alt="photo"
                    />
                  )}
                  <hr className="border-b border-[#0C6164] my-2  border-0.1"></hr>
                  <div className="mt-1 text-center flex justify-center">
                    <h2 className="font-bold text-center mr-5">{item.title} </h2>
                    <span className="font-bold justify-center mr-1">${item.price}</span>
                    <span className="text-xs mt-2">per day</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}
