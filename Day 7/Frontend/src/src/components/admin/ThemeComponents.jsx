import React from 'react';

function ThemeComponents({ title, theme, person, price }) {
  return (
    <div>     
      <div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 hover:shadow-blue-300 ml-10">
        <a href="#">
          <img className="rounded-t-lg w-full h-40 object-cover" src="https://cdn.cherishx.com/uploads/1682317184_large.jpg" alt="" />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{title}</h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{theme}</p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{person}</p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{price}</p>
        </div>
      </div>
    </div>
  );
}

export default ThemeComponents;
