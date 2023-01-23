import React from "react";
import "./App.css";
import "./assets/main.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserPerfil from "./components/user/UserPerfil";
import Login from "./components/Login/LoginUi";
import { HttpMethods } from "./components/Context/httpContext";
import { MapPage } from "./components/map/MapPage";
import { UserMethods } from "./components/Context/useContext";
import Navbar from "./components/Navigation/Navbar";

function App() {
  return (
    <HttpMethods>
      <UserMethods>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/Mapa">
              <MapPage />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/Perfil">
              <UserPerfil />
            </Route>
          </Switch>
        </Router>
      </UserMethods>
    </HttpMethods>
  );
}

export default App;
