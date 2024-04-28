import React from 'react'
import {getFirestore, collection, getDocs, addDoc} from 'firebase/firestore'
import {initializeApp} from 'firebase/app';
import {useState, useEffect} from 'react'
import {useRef} from 'react'

const firebaseConfig = {
    apiKey: "AIzaSyCoMFBqGthmqHTMlnVC8q2yyAGtxvMlyyk",
    authDomain: "averywebsite-d99e1.firebaseapp.com",
    projectId: "averywebsite-d99e1",
    storageBucket: "averywebsite-d99e1.appspot.com",
    messagingSenderId: "44423293449",
    appId: "1:44423293449:web:02b04a49e224f389d426d8",
    measurementId: "G-S1ET6PJ77N"
  };
    initializeApp(firebaseConfig);

function AddFriends() {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        const db = getFirestore();
        const colref = collection(db, 'friends');
    
        getDocs(colref)
          .then((snapshot) => {
            let friendsData = [];
            snapshot.docs.forEach((doc) => {
              friendsData.push({ ...doc.data(), id: doc.id });
            });
            setFriends(friendsData);
          })
          .catch(err => {
            console.log(err.message);
          });
      }, []);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const db = getFirestore();
        const colref = collection(db, 'friends');
    
        addDoc(colref, {
            firstname: firstname,
            lastname: lastname
        })
        .then(() => {
            setFirstname('');
            setLastname('');
          })
          .catch(err => {
            console.log(err.message);
          });
      };

    const bemyfriendRef = useRef(null);

  return (
    <div className='addfriend' ref={bemyfriendRef}>
        <div className='container'>
        <div className="formContainer">
            <form onSubmit={handleFormSubmit}>
            <label htmlFor="firstname">First Name or nickname: </label>
            <input type="text" name="firstname" value={firstname || ''} onChange={(e) => setFirstname(e.target.value)} required />
            <label htmlFor="lastname">Last Name or nickname: </label>
            <input type="text" name="lastname" value={lastname || ''} onChange={(e) => setLastname(e.target.value)} required />
            <button type="submit">Be my friend?</button>
        </form>
      </div>
      <div className='friendsContainer'>
        <h2>My Friends!</h2>
        <ul>
            {friends.map((friend) => (
            <li key={friend.id}>{friend.firstname} {friend.lastname}</li>
            ))}
        </ul>
      </div>
      </div>
    </div>
  )
}

export default AddFriends
