import "./App.css";
import Home from "./Home";
import Header from "./Header";
import Profile from "./Profile";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useStateValue } from "./StateProvider";
import Login from "./Login";
// import firebase from '../src/firebase.js';
// import firebase from 'firebase';
// import db from './firebase';
// import firebase from './firebase';
// import firebase from 'firebase';
// import {db} from './firebase';
// import {onValue, ref} from 'firebase/database';

function App() {
  const [{ user }] = useStateValue();

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
    <BrowserRouter>
      <div className="app">
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />
            <div className="app__body ">
              <Switch>
                <Route exact path="/home" component={Home} />
                <Route exact path="/profile" component={Profile} />
                <Route exact path="/" component={Home} />
              </Switch>
            </div>
          </>
        )}
      </div>
    </BrowserRouter>

    // <BrowserRouter>
    //     <div className="app">

    //           {/* <h1> kjjfjd</h1>
    //           <div className="app__body ">
    //             <Switch>
    //                <Route path="/home" component={Home} />
    //                <Route path="/societies" component={Society} />
    //                <Route path="/resources" component={Resources} />
    //               <Redirect to="/home" />
    //             </Switch>
    //           </div> */}
    //      </div>
    //   </BrowserRouter>
  );
}

export default App;
