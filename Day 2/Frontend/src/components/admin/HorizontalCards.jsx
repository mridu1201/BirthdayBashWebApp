import React from 'react';
import { TiTick } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";

function HorizontalCards({name, date, location, theme, img }) {
  return (
    <div className='flex flex-row justify-between border border-gray-200 p-4 rounded-lg shadow-md mb-4' style={{ maxWidth: '60vw', marginLeft:'380px' }}>
      <div className='flex flex-col'>
        <h5 className='font-bold text-gray-600'>Theme</h5>
        <img src={img} alt="" className='w-16 h-16 rounded-full mt-2' />
        <p className='mt-2 text-gray-700'>{theme}</p>
      </div>
      <div className='flex flex-col'>
        <h5 className='font-bold text-gray-600'>Name</h5>
        <div className='w-full h-12 mt-10 text-gray-700'>{name}</div>
      </div>
      <div className='flex flex-col'>
        <h5 className='font-bold text-gray-600'>Date</h5>
        <div className='w-full h-12 mt-10 text-gray-700'>{date}</div>
      </div>
      <div className='flex flex-col'>
        <h5 className='font-bold text-gray-600'>Location</h5>
        <div className='w-full h-12 mt-10 text-gray-700'>{location}</div>
      </div>
      <div className='flex flex-col'>
        <h5 className='font-bold text-gray-600'>Accept/Reject</h5>
        <div className='flex flex-row justify-between mt-8'>
          <button className='rounded-full border-2 border-green-700 bg-green-200'><TiTick size={28} className='fill-green-700'/></button>
          <button className='rounded-full border-2 border-red-600 bg-red-200'><RxCross2 size={28} style={{fontWeight:'100px', color:'red'}}/></button>
        </div>
      </div>
      <div className='flex flex-col'>
        <h5 className='font-bold text-gray-600 text-center'>Status</h5>
        <button className='mt-8 border-2 border-blue-500 bg-blue-200 rounded-lg text-blue-900 p-1'>Task Accomplished?</button>
      </div>
    </div>
  );
}

export default HorizontalCards;
