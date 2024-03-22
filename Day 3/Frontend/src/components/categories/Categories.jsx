import React from 'react';
import './categories.css';

const Categories = () => {
  const images = [
    { id: 1, imageUrl: "https://confetti.html.themeforest.createit.pl/assets/images/demo-content/bg-03.jpg", title: "Card 1" },
    { id: 2, imageUrl: "https://th.bing.com/th/id/OIP.W_BxXuZhfdyxp4XPzDOF-QHaLH?w=202&h=303&c=7&r=0&o=5&cb=10&dpr=1.3&pid=1.7", title: "Card 2" },
    { id: 3, imageUrl: "https://th.bing.com/th/id/OIP.9j1Q062o2S_R1q6U2rO2NQHaE5?w=259&h=180&c=7&r=0&o=5&cb=10&dpr=1.3&pid=1.7", title: "Card 3" },
    { id: 4, imageUrl: "https://th.bing.com/th/id/OIP.5OMC56IrYsmpqZkOeniJ0QHaFj?w=250&h=188&c=7&r=0&o=5&cb=10&dpr=1.3&pid=1.7", title: "Card 4" }
  ];

  const handleMouseEnter = (event) => {
    event.target.nextSibling.style.display = "block";
  }

  const handleMouseLeave = (event) => {
    event.target.nextSibling.style.display = "none";
  }

  return (
    <>
    
    <h1 style={{fontSize:"40px",color: "#ff69b4",fontFamily:"serif",alignItems:"center",display:"flex",justifyContent:"center",paddingTop:"40px"}}>Parties Include</h1>

        <div className="mycard-grid" style={{marginBottom:"25px"}}>

      {images.map(image => (
        <div className="mycard" key={image.id}>
          <img 
            src={image.imageUrl} 
            alt={image.title} 
            className="mycard-image" 
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
          <div className="mycard-content">
            <h2 className="mycard-title">{image.title}</h2>
            <button className="mycard-button">See More</button>
          </div>
        </div>
      ))}
    </div>
    </>
  );
}

export default Categories;

// import React from 'react';
// import './categories.css';

// const Categories = () => {
//   const images = [
//     { id: 1, imageUrl: "https://confetti.html.themeforest.createit.pl/assets/images/demo-content/bg-03.jpg", title: "Card 1" },
//     { id: 2, imageUrl: "https://th.bing.com/th/id/OIP.W_BxXuZhfdyxp4XPzDOF-QHaLH?w=202&h=303&c=7&r=0&o=5&cb=10&dpr=1.3&pid=1.7", title: "Card 2" },
//     { id: 3, imageUrl: "https://th.bing.com/th/id/OIP.9j1Q062o2S_R1q6U2rO2NQHaE5?w=259&h=180&c=7&r=0&o=5&cb=10&dpr=1.3&pid=1.7", title: "Card 3" },
//     { id: 4, imageUrl: "https://th.bing.com/th/id/OIP.5OMC56IrYsmpqZkOeniJ0QHaFj?w=250&h=188&c=7&r=0&o=5&cb=10&dpr=1.3&pid=1.7", title: "Card 4" }
//   ];

//   return (
//     <div className="mycard-grid">
//       {images.map(image => (
//         <div className="mycard" key={image.id}>
//           <img src={image.imageUrl} alt={image.title} className="mycard-image" />
//           <div className="mycard-content">
//             <h2 className="mycard-title">{image.title}</h2>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Categories;
