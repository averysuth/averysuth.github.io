import React from 'react'
import {getFirestore, collection, getDocs, addDoc} from 'firebase/firestore'
import {useState, useEffect} from 'react'
import {useRef} from 'react'
import { db } from './firebaseConfig';


function AddFriends() {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [friends, setFriends] = useState([]);

    useEffect(() => {
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
