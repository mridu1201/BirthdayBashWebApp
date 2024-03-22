import React from 'react';
import './Post.css'; // Import your CSS file for styling

const Post = () => {
  const buttonStyle = {
    backgroundColor: '#fc6a9c',
    color: 'white',
    borderRadius: '20px', // Apply border radius
    padding: '20px 45px',
    fontSize: '12px',
    borderWidth: '2px',
    boxShadow: 'none',
    overflow: 'hidden',
    position: 'relative',
    
    border: '10px',
    cursor: 'pointer',
    textAlign: 'center',
    display: 'block',
    margin: 'auto',
    transition: 'background-color 0.3s', // Add transition for hover effect
  };
  const headingStyle = {
    textAlign: 'justify',
    fontFamily: 'inherit',
    fontSize: '2.4vh',
    marginLeft: '15px',
    paddingBottom: '5px',
    paddingTop: '5px',
};

  const handleHover = (event) => {
    event.target.style.backgroundColor = '#ff1493'; // Change background color on hover
  };

  const handleHoverOut = (event) => {
    event.target.style.backgroundColor = '#fc6a9c'; // Reset background color when hover ends
  };
  return (
    <>
      <h1 style={{fontSize:"40px",color: "#ff69b4",fontFamily:"serif",alignItems:"center",display:"flex",justifyContent:"center",paddingTop:"40px"}}>Events Include</h1>
      <div className="wrapper_post" style={{paddingTop:"50px" , marginLeft:"50px"}}>
        <div className="post_item">
          <img src="https://assets.winni.in/groot/2023/12/18/desktop/preferred-time-slot-selection.png?w=115" style={{ borderRadius: '10px' }} alt="Image 1" />
          <h2 className = "posth2" style={headingStyle}>Heading 1</h2>
          <p>
            Lorem ipsum dolor sit amet, 
          </p>
        </div>
        <div className="post_item">
          <img src="https://assets.winni.in/groot/2023/12/18/desktop/delivery-in-cities.png?w=115" style={{ borderRadius: '10px' }} alt="Image 2" />
          <h2 style={headingStyle}>Heading 2</h2>
          <p>
            Lorem ipsum dolor sit amet
          </p>
        </div>
        <div className="post_item">
          <img src="https://assets.winni.in/groot/2023/12/18/desktop/twenty-million-people-trust-us.png?w=115" style={{ borderRadius: '10px' }} alt="Image 3" />
          <h2 style={headingStyle}>Heading 3</h2>
          <p>
            Lorem ipsum dolor sit amet
          </p>
        </div>
        <div className="post_item">
          <img src="https://assets.winni.in/groot/2023/12/18/desktop/pincodes-serviced-till-date.png?w=115" style={{ borderRadius: '10px' }} alt="Image 4" />
          <h2 style={headingStyle}>Heading 4</h2>
          <p>
            Lorem ipsum dolor sit amet, dolore magna aliqua.
          </p>
        </div>
        
      </div>
      <br>
      </br>
      <br>
      </br>
      <br>
      </br>
      <button
      style={buttonStyle}
      onMouseEnter={handleHover}
      onMouseLeave={handleHoverOut}
    >
      See All
    </button>

    </>
  );
};

export default Post;
