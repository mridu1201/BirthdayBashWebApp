import React from 'react';
import './Background.css';
import { Header } from '../header/Header';
import Post from '../post/Post';
import Posts from '../posts/Posts';
import Hero from '../Hero/Hero';
import Categories from '../categories/Categories';
import Testimonials from '../Testimonials/Testimonials';
import Footer from '../../pages/Footer/Footer';

const Background = () => {
  
  return (
    <>
    <div className='background'>
      <Header className='nav' />
      <div className="overlay">
        <div className="overlay-content">
        <h1 style={{ margin: "0", padding: "0" }}>Parties & Birthdays With</h1>
          <h1 style={{ margin: "0", padding: "0", fontWeight: "700" }}>Personalized Fun!</h1>
          <br></br>
          <p style={{fontFamily:"inherit",fontSize:"20px"}}>We set up, organize, and supervise all of the festivities with fun, engaging, and age appropriate games & activities. Mom & Dad never have to worry about boredom or safety!</p>
          <br></br>
          <button>Click Me</button>
        </div>
      </div>
      <img
        src="https://confetti.html.themeforest.createit.pl/assets/images/demo-content/header-01.jpg"
        alt="Description of the image"
      />
    </div>
    <div>
      <Post/>
    </div>
    <br>
    </br>
    <br>
    </br>
    <div>
      <Posts/>
    </div>
    <Hero/>
    <br>
    </br>
    
    
    <Testimonials/>
    <Categories/>
    <Footer/>
    </>
  );
};

export default Background;

