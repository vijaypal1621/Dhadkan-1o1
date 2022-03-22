import './App.css';
import Home from './Home';
import React, {useEffect,useState} from 'react';
// import firebase from '../src/firebase.js';
// import firebase from 'firebase';
// import db from './firebase';
// import firebase from './firebase';
// import firebase from 'firebase';
// import {db} from './firebase';
// import {onValue, ref} from 'firebase/database';


function App() {

  // const [pulseRate , setPulseRate] = useState("");
  
  // useEffect(()=>{
  //   onValue(ref(db),(snapshot) =>{
  //     setPulseRate(snapshot.val().pulse);
      
  //     // console.log(pulseRate);
  //     console.log(snapshot.val().pulse);
  //     console.log(pulseRate);
  //   } );

  // }, []);



  return (
    <div className="app">      
      <div className="appMiddle">
        <h1 style={{color : "white"}}>Dhadkan-1o1</h1>
        <Home className="container" />
      </div>      
    </div>
  );
}

export default App;
