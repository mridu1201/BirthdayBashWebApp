import React, { useState } from 'react';
import Card from './Card';
import './Hero.css';
const Hero = () => {
  const [gender, setGender] = useState('');
  const [theme, setTheme] = useState('');

  const genderOptions = ['Male', 'Female', 'Other'];
  const themeOptions = ['Theme 1', 'Theme 2', 'Theme 3'];

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleThemeChange = (e) => {
    setTheme(e.target.value);
  };

  const cardsData = [
    { id: 1, imageUrl: "https://confetti.html.themeforest.createit.pl/assets/images/demo-content/party-03.jpg", title: '$879', description: 'A few words about pricing...' },
    { id: 2, imageUrl: "https://confetti.html.themeforest.createit.pl/assets/images/demo-content/party-02.jpg", title: '$789', description: 'A few words about pricing...' },
    { id: 3, imageUrl: "https://confetti.html.themeforest.createit.pl/assets/images/demo-content/party-01.jpg", title: '$221', description: 'A few words about pricing...' },
    { id: 4, imageUrl: "https://confetti.html.themeforest.createit.pl/assets/images/demo-content/party-04.jpg", title: '$56', description: 'A few words about pricing...' },
    { id: 5, imageUrl: "https://confetti.html.themeforest.createit.pl/assets/images/demo-content/party-02.jpg", title: '$123', description: 'A few words about pricing...' },
    // { id: 6, imageUrl: "https://confetti.html.themeforest.createit.pl/assets/images/demo-content/party-04.jpg", title: '$245', description: 'A few words about pricing 2...' },
    // // Add more card data as needed
  ];

  return (
    <div className="app">
     
     <h1 style={{fontSize:"40px",color: "#ff69b4",fontFamily:"serif",alignItems:"center",display:"flex",justifyContent:"center",paddingTop:"40px"}}>Parties Include</h1>
       <select className= "Gender_c" value={gender} onChange={handleGenderChange}>
        <option className="Gender_o"value="">Select Gender</option>
        {genderOptions.map(option => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>

      <select className = "Gender_c"value={theme} onChange={handleThemeChange}>
        <option className="Gender_o" value="">Select Theme</option>
        {themeOptions.map(option => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>

    
      <div className="card-container">
        {cardsData.map(card => (
          <Card
            key={card.id}
            imageUrl={card.imageUrl}
            title={card.title}
            description={card.description}
          
          />
        
        ))}
      </div>

      <div className="arrow-icons">
        <img src="https://th.bing.com/th/id/R.66ca37a2c638d53e20742d4c48461d47?rik=GpG42VGaJcSm5Q&riu=http%3a%2f%2fclipart-library.com%2fimg%2f2005354.png&ehk=Plr%2fHh61vWzUoSDtuFF9cKQ2Gd9CXSauqbcGuwIg%2bW0%3d&risl=&pid=ImgRaw&r=0" alt="Back" className="arrow-icon" />
        <img src="https://th.bing.com/th/id/OIP.2tVUiKOXEbbpMQCg_RtxEwHaHa?rs=1&pid=ImgDetMain" alt="Forward" className="arrow-icon" />
      </div>
    </div>
  );
}

export default Hero;
