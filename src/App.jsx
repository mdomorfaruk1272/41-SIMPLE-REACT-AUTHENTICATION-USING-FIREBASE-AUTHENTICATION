import firebase from 'firebase/compat/app';
import './App.css';
import "firebase/compat/auth";
import firebaseConfig from './firebaseConfig';

firebase.initializeApp(firebaseConfig);

function App() {
  const provider = new firebase.auth.GoogleAuthProvider();
  const handleClick = () => {
    firebase.auth()
  .signInWithPopup(provider)
  }
  return (
    <div>
      <button onClick={handleClick}>Sign In</button>
    </div>
  )
}

export default App
