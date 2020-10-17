import React, {useEffect } from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './js/Header';
import Home from './js/Home';
import Checkout from './js/Checkout';
import Login from './js/Login';
import { useStateValue } from './js/StateProvider';
import { auth } from './Firebase/firebase';

function App() {

  const[{user}, dispatch] = useStateValue();

  //useAffect Hook -> runs code depending in condition
  //if useAffect parammeter is [] it will only run when app is started
  useEffect(()=>{
    //Listener to Auth State change
    const unsubscribe = auth.onAuthStateChanged((authUser) =>{
      
      if(authUser){
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }else{
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }

    });

    return () =>{
      // detach listener in refresh
      unsubscribe();
    }

  },[])

console.log(user);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
          <Header></Header>
            <Checkout></Checkout>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/">
            <Header></Header>
            <Home></Home>
          </Route>
        </Switch>
      </div>
    </Router>
    );
    
}

export default App;
