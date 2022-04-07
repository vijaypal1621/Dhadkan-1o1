import "./App.css";
import Home from "./Home";
import Header from "./Header";
import Profile from "./Profile";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useStateValue } from "./StateProvider";
import Login from "./Login";
import Footer from './Footer';

function App() {
  const [{ user }] = useStateValue();

  return (
    <BrowserRouter>
      <div className="app">
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />
            <div className="app__body">
              <Switch>
                <Route exact path="/home" component={Home} />
                <Route exact path="/profile" component={Profile} />
                <Route exact path="/" component={Home} />
              </Switch>
            </div>
            <Footer />
          </>
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
