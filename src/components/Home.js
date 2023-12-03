import React from 'react';
import './Home.css';
import myimg from './myimg.jpg';

const Home = () => {
  const openLinkInNewTab = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div id='background'>
      <div id='home' className="home-container">
        <div className="content-box">
        <img className='myimg' src={myimg} alt="Abhishek Kumar Singh" />
          <div className="text-content">
            <h1 className='hello'>Hello</h1>
            <p className='hello'>I am Abhishek Kumar Singh,</p>
            <p className='hello'>A MERN Developer</p>

            <div className="button-container">
              <button onClick={() => openLinkInNewTab('https://drive.google.com/file/d/10GhgeumNV8N_E_EhFFQqbiombG1t6XD2/view?usp=sharing')}>Resume</button>
              <button onClick={() => openLinkInNewTab('https://www.linkedin.com/in/abhishek-kumar-singh-8a955b1a5/')}>LinkedIn</button>
              <button onClick={() => openLinkInNewTab('https://github.com/CAREFREE-VILLAGER')}>GitHub</button>
            </div>
            
          </div>

          
          
        </div>
      </div>
    </div>
  );
};

export default Home;
