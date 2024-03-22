import React from "react";
export default function MenuItem({ name, category, price, image }) {
    return (
      <div className="flex items-center justify-between border border-gray-200 p-4 rounded-lg shadow-md mb-4 max-w-xs ml-10 transform transition duration-300 ease-in-out hover:-translate-y-1 hover:shadow-blue-200">
        <img src={image} alt={name} className="w-16 h-16 mr-4" />
        <div>
          <h5 className="text-lg font-bold">{name}</h5>
          <p className="text-sm text-gray-500">{category}</p>
        </div>
        <div>
          <p className="text-lg font-bold">Rs.{price}</p>
        </div>
      </div>
    );
  }