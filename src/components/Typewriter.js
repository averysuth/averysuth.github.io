import { useEffect, useState } from 'react';

const Typewriter = ({ text, delay }) => {
    const [currentText, setCurrentText] = useState('');
    const [curr, setCurrentIndex] = useState(0);
  
    useEffect(() => {
        const timeout = setTimeout(() => {
            if (curr < text.length) {
              setCurrentText(prevText => prevText + text[curr]);
              setCurrentIndex(prevIndex => prevIndex + 1);
            } else {
              // Reset typing process
              setCurrentText('');
              setCurrentIndex(0);
            }
          }, delay);
      
          return () => clearTimeout(timeout);
        }, [curr, delay, text]);

    return <span>{currentText}</span>;
    
    }   
  
  export default Typewriter;