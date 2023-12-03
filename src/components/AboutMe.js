import React from 'react';
import './AboutMe.css'

const AboutMe = () => {
  return (
    <div id='about' className="about-me-container">
      <p className='about-title'>About</p>
      <p className='increase'>
      I am Abhishek Kumar Singh, an aspiring MERN (MongoDB, Express.js, React, Node.js) stack developer. 
      With a keen eye for detail and a passion for web development, I am dedicated to honing my skills in creating 
      dynamic and responsive web applications. Leveraging my expertise in HTML, CSS, JavaScript, and the MERN stack, 
      I am on a journey to craft innovative solutions that drive competitive advantage and contribute to revenue growth.

Feel free to connect with me to explore collaborations, discuss projects, or share insights in the world of web development.
        Drop a mail @ <a href="mailto:as314202@gmail.com">as314202@gmail.com</a>
      </p>
    </div>
  );
};

export default AboutMe;
