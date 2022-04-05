import React from 'react';
import './Login.css';
import {Button } from '@material-ui/core';
import { auth, provider} from './firebase';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

function Login() {
    const [state,dispatch] = useStateValue();

    const signIn= ()=>{
        // console.log(auth);
        // auth
        //     .signInWithPopup(provider)
        //     .then(result => {
        //         console.log(result);
        //         // dispatch({
        //         //     type:actionTypes.SET_USER,
        //         //     user:result.user
        //         // })
        //     })
        //     .catch((error) => alert(error.message))
        const auth = getAuth();
signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    dispatch({
                    type:actionTypes.SET_USER,
                    user:result.user
                })
    // ...
    console.log(user);
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
    }


    return (
        <div className="login">
            <div className="login__container">
                <img src="./heartfavicon.jpg" alt="/" />
                <h1>Sign in to Dhadkan</h1>
                <Button onClick={signIn}>Sign In With Google</Button>
            </div>
        </div>
    )
}

export default Login;
