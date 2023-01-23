import React, { useContext } from "react";
import {
  AppBar,
  Container,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import DrawerNavbar from "./DrawerNavbar";
import ListItemsNavbar from "./ListItemsNavbar";
import { toolbarXl } from "./styles/NavbarStyles";
import { UserContext } from "../Context/useContext";

const pages = ["Mapa", "Usuarios", "Trueques", "Nosotros", "Contacto"];
const userSettings = ["Trueques","Configuraciones","Logout"]

const Navbar = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));

  const { dataUser } = useContext(UserContext);
  const userData = dataUser();

  // const userLog = localStorage.getItem("user");
  // const userLoger = parseInt(localStorage.getItem("user"));

  // console.log(getUserData());

  return (
    <AppBar color="white">
      <Container maxWidth="xl">
        <Toolbar disableGutters style={toolbarXl}>
          {isMatch ? (
            <DrawerNavbar pages={pages} userData={userData} />
          ) : (
            <ListItemsNavbar pages={pages} userData={userData}/>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
