import {
  Avatar,
  Button,
  Chip,
  Container,
  Divider,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useContext } from "react";
import { UserContext } from "../Context/useContext";
import SettingsIcon from '@material-ui/icons/Settings';
import { colorButton } from "../Login/Styles/LoginStyles";
import { Pagination } from "@material-ui/lab";
import CardProduct from "./components/cardProduct/CardProduct";

const UserPerfil = () => {
  const { dataUser } = useContext(UserContext);
  const userData = dataUser();

  return (
    <Container style={{ padding: "1rem" }}>
      <Paper variant={10} style={{ padding: "2rem" }}>
        <Grid container spacing={2} style={{ marginBottom: "2rem" }}>
          <Grid item>
            {/* Poner una condicion, si el ususario tiene foto renderiza este avatar sino renderiza el de la letra
              que es el de abajo que esta comentado*/}
            <Avatar
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8iVTbxjuWrbh4TKqQq7N_i51ftTZsY9y4WA&usqp=CAU"
              // src={`${userData.ImgProfileUri}`}
              style={{ width: "10rem", height: "10rem" }}
            />

            {/* <Avatar
                style={{ width: "10rem", height: "10rem" }}
              >
                <Typography variant="h1">{userData.name.slice(0, 2).toUpperCase()}</Typography>
              </Avatar> */}
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="h6" component="div">
                  {userData.name.toUpperCase()}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                  magni eum recusandae totam, delectus voluptate. Minus, maiores
                  voluptatem saepe esse accusantium assumenda atque, sint
                  nesciunt ad tempore architecto. Nulla provident aperiam
                </Typography>
              </Grid>
              <Grid item container direction="row">
                <Typography
                  variant="body2"
                  style={{ marginRight: "2rem", fontWeight: "bold" }}
                >
                  <Chip label="Seguidores : 10" variant="outlined" />
                </Typography>
                <Typography
                  variant="body2"
                  style={{ marginRight: "2rem", fontWeight: "bold" }}
                >
                  <Chip label="Productos : 5" variant="outlined" />
                </Typography>
                <Typography
                  variant="body2"
                  style={{ marginRight: "2rem", fontWeight: "bold" }}
                >
                  <Chip label="Trueques Realizados : 14" variant="outlined" />
                </Typography>
              </Grid>
            </Grid>

            <Grid item>
              <Button
                variant="contained"
                style={colorButton}
                endIcon={<SettingsIcon />}
              >
                <Typography
                  sx={{ cursor: "pointer" }}
                  variant="button"
                  style={{ fontWeight: "bold" }}
                >
                  EDITAR PERFIL
                </Typography>
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Divider />

        <Grid
          style={{ backgroundColor: "#A3DCA6",marginTop: '1rem' }}
          container
          justifyContent="space-evenly"
        >
          {[0, 1, 2, 3, 4, 5, 6, 7].map((value) => (
            <Grid item>
              <CardProduct />
            </Grid>
          ))}

          {/* <div>
            <Pagination count={3} variant="outlined" shape="rounded" />
            <Button variant="contained">Cargar Mas Productos</Button>
          </div> */}
        </Grid>
      </Paper>
    </Container>
  );
};

export default UserPerfil;
