import React from "react";
import { useState } from "react";
import styles from "./Loguin.module.css";
import "../../assets/tailwind.css";
import logo from "../img/Logotipo_smart.png";
import LoguinForm from "./LoguinForm";
import RegisterForm from "./RegisterForm";
import {
  paperLogin,
  logoHuertaLoguin,
  bgColorLogo,
} from "../Loguin/Styles/LoguinStyles";

import { Grid, Box, Paper } from "@material-ui/core";
import { useContext } from "react";
import { HttpContext } from "../Context/httpContext";
import { UserContext } from "../Context/useContext";
const LoguinUi = () => {
  const [loguinOption, setLoguinOption] = useState("loguin");
  const { post } = useContext(HttpContext);
  const { saveUser } = useContext(UserContext);

  const changueToLoguin = (value) => {
    setLoguinOption(value);
  };
  const changueToRegister = (value) => {
    setLoguinOption(value);
  };

  const registerUser = async (body) => {
    try {
      await post("/api/auth/new", body);
      const data = await post("/api/auth/", body);

      const userRegister = {
        name: body.name,
        email: body.email,
        isNew: true,
      };

      saveUser(userRegister)
      return data;
    } catch (error) {
      console.log(error, "eerrror");
      window.alert("Usuario no registrado Error en el sistema");
    }
  };

  const loginUser = async (body) => {
    try {
      const data = await post("/api/auth/", body);

      const userData = {
        name: body.name,
        email: body.email,
        isNew: false,
      };

      saveUser(userData)
      return data;
    } catch (error) {
      console.log(error, "rror");
      window.alert("Error en el sistema");
    }
  };

  return (
    <>
      <Grid container className={`${styles.bgimage}`}>
        <Paper elevation={10} xs={12} style={paperLogin}>
          <Box style={bgColorLogo}>
            <div>
              <img src={logo} alt="logoSamrtHuerta" style={logoHuertaLoguin} />
            </div>
          </Box>
          {loguinOption === "loguin" ? (
            <LoguinForm
              changueToRegister={changueToRegister}
              loginUser={loginUser}
            />
          ) : (
            <RegisterForm
              changueToLoguin={changueToLoguin}
              registerUser={registerUser}
            />
          )}
        </Paper>
      </Grid>
    </>
  );
};

export default LoguinUi;
