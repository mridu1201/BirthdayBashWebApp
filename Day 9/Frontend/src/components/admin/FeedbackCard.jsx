// import React, { useState } from 'react';

// function FeedbackCard({ name, date, message }) {
//   const [expanded, setExpanded] = useState(false);

//   const truncateMessage = (message, wordCount) => {
//     const words = message.split(' ');
//     if (words.length > wordCount) {
//       return words.slice(0, wordCount).join(' ') + '...';
//     }
//     return message;
//   };

//   return (
//     <div className='flex flex-row justify-between border border-gray-200 p-4 rounded-lg shadow-md mb-4' style={{ maxWidth: '60vw', marginLeft: '380px' }}>
//       <div className='flex flex-col'>
//         <h5 className='font-bold text-gray-600'>Name</h5>
//         <p className='mt-2 text-gray-700'>{name}</p>
//       </div>
//       <div className='flex flex-col'>
//         <h5 className='font-bold text-gray-600'>Date</h5>
//         <div className='w-full h-12 mt-2 text-gray-700'>{date}</div>
//       </div>
//       <div className='flex flex-col'>
//         <h5 className='font-bold text-gray-600'>Message</h5>
//         <div className='w-full h-12 mt-2 text-gray-700'>
//           {expanded ? message : truncateMessage(message, 8)}
//           {!expanded && message.split(' ').length > 10 && <button className='text-blue-500' onClick={() => setExpanded(true)}>...View More</button>}
//           {expanded && <button className='text-blue-500' onClick={() => setExpanded(false)}>View Less</button>}
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState } from 'react';

function FeedbackCard({ name, date, message }) {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className='flex flex-row justify-between border border-gray-200 p-4 rounded-lg shadow-md mb-4' style={{ maxWidth: '60vw', marginLeft: '380px' }}>
      <div className='flex flex-col'>
        <h5 className='font-bold text-gray-600'>Name</h5>
        <p className='mt-2 text-gray-700'>{name}</p>
      </div>
      <div className='flex flex-col'>
        <h5 className='font-bold text-gray-600'>Date</h5>
        <div className='w-full h-12 mt-2 text-gray-700'>{date}</div>
      </div>
      <div className='flex flex-col'>
        <h5 className='font-bold text-gray-600'>Message</h5>
        <div className='w-full h-12 mt-2 text-gray-700'>
          <button className='text-blue-500' onClick={() => setShowPopup(true)}>View Details</button>
        </div>
      </div>

      {showPopup && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center ml-20 bg-gray-700 bg-opacity-50">
          <div className="bg-white p-8 rounded-lg max-w-lg" style={{ maxHeight: '80vh', overflowY: 'auto' }}>
            <h2 className="text-xl font-bold mb-4">{name}'s Message</h2>
            <p className="text-gray-700">{message}</p>
            <button className="mt-4 px-4 py-2 bg-blue-700 text-white rounded-md" onClick={() => setShowPopup(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default FeedbackCard;

