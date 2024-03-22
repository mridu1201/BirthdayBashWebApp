import React from 'react';

function AdminCards({ title, value }) {
  return (
    <div className="">
      <a className="block w-40 h-full p-4 bg-white border border-gray-200 rounded-lg shadow-lg ">
        <h6 className="mb-2 text-lg font-bold tracking-tight text-gray-900">{title}</h6>
        <p className="text-base font-normal text-gray-900">{value}</p>
      </a>
    </div>
  );
}

export default AdminCards;
