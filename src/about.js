import React from 'react';
import {useState} from 'react';
import manitoulin from './img/IMG_7650.png';
import avery from './img/Avery-Sutherland.jpg';
import ag from './img/IMG_1075.jpg'
import study from './img/studyspace.jpg';
import ReactCardFlip from 'react-card-flip'
import dance from './img/averyDancing.jpg';

function About() {
    const [isFlipped, setIsFlipped] = useState([false,false,false,false, false]);


    const handleClick = (index) => {
        const newIsFlipped = [...isFlipped];
        newIsFlipped[index] = !newIsFlipped[index];
        setIsFlipped(newIsFlipped);
    }

    const averywords = 'Hi my name is Avery Sutherland and I am a sophomore at Dartmouth College studying computer science. I am SUPER eager to learn as much as I can in CS, as I am just starting out! ';
    const manitoulinwords = 'I am from a small island called Birch Island or Whitefish River First Nation that is near Manitoulin Island (largest freshwater island in the world). We are surrounded by water and the sunsets during the summer are legendary!';
    const agwords = 'I am also super interested in Film! I am currently working on season 3 of Acting Good which is an indigenous comedy show based in Canada. I play Chickadee!'
    const studywords = 'My Skills : java, c, react, html, css, js, firebase, python, react native --> Current Project: I am currently working on an app called Moments that allows users to choose any place on a map and mark it with thier own picture, title and caption of the moment!'
    const dancing = 'Fun Fact: I have been powwow dancing my entire life all over North America! I have even danced on an Amazon Prime show filming in New Zealand! Also just last year I won my first Iron Woman!'

  return (
    <div className="about">
      <h2>About Me!</h2>
      <div className="aboutcards">
        {[avery,manitoulin, study, ag, dance].map((imageSrc, index)=> (
            <ReactCardFlip key={index} isFlipped={isFlipped[index]} flipDirection='horizontal'>
                <div className='card' onClick={() => handleClick(index)}>
                {
                   <img src={imageSrc} alt={`card-${index}`} />
                }
                </div>
                <div className='card' onClick={() => handleClick(index)}>
                    <p>
                        {index === 0 
                        ? averywords
                        : index === 1
                        ? manitoulinwords
                        : index === 2
                        ? studywords
                        : index === 3
                        ? agwords
                        : index === 4
                        ? dancing
                        : null
                        }
                    </p>
                </div>
            </ReactCardFlip>
        ))}

      </div>
          
    </div>
  )
}

export default About
