import React from "react";
import { useNavigate } from "react-router-dom";
import './Testimonials.css';
const Testimonials = () => {
  const nav =  useNavigate();

  return (
    <>
    <h1 style={{fontSize:"40px",color: "#ff69b4",fontFamily:"serif",alignItems:"center",display:"flex",justifyContent:"center",paddingTop:"40px"}}>Testimonials</h1>

      <div className="ccustom-container">
        <div className="ccustom-overlay">
         
          <img src="https://confetti.html.themeforest.createit.pl/assets/images/demo-content/jhorse.png" alt="Left Image 1" className="left-image" />
          <div className="cheading-container">
            <h1 className="cmain-heading" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>Main Heading</h1>
            <p className="csubtitle">Subtitle or additional text goes here</p>
            
            <button className="cbutton_posts" onClick={() => nav("/testimony")}>Read More</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;