import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <>
    <h1 className="h4 ct-form-section__title text-left" style={{fontSize:"40px",color: "#ff69b4",fontFamily:"serif",alignItems:"center",display:"flex",justifyContent:"center",paddingTop:"40px"}}>Get In Touch</h1>
    <div className="contact-us-container">
      <div className="image-section">
        <img src="https://th.bing.com/th/id/OIP.EAwBCFrwDh50wI7uFKAa0QHaFI?w=252&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Contact Us" style={{marginTop:"50PX",display:"flex",justifyContent:"center"}}/>
      </div>
      <div className="form-section">
        <div className="form-row">
          <label>Name:</label>
          <input type="text" />
        </div>
        <div className="form-row">
          <label>Email:</label>
          <input type="email" />
        </div>
        <div className="form-row">
          <label>Message:</label>
          <textarea rows="4"></textarea>
        </div>
        <button className="submit-button">Submit</button>
      </div>
    </div>
    </>
  );
}

export default Contact;

// import React, { useState } from 'react';
// import './Contact.css'; // Import your CSS file for styling

// const Contact = () => {
//   const [focused, setFocused] = useState(false);

//   const handleFocus = () => {
//     setFocused(true);
//   };
   
//   const handleBlur = () => {
//     setFocused(false);
//   };

//   return (
//     <div className="ct-form-section ct-form-section--type2">
//       <h1 className="h4 ct-form-section__title text-left" style={{fontSize:"40px",color: "#ff69b4",fontFamily:"serif",alignItems:"center",display:"flex",justifyContent:"center",paddingTop:"40px"}}>Get In Touch</h1>
//       <form
//         action="assets/form/send.php"
//         method="POST"
//         data-email-subject="My Confetti"
//         className="ct-js-validate ct-form-section__form"
//       >
//         <h2 className="ct-form-section__header" style={{fontSize:"20px",color: "#ff69b4",fontFamily:"serif",alignItems:"center",display:"flex",justifyContent:"center",paddingTop:"5px"}}>We promise to get back to you within 48h.</h2>
//         <div className="row">
//           <div className="col-sm-6" style={{display:"grid",justifyContent:"center",marginLeft:"650px",alignItems:"center"}}>
//             <div className="form-group">
//               <input
//                 type="text"
//                 placeholder="Name"
//                 id="name"
//                 name="field[]"
//                 required="required"
//                 className={`form-control ${focused ? 'focused' : ''}`}
//                 onFocus={handleFocus}
//                 onBlur={handleBlur}
//               />
//               <label htmlFor="name" className="sr-only">Name</label>
//             </div>
//             <div className="form-group">
//               <input
//                 type="email"
//                 placeholder="Email"
//                 id="email"
//                 name="field[]"
//                 required="required"
//                 className={`form-control ${focused ? 'focused' : ''}`}
//                 onFocus={handleFocus}
//                 onBlur={handleBlur}
//               />
//               <label htmlFor="email" className="sr-only">Email</label>
//             </div>
//             <div className="form-group">
//               <input
//                 type="text"
//                 placeholder="Website"
//                 id="website"
//                 name="field[]"
//                 required="required"
//                 className={`form-control ${focused ? 'focused' : ''}`}
//                 onFocus={handleFocus}
//                 onBlur={handleBlur}
//               />
//               <label htmlFor="website" className="sr-only">Website</label>
//             </div>
//           </div>
//           <div className="col-sm-6">
//             <div className="form-group">
//               <textarea
//                 placeholder="Message"
//                 id="message"
//                 rows="7"
//                 required="required"
//                 name="field[]"
//                 className={`form-control ${focused ? 'focused' : ''}`}
//                 onFocus={handleFocus}
//                 onBlur={handleBlur}
//               ></textarea>
//               <label htmlFor="message" className="sr-only" style={{marginLeft:"300px"}}>Message</label>
//             </div>
//           </div>
//           {/* <div className="col-xs-12">
//             <button type="submit" className="btn btn-motive">Send</button>
//           </div> */}
//         </div>
//         <button className= "contact_submit">Submit</button>
//         {/* <div role="alert" className="successMessage alert alert-success alert-dismissible">
//            <button type="button" data-dismiss="alert" aria-label="Close" className="close"><span aria-hidden="true">×</span></button>Your Email has been sent successfully.
//         </div>
//         <div role="alert" className="errorMessage alert alert-danger alert-dismissible">
//           <button type="button" data-dismiss="alert" aria-label="Close" className="close"><span aria-hidden="true">×</span></button>Ups, something went wrong.
//         </div> */}
//       </form>
//     </div>
//   );
// };

// export default Contact;
