import React from 'react'
import averyimage from './img/Avery.jpg'
import ReactCardFlip from 'react-card-flip';
import {useState, useEffect} from 'react';
import averyquebec from './img/averyquebec.png'
import Typewriter from './components/Typewriter';



function Home() {
  const [isFlipped, setIsFlipped] = useState(false);
  const title = 'Hi my name is Avery! Make yourself at home!';

  useEffect(() => 
  {const interval = setInterval(() => 
    {setIsFlipped((prevIsFlipped) => !prevIsFlipped);}, 8000); //interval duration
    return () => clearInterval(interval);
  }, []);


  return (
    <div className="home">
      <div className="pictures">
          <ReactCardFlip isFlipped={isFlipped} flipSpeedBackToFront='8' flipSpeedFrontToBack='8' flipDirection="horizontal">
            <div className="homecard">
              <img src={averyimage} alt="averyhome"></img>
            </div>
            <div className='homecard'>
              <img src={averyquebec} alt="averyQhome"></img>
            </div>
          </ReactCardFlip>
        <div className="typetitle">
          <h1><Typewriter text={title} delay={150}></Typewriter></h1>
        </div>
      </div>  
    </div>
  )
}
export default Home
