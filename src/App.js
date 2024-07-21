/* Avery Sutherland 
App.js of website 
*/
//import modules and components
import './App.css';
import NavBar from './components/NavBar';
import './components/NavBar.css';
import Home from './Home';
import './Home.css';
import About from './about';
import './about.css'
import Contact from './contact';
import './contact.css'
//import AddFriends from './AddFriends';
///import './AddFriends.css'
import Projects from './projects';
import './project.css';
//import { useRef } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {

  /*
  // Create a reference for the 'Be My Friend' section
  const bemyfriendRef = useRef(null);
  // Function to scroll to the 'Be My Friend' section
  const scrollToSection = () => {
    if (bemyfriendRef.current) {
      window.scrollTo({
        top: bemyfriendRef.current.offsetTop,
        behavior: 'smooth'
      });
    }
  };
  */

  //taking out be my friend section temp : <div ref={bemyfriendRef}><AddFriends path="/bemyfriend"></AddFriends></div> 
  //<NavBar scrollToSection={scrollToSection}></NavBar>

  return ( //use react router to navigate between pages 
    <Router>
      <div className="App">
        <NavBar></NavBar>
        <div className='content'>
          <Switch>
            <Route exact path="/">
            <div><Home></Home></div>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/projects">
              <Projects></Projects>
            </Route> 
            <Route path="/contact">
              <Contact></Contact>
            </Route> 
          </Switch>
          </div>
      </div>
  </Router>
  );
}

export default App;
