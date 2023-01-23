import React from "react";
import { useState } from "react";

import { buttonNavStyles } from "../Navigation/styles/NavbarStyles";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import {
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  MenuItem,
} from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import Settings from "@material-ui/icons/Settings";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import AutorenewIcon from '@material-ui/icons/Autorenew';
// import AvatarUser from "../user/avatar/AvatarUser";

// const actions = ["Loguin", "Logout"];

const DrawerNavbar = ({ pages, userData }) => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleOpenDrawer = () => {
    setOpenDrawer(true);
  };

  const handleCloseDrawer = () => {
    setOpenDrawer(false);
  };

  return (
    <>
      <Drawer open={openDrawer} onClose={handleCloseDrawer}>
        <List style={{ width: "15rem", paddingInline: "1rem" }}>
          {pages.map((page, index) => (
            <Link
              key={index}
              to={`/${page}`.trim()}
              style={{ textDecoration: "none", color: "black" }}
            >
              <ListItem onClick={handleCloseDrawer}>
                <ListItemIcon>
                  <ListItemText>{page}</ListItemText>
                </ListItemIcon>
              </ListItem>
            </Link>
          ))}
          <Divider />
          {userData ? (
            <Link to={"/Perfil".trim()}>
              <MenuItem
              // onClick={() => {
              //   console.log("abrir perfil");
              // }}
              >
                <PersonIcon />
                <Typography
                  variant="body1"
                  style={{ fontWeight: "bold", marginLeft: "1rem" }}
                >
                  {/*  Perfil: */} {userData.name.toUpperCase()}
                </Typography>
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <AutorenewIcon fontSize="small" style={{ marginRight: "1rem" }} />
                  Trueques
                </ListItemIcon>
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <Settings fontSize="small" style={{ marginRight: "1rem" }} />
                  Configuraciones
                </ListItemIcon>
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <ExitToAppIcon
                    fontSize="small"
                    style={{ marginRight: "1rem" }}
                  />
                  Logout
                </ListItemIcon>
              </MenuItem>
            </Link>
          ) : null}
        </List>
      </Drawer>

      <IconButton onClick={handleOpenDrawer}>
        <Button
          display="flex"
          alignItems="center"
          sx={buttonNavStyles}
          style={{ margin: "0.5rem" }}
        >
          <MenuIcon style={{ color: "black" }} />
          <Typography
            variant="h7"
            style={{ paddingLeft: "1rem", alignItems: "center" }}
          >
            LOGO SMARTHUERTA
          </Typography>
        </Button>
      </IconButton>
    </>
  );
};

export default DrawerNavbar;
