import React from "react";
import './App.css';
{/* We NEED React Router for */}
{/*localhost.com/loginPage */}
{/*localhost.com/checkout and etc whatever pages we want to add */}
{/*It is used for adding multipage functionality in singlepage */}
import { BrowserRouter as Router, Switch, Route } from "react";

function App() {
  return (
    <Router>
      <div className="app">
      <h1>Online Shopping</h1>
      <Switch>
        <Route path="/checkout"><h1>CheckOut</h1></Route> {/* This is the route for checkout page*/ }
        <Route path="/login"><h1>LogIn</h1></Route>  {/* This is the route for login page*/ }
        <Route path="/"><h1>HOME PAGE!!!</h1></Route> {/* This is the route for default home page of default route*/ }
      </Switch>
    </div>
    </Router>
    
  );
}

export default App;

