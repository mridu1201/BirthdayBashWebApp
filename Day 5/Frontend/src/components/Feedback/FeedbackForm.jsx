import React from 'react';
import './FeedbackForm.css';
import '@fortawesome/fontawesome-free/css/all.css';

const FeedbackForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
  };

  return (
    <div className="feedback-container">
      <div className="feedback-card">
        <div>
          <h1 className="feedback-title">Let's Talk</h1>
          <p className="feedback-description">
            Have some big idea or brand to develop and need help? Then reach out we'd love to hear about your project and provide help.
          </p>
          <div className="feedback-social-icons">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="feedback-input-group">
          <input type="text" name="name" placeholder="Name" />
          <input type="email" name="email" placeholder="Email" />
          <input type="text" name="subject" placeholder="Subject" />
          <textarea placeholder="Message" rows="6" name="message"></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default FeedbackForm;