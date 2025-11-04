# 41-8 Not google user login, signout user

## It's only use if we use namespace not module api

## signOut() method of firebase.auth() is used to signout a user. This method hans no parameter. this method also return a promise. In .then() callback function hans no arguments.


### function App(){
###   const [user, setUser] = useState({
###        isSignedIn: false,
###        name: '',
###        email: '',
###        photo: ''
###    })
###    const handleSignoutOut = () => {
###        firebase.auth().signOut().then(() => {
###            // change the user state
###        }).catch(err => {
###            console.log(err);
###        });
###    }
###    return(
###        <div>
###            {
###                user.isSignedIn ? <button onClick={handleSignedOut}> Sign Out</button>: <button onClick={handleSignIn}>Sign In</button>
###            }
###    )
###}