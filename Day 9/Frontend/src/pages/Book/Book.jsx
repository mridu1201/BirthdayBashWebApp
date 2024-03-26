import React from 'react';
import './Book.css';

const Book = () => {
  const handleFocus = (event) => {
    event.target.style.outlineColor = '#ff69b4'; // Change outline color on focus
  };

  const handleBlur = (event) => {
    event.target.style.outlineColor = ''; // Reset outline color on blur
  };

  return (
    <form className="elegant-form">
      <div className="form-group">
        <input type="text" placeholder="Name" required className="form-control" onFocus={handleFocus} onBlur={handleBlur} />
      </div>
      <div className="form-group">
        <input type="text" placeholder="Address" required className="form-control" onFocus={handleFocus} onBlur={handleBlur} />
      </div>
      <div className="form-group">
        <input type="email" placeholder="Email" required className="form-control" onFocus={handleFocus} onBlur={handleBlur} />
      </div>
      <div className="form-group">
        <input type="text" placeholder="City" required className="form-control" onFocus={handleFocus} onBlur={handleBlur} />
      </div>
      <div className="form-group">
        <input type="text" placeholder="State" required className="form-control" onFocus={handleFocus} onBlur={handleBlur} />
      </div>
      <div className="form-group">
        <input type="text" placeholder="Zipcode" required className="form-control" onFocus={handleFocus} onBlur={handleBlur} />
      </div>
      <div className="form-group">
        <input type="text" placeholder="Event Location" required className="form-control" onFocus={handleFocus} onBlur={handleBlur} />
      </div>
      <div className="form-group">
        <input type="text" placeholder="Event Theme" required className="form-control" onFocus={handleFocus} onBlur={handleBlur} />
      </div>
      <div className="form-group">
        <input type="number" placeholder="Number of Guests" required className="form-control" onFocus={handleFocus} onBlur={handleBlur} />
      </div>
      <div className="form-group">
        <input type="text" placeholder="Guests Age Range" required className="form-control" onFocus={handleFocus} onBlur={handleBlur} />
      </div>
      <div className="form-group">
        <input type="date" className="form-control" onFocus={handleFocus} onBlur={handleBlur} />
      </div>
      <button type="submit" className="btn btn-motive">Submit</button>
    </form>
  );
};

export default Book;

// import React from 'react';
// import './Book.css'; // Import your CSS file for styling

// const Book = () => {
//   const handleFocus = (event) => {
//     event.target.style.outlineColor = '#ff69b4'; // Change outline color on focus
//   };

//   const handleBlur = (event) => {
//     event.target.style.outlineColor = ''; // Reset outline color on blur
//   };

//   return (
//     <form className="elegant-form">
//       <div className="row">
//         <div className="col-md-6">
//           <div className="form-group">
//             <input type="text" placeholder="Name" required className="form-control" onFocus={handleFocus} onBlur={handleBlur} />
//           </div>
//           <div className="form-group">
//             <input type="text" placeholder="Address" required className="form-control" onFocus={handleFocus} onBlur={handleBlur} />
//           </div>
//           <div className="form-group">
//             <input type="email" placeholder="Email" required className="form-control" onFocus={handleFocus} onBlur={handleBlur} />
//           </div>
//           <div className="form-group">
//             <input type="text" placeholder="City" required className="form-control" onFocus={handleFocus} onBlur={handleBlur} />
//           </div>
//           <div className="form-group">
//             <input type="text" placeholder="State" required className="form-control" onFocus={handleFocus} onBlur={handleBlur} />
//           </div>
//         </div>
//         <div className="col-md-6">
//           <div className="form-group">
//             <input type="text" placeholder="Zipcode" required className="form-control" onFocus={handleFocus} onBlur={handleBlur} />
//           </div>
//           <div className="form-group">
//             <input type="text" placeholder="Event Location" required className="form-control" onFocus={handleFocus} onBlur={handleBlur} />
//           </div>
//           <div className="form-group">
//             <input type="text" placeholder="Event Theme" required className="form-control" onFocus={handleFocus} onBlur={handleBlur} />
//           </div>
//           <div className="form-group">
//             <input type="number" placeholder="Number of Guests" required className="form-control" onFocus={handleFocus} onBlur={handleBlur} />
//           </div>
//           <div className="form-group">
//             <input type="text" placeholder="Guests Age Range" required className="form-control" onFocus={handleFocus} onBlur={handleBlur} />
//           </div>
//           <div className="form-group">
//             {/* <label>Date of Birth:</label> */}
//             <input type="date" className="form-control" onFocus={handleFocus} onBlur={handleBlur} />
//           </div>
//         </div>
//       </div>
//       <button type="submit" className="btn btn-motive">Submit</button>
//     </form>
//   );
// };

// export default Book;
