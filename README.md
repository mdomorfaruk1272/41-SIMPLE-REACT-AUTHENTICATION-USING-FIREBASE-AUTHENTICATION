# 41-6 Sign in with google, open google login popup

## firebase.auth().signInWithPopup(provider) -> is used to sign in user with with popup. The parameter is AuthProvider like GoogleAuthProvider(). This function return a promise. In this promise we will get the user login information as object. 

### function App() {
###   const provider = new firebase.auth.GoogleAuthProvider();
###   const handleSignIn = () => {
###     firebase.auth().signInWithPopup(provider)
###     .then(res => {
###       const {displayName, photoURL, email} = res.user;
###       console.log(displayName," \n", photoURL, "\n", email);
###     })
###   }
###   return (
###     <div>
###       <button onClick={handleSignIn}>Sign In</button>
###     </div>
###   )
### }