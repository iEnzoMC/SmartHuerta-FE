import React from "react";
import "./App.css";
import "./assets/main.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home.js";
<<<<<<< HEAD
import Loguin from "./components/Loguin/LoguinUi";
import { HttpMethods } from "./components/Context/httpContext";
import { MapPage } from "./components/map/MapPage";
import { UserMethods } from "./components/Context/useContext";
import UserPerfil from "./components/user/userProducts/UserPerfil";
=======
import UserPerfil from "./components/user/UserPerfil";
import Login from "./components/Login/LoginUi";
import { HttpMethods } from "./components/Context/httpContext";
import { MapPage } from "./components/map/MapPage";
import { UserMethods } from "./components/Context/useContext";
import Navbar from "./components/Navigation/Navbar";
>>>>>>> e327b28a878046349f26e14629a5547c4e978c1e

function App() {
  return (
    <HttpMethods>
      <UserMethods>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/map">
              <MapPage />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/perfil">
              <UserPerfil />
            </Route>
          </Switch>
        </Router>
      </UserMethods>
    </HttpMethods>
  );
}

export default App;
