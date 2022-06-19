import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect  } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Home";
import Service from "./Service";
import About from "./About";
import Contact from "./Contact";
import identify from "./identify";
import Navbar from "./Navbar";
import Footer from "./Footer";
//import { Switch, Route, Redirect } from "react-router-dom";

import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";

//import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard";

import "./App.css";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());

    // Redirect to login
    window.location.href = "./login";
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={Home} />
            {/* <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} /> */}
            <Route exact path="/about" component={About} />
            {/* <Route exact path="/identify" component={identify} /> */}
            <Route exact path="/service" component={Service} />
            <Route exact path="/contact" component={Contact} /><br />
            

            <Switch>
            <Route exact path="/identify" component={identify} />
            <Route exact path="/landing" component={Landing} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <Redirect to="/" />
            </Switch>
            
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;
