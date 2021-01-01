import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import Home from "./Home";
import Checkout from './Checkout';
import Login from './Login';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function App() {
  const [{ user }, dispatch] = useStateValue();

  //useEffect
  //Code that runs based on a conditions
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if(authUser) {
        // the user is logged in...
        dispatch({
          type: "SET_USER",
          user: authUser
        });
      }else{
        //the user is logged out...
        dispatch({
          type: "SET_USER",
          user: null
        });
      }
    });

    return () => {
      //Any clean up operation goes here...
      unsubscribe();
    }

  }, []);

  console.log("User is ", user);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path = "/checkout">
            <Header />
            {/* <h1>Checkout</h1> */}
            <Checkout />
          </Route>
          <Route path = "/login">
            {/* <h1>Login Page</h1> */}
            <Login />
          </Route>
          {/* This is a default route */}
          <Route path = "/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
