import firebase from 'firebase/compat/app';
import './App.css';
import "firebase/compat/auth";
import firebaseConfig from './firebaseConfig';

firebase.initializeApp(firebaseConfig);

function App() {
  const provider = new firebase.auth.GoogleAuthProvider();
  const handleSignIn = () => {
    firebase.auth().signInWithPopup(provider)
    .then(res => {
      const {displayName, photoURL, email} = res.user;
      console.log(displayName," \n", photoURL, "\n", email);
    })
  }
  return (
    <div>
      <button onClick={handleSignIn}>Sign In</button>
    </div>
  )
}

export default App
