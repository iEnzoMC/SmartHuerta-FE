import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Avatar, Button, Checkbox, Divider, Grid, InputAdornment, TextField } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import { avatarFormStyle } from "./styles/popupStyles";
import PersonIcon from "@material-ui/icons/Person";
import { Autocomplete } from "@material-ui/lab";
import { imageOfCarrousel } from "./carrousel/imagenes";

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

const handlesave = (value) => {
console.log(value)
}


const categorias = [
  { descripcion: "Verdura", idMateria: 5 },
  { descripcion: "Frutas", idMateria: 5 },
  { descripcion: "Tuberculos", idMateria: 5 },
]

export const FormView = () => (
  <div>

    <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
          }}
          enableReinitialize
          validate={SignupSchema}
          onSubmit={values => {
            // same shape as initial values
            console.log(values);
          }}
        >
          {(formikProps, errors, touched) => (
            <form
              noValidate
              autoComplete="off"
              align="center"
              onSubmit={console.log('asd')}
            >
               <div className="w-full text-center">


               <Avatar
            src={imageOfCarrousel.imagenCebolla}
            /* onClick={() => handleClickOpen()} */
            style={avatarFormStyle}
          >
            <PersonIcon style={{ height: 120, width: 120 }} />
          </Avatar>


          <TextField
            type="text"
            name="name"
            style={{ width: "80%", marginTop: "30px" }}
            variant="outlined"
            placeholder={"Nombre"}
            label={"Nombre"}
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <EditIcon />
                </InputAdornment>
              ),
            }}
            /* helperText={
                errors.firstName && touched.firstName ? errors.firstName : null
            } */
            /* value={element.id ?? ''} */
            onChange={(e) => console.log(touched)}
          />
          <TextField
            type="number"
            name="cel"
            style={{ width: "80%", marginTop: "30px", marginBottom: "30px" }}
            variant="outlined"
            placeholder={"Cantidad (en KG)"}
            label={"Cantidad (en KG)"}
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <EditIcon />
                </InputAdornment>
              ),
            }}
            /* helperText={
                errors.firstName && touched.firstName ? errors.firstName : null
            } */
            /* value={element.id ?? ''} */
            onChange={(e) => console.log(touched)}
          />

    <Autocomplete
        disableCloseOnSelect
        multiple
        style={{ width: "80%", marginTop: "20px", margin: "auto" }}
        id="tags-outlined"
        options={categorias}
        getOptionLabel={(option) => option.descripcion}
        filterSelectedOptions
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            label="categorias"
          />
        )}
      />
          <TextField
            type="text"
            name="email"
            style={{ width: "80%", marginTop: "20px" }}
            variant="outlined"
            placeholder={"Comentarios"}
            label={"Comentarios"}
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <EditIcon />
                </InputAdornment>
              ),
            }}
            /* helperText={
                errors.firstName && touched.firstName ? errors.firstName : null
            } */
            /* value={element.id ?? ''} */
            onChange={(e) => console.log("asd")}
          />

        <Button style={{marginTop: '20px', background: 'red'}} size="large" component="label"  variant="contained">
            <input hidden type="submit"></input>
            Agregar
        </Button>
        {/*  <button type="submit">Submit</button> */}
        </div>
            </form>
          )}
        </Formik>
  </div>
);
