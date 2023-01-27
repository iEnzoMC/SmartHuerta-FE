import React from "react";
import styles from "./Login.module.css";
import "../../assets/tailwind.css";
import { useFormik } from "formik";
import { colorButton } from "./Styles/LoginStyles";
import {
  Grid,
  Button,
  Box,
  TextField,
  Typography,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const LoginForm = (props) => {
  const { changueToRegister, loginUser } = props;
  const validateMessaje = (UIMessaje) => {
    return <p style={{ color: "red" }}>{UIMessaje}</p>;
  };


  let navigate = useNavigate();

  const handleLogin = async (values) => {
    const respLogin = await loginUser(values);
    if (respLogin.ok) {
      toast.success("Usuario Logeado con exito ");
      setTimeout(() => {
        navigate('/map')
      }, 1000);
    } else {
      console.log(respLogin);
      toast.error(respLogin.msg);
    }
  };

  const validate = (values) => {
    let errors = {};
    if (!values.name) {
      errors.name = "Este campo es obligatorio";
    }
    if (!values.password) {
      errors.password = "Este campo es obligatorio";
    }

    // if (!values.email) {
    //   errors.email = 'Required';
    // } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    //   errors.email = 'Invalid email address';
    // }
    return errors;
  };
  const logInFormik = useFormik({
    initialValues: {
      name: "",
      password: "",
      email: "",
    },
    validate,
    onSubmit: (values) => {
      handleLogin(values);
    },
  });
  return (
    <Box style={{ padding: "1rem" }}>
      <Toaster position="top-center" reverseOrder={false} />
      <form onSubmit={logInFormik.handleSubmit}>
        <Grid item align="center">
          <Typography gutterBottom variant="h5" component="div">
            Log in
          </Typography>
          <div>
            <TextField
              style={{ marginTop: "1.5rem" }}
              fullWidth
              required
              name="name"
              id="standard-required"
              label="User Name"
              defaultValue=""
              variant="standard"
              value={logInFormik.values.name}
              onChange={logInFormik.handleChange}
              onBlur={logInFormik.handleBlur}
            />
          </div>
        </Grid>
        {logInFormik.touched.name && logInFormik.errors.name
          ? validateMessaje(logInFormik.errors.name)
          : null}
        <Grid item align="center">
          <TextField
            style={{ marginTop: "0.5rem" }}
            className={`${styles.inputItems}`}
            fullWidth
            name="password"
            required
            id="standard-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="standard"
            value={logInFormik.values.password}
            onChange={logInFormik.handleChange}
            onBlur={logInFormik.handleBlur}
          />
        </Grid>

        <Grid item align="center">
          <TextField
            style={{ marginTop: "0.5rem" }}
            className={`${styles.inputItems}`}
            fullWidth
            name="email"
            required
            id="email"
            label="Email"
            type="email"
            variant="standard"
            value={logInFormik.values.email}
            onChange={logInFormik.handleChange}
            onBlur={logInFormik.handleBlur}
          />
        </Grid>

        {logInFormik.touched.password && logInFormik.errors.password
          ? validateMessaje(logInFormik.errors.password)
          : null}
        <Grid item mt={5}>
          <FormControlLabel
            style={{ marginTop: "1.5rem" }}
            control={<Checkbox color="primary" />}
            label="Recordarme"
          />
        </Grid>
        <Button type="submit" style={colorButton} variant="contained" fullWidth>
          ingresar
        </Button>
        <Typography style={{ bottom: "5px" }} variant="body1" color="green">
          ¿No tienes cuenta?
          <Button
            onClick={() => changueToRegister("register")}
            style={{ color: "green" }}
          >
            Registrarme Ahora
          </Button>
        </Typography>
      </form>
    </Box>
  );
};

export default LoginForm;
