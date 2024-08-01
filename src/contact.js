import React from 'react'
import insta from './img/instagram.png';
import gmail from './img/new.png';
import github from './img/github.png'
import linkedin from './img/linkedin5 copy.png'

function contact() {
  return (
    <div className='contact'>
        <div className='mediacontainer'>
            <div className='media'>
                <a href="https://www.instagram.com/avery.sutherland/?hl=en"><img src={insta} alt="instagram"></img></a>
                <p>My personal blog on INSTA!!</p>
            </div>
            <div className='media'>
                <img src={gmail} alt="gmail"></img>
                <p>Send me an Email!!</p>
                <p>averysutherland4@gmail.com</p>
            </div>
            <div className='media'>
                <a href="https://github.com/averysuth"><img src={github} alt="github"></img></a>
                <p>Take a look at my github!</p>
            </div>
            <div className='media'>
                <a href="https://www.linkedin.com/in/avery-sutherland-6224662a3/"><img src={linkedin} alt="linkedIn"></img></a>
                <p>Find me on LinkedIn!</p>
            </div>
        </div> 
    </div>
  )
}

export default contact
