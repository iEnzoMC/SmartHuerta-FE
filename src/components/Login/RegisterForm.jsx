import React, { useState } from "react";
import { isEmptyArray, useFormik } from "formik";
import "../../assets/tailwind.css";
import { colorButton } from "../Login/Styles/LoginStyles";
import { Grid, Button, Box, TextField, Typography } from "@material-ui/core";
import { isEmptyObject } from "jquery";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";



const RegisterForm = (props) => {
  const {  changueToLogin, registerUser } = props;
  const [sucessRegister, setSucessRegister] = useState(false);
  const navigate = useNavigate()

  const validateMessaje = (UIMessaje) => {
    return <p style={{ color: "red" }}>{UIMessaje}</p>;
  };
  const validate = (values) => {
    let errors = {};
    //validations name
    if (!values.name) {
      errors.name = "Este campo es obligatorio";
    } else if (values.name.length < 4) {
      errors.name = "Ingrese como minimo 4 caracteres";
    }
    //validation email
    if (!values.email) {
      errors.email = "Este campo es obligatorio";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Email invalido";
    }
    //validation password
    const regExPassword = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{6,16}$/;
    if (!values.password) {
      errors.password = "Introduce una contraseña";
    } else if (values.password.length < 6 || values.password.length > 16) {
      errors.password = "ingrese entre 6 y 16 caracteres";
    } else if (!regExPassword.test(values.password)) {
      errors.password = "ingrese mayusculas, minusculas y numeros";
    }

    //confirm pasword
    if (!values.confirmPassword) {
      errors.confirmPassword = "confirmar contraseña";
    } else if (values.password !== values.confirmPassword) {
      errors.confirmPassword = "Las contraseñas no son iguales";
    }
    return errors;
  };


  const handleRegister = async (values) => {
    const respRegister = await registerUser(values);
    if (respRegister.ok) {
      toast.success("Usuario Registrado con exito ");
      setTimeout(() => {
        navigate('/map')
      }, 1000);
    } else {
      console.log(respRegister)
      toast.error(respRegister.msg);
    }
  };

  const registerFormik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validate,
    onSubmit: (values, { resetForm }) => {
      handleRegister(values)
      resetForm();
      setSucessRegister(true);
      setTimeout(() => {
        setSucessRegister(false);
      }, 5000);
    },
  });
  const sucessfullRegisterMessaje = (
    <p style={{ color: "green" }}>Registrado con Exito</p>
  );
  return (

    <Box style={{ padding: "1rem", position: "relative" }}>
        <Toaster position="top-center" reverseOrder={false} />
      <form onSubmit={registerFormik.handleSubmit}>
        <Grid item align="center">
          <Typography gutterBottom variant="h5" component="div">
            Registrarse
          </Typography>

          <TextField
            name="name"
            style={{ marginBottom: "1rem" }}
            fullWidth
            required
            id="name"
            label="name"
            variant="standard"
            onChange={registerFormik.handleChange}
            value={registerFormik.values.name}
            onBlur={registerFormik.handleBlur}
          />
        </Grid>
        {registerFormik.touched.name &&
          registerFormik.errors.name &&
          validateMessaje(registerFormik.errors.name)}
        <Grid item align="center">
          <TextField
            name="email"
            style={{ marginBottom: "1rem" }}
            fullWidth
            required
            id="email"
            label="Email"
            variant="standard"
            onChange={registerFormik.handleChange}
            value={registerFormik.values.email}
            onBlur={registerFormik.handleBlur}
          />
        </Grid>
        {registerFormik.touched.email &&
          registerFormik.errors.email &&
          validateMessaje(registerFormik.errors.email)}
        <div>
          <TextField
            name="password"
            style={{ marginBottom: "1rem" }}
            fullWidth
            required
            id="standard-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="standard"
            onChange={registerFormik.handleChange}
            value={registerFormik.values.password}
            onBlur={registerFormik.handleBlur}
          />
        </div>
        {registerFormik.touched.password &&
          registerFormik.errors.password &&
          validateMessaje(registerFormik.errors.password)}
        <div>
          <TextField
            name="confirmPassword"
           style={{ marginBottom: "1rem" }}
            fullWidth
            required
            id="standard-password-input"
            label="confirmPassword"
            type="Password"
            autoComplete="current-password"
            variant="standard"
            onChange={registerFormik.handleChange}
            value={registerFormik.values.confirmPassword}
            onBlur={registerFormik.handleBlur}
          />
        </div>
        {registerFormik.touched.confirmPassword &&
          registerFormik.errors.confirmPassword &&
          validateMessaje(registerFormik.errors.confirmPassword)}
        <div
          style={{
            position: "absolute",
            bottom: "9.5rem",
            marginLeft: "6.5rem",
          }}
        >
          {sucessRegister ? sucessfullRegisterMessaje : null}
        </div>
        <Grid item mt={5}>
          <Button
            type="submit"
            style={colorButton}
            variant="contained"
            fullWidth
            disabled={!isEmptyObject(registerFormik.errors)}
            // className={` ${styles.colorButton}`}
          >
            Registrarme
            {/* <Link to="/home">Registrarme</Link> */}
          </Button>
          <div style={{ width: "21.87rem" }}>
            <Typography
              style={{ position: "absolute", bottom: "5px" }}
              variant="body1"
              color="initial"
              // style={{ position: "absolute", bottom:"5px"}}
            >
              ¿Ya tienes una cuenta?{" "}
              <Button
                onClick={() => changueToLogin("login")}
                style={{ color: "green" }}
              >
                ingresar
              </Button>
            </Typography>
          </div>
        </Grid>
      </form>
    </Box>
  );
};

export default RegisterForm;
