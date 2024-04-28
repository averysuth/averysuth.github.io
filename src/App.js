import './App.css';
import NavBar from './components/NavBar';
import './components/NavBar.css';
import Home from './Home';
import './Home.css';
import About from './about';
import './about.css'
import Contact from './contact';
import './contact.css'
import AddFriends from './AddFriends';
import './AddFriends.css'
import { useRef } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {

  const bemyfriendRef = useRef(null);
  const scrollToSection = () => {
    if (bemyfriendRef.current) {
      window.scrollTo({
        top: bemyfriendRef.current.offsetTop,
        behavior: 'smooth'
      });
    }
  };


  return (
    <Router>
      <div className="App">
        <NavBar scrollToSection={scrollToSection}></NavBar>
        <div className='content'>
          <Switch>
            <Route exact path="/">
            <div><Home></Home></div>
            <div ref={bemyfriendRef}><AddFriends path="/bemyfriend"></AddFriends></div>
            </Route>
            <Route path="/about">
              <About></About>
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
