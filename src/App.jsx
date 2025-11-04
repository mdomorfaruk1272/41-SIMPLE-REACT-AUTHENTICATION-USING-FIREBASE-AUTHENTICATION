import firebase from 'firebase/compat/app';
import './App.css';
import "firebase/compat/auth";
import firebaseConfig from './firebaseConfig';
import { useState } from 'react';

firebase.initializeApp(firebaseConfig);

function App() {
  const [user, setUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    photo: '',
  });
  
  const provider = new firebase.auth.GoogleAuthProvider();
  const handleSignIn = () => {
    firebase.auth().signInWithPopup(provider)
    .then(res => {
      const {displayName, photoURL, email} = res.user;
      const signedInUser = {
        isSignedIn: true,
        name: displayName,
        email: email,
        photo: photoURL,
      }
      setUser(signedInUser)
      // console.log(displayName," \n", photoURL, "\n", email);
    })
    .catch(err => {
      console.log(err);
      console.log(err.message);
    })
  }
  console.log(user);
  return (
    <div>
      <button onClick={handleSignIn}>Sign In</button>
      {
        user.isSignedIn && <div>
            <p>Welcome, {user.name}</p>
            <p>Your email: {user.email}</p>
            <img src={user.photo} alt=''/>
        </div>
      }
    </div>
  )
}

export default App
