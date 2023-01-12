import React from "react";
import "./App.css";
import "./assets/main.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home.js";
import UserPerfil from "./components/user/UserPerfil";
import Loguin from "./components/Loguin/LoginUi";
import { HttpMethods } from "./components/Context/httpContext";
import { MapPage } from "./components/map/MapPage";
import { UserMethods } from "./components/Context/useContext";

function App() {
  return (
    <HttpMethods>
      <UserMethods>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/map">
              <MapPage />
            </Route>
            <Route path="/loguin">
              <Loguin />
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
