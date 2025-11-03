# 41-5 Install firebase, initialize firebase app

## npm install firebase -> used to install firebase on react project

## we need to import firebase from 'firebase/compat/app'
## we must be import the module 'firebase/compat/auth' for use Authentication in project

## initializeApp() method of firebase is used to Initialize the react app as firebase project. pass firebaseConfig obj as param of initializeApp(). We need to do it outside of component

## If we use google sign in we need to call GoogleAuthProvider() of app module of firebase module. it's return a provider

### npm install firebase

### import firebase from 'firebase/compat/app';
### import 'firebase/compat/auth';
### firebase.initializeApp(firebaseConfig);
### function App(){
###    const provider = firebase.auth.GoogleAuthProvider();
### }