import React from 'react';
import {useState} from 'react';
import searchengine from './img/searchengine.png';
import moments from './img/moments.png';
import ReactCardFlip from 'react-card-flip'

function Projects() {
    const [isFlipped, setIsFlipped] = useState([false,false]);


    const handleClick = (index) => {
        const newIsFlipped = [...isFlipped];
        newIsFlipped[index] = !newIsFlipped[index];
        setIsFlipped(newIsFlipped);
    }

    const searchwords = 'Tiny Search Engine: Developed a search engine application in C capable of processing user queries and providing a ranked list of 80+ relevant websites. The crawler normalized URLs, fetched and parsed 580+ web pages, recursively crawled links, and saved page content and metadata for efficient retrieval. I built an indexer that processes 2300+ words from fetched pages, normalizes them, and maps them to document IDs using counter data structures, supporting efficient query processing. I designed and implemented a query processor to tokenize user queries, validate logical operations (AND, OR), and process them against an inverted index for document retrieval and ranking. I then utilized counters and hash tables for query processing, including union and intersection operations for accurate search results.';
    const momentswords = 'Moments: I developed a social media app using React Native and JavaScript, that enables users to upload pictures from their library to create a new "Moment." A user can add thier own unique moment which displayed on a map with the selected picture as an icon along with a title, caption, and their name as the uploader. I managed user data and moments with Firebase Firestore, and implemented secure user registration and login with Firebase Authentication. Moments integrated React Native Maps for interactive map functionality and Stack Navigation for seamless screen transitions.';

  return (
    <div className="project">
      <h2>My Projects!</h2>
      <div className="projectcards">
        {[searchengine, moments].map((imageSrc, index)=> (
            <ReactCardFlip key={index} isFlipped={isFlipped[index]} flipDirection='horizontal'>
                <div className='card' onClick={() => handleClick(index)}>
                {
                   <img src={imageSrc} alt={`card-${index}`} />
                }
                </div>
                <div className='card' onClick={() => handleClick(index)}>
                    <p>
                        {index === 0 
                        ? searchwords
                        : index === 1
                        ? momentswords
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

export default Projects