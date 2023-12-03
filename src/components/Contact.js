import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div id='contact'>
    <div className="centering">
      <div>
        <h1>Get in touch with me</h1>
        <h2>Abhishek Kumar Singh</h2>
        <div className="links">
          <button className="button-link" onClick={() => window.open("https://github.com/CAREFREE-VILLAGER", "_blank")}>
            <i className="fab fa-github"></i>
          </button>
          <button className="button-link" onClick={() => window.open("https://www.linkedin.com/in/abhishek-kumar-singh-8a955b1a5/", "_blank")}>
            <i className="fab fa-linkedin"></i>
          </button>
          <button className="button-link" onClick={() => window.open("mailto:as314202@gmail.com", "_blank")}>
            <i className="fas fa-envelope"></i>
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Contact;
