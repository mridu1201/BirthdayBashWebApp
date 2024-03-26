import React from "react";
import './Posts.css';
const Posts = () => {
  
  return (
    <>
      <div className="custom-container">
        <div className="custom-overlay">
         
          <img src="https://confetti.html.themeforest.createit.pl/assets/images/demo-content/jhorse.png" alt="Left Image 1" className="left-image" />
          <div className="heading-container">
            <h1 className="main-heading" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>Main Heading</h1>
            <p className="subtitle">Subtitle or additional text goes here</p>
            <button className="button_posts">Read</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Posts;
