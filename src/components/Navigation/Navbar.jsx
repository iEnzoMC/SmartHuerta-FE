import React from "react";
import {
  AppBar,
  Container,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import DrawerNavbar from "./DrawerNavbar";
import ListItemsNavbar from "./ListItemsNavbar";

const pages = ["Home", "Perfil", "Usiarios", "Trueques","Nosotros"];

const Navbar = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));

  const handleclickNavButton = (event) => {
    console.log(event.currentTarget.value);
    // <Link to={`/${event.currentTarget.value}`} />;
  };

  return (
    <AppBar /* color="transparent" */ color="white">
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          style={{
            display: "flex",
            justifyContent: "space-between",
            paddingLeft: "2rem",
          }}
        >
          {isMatch ? (
            <DrawerNavbar pages={pages} />
          ) : (
            <ListItemsNavbar
              pages={pages}
              handleclickNavButton={handleclickNavButton}
            />
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
