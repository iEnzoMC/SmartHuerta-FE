import React from "react";
import { useState } from "react";

import { buttonNavStyles } from "../Navigation/styles/NavbarStyles";
import MenuIcon from "@material-ui/icons/Menu";
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
} from "@material-ui/core";
import { Link } from "react-router-dom";
// import AvatarUser from "../user/avatar/AvatarUser";

// const actions = ["Loguin", "Logout"];

const DrawerNavbar = ({ pages, settings }) => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleOpenDrawer = () => {
    setOpenDrawer(true);
  };

  const handleCloseDrawer = () => {
    setOpenDrawer(false);
  };

  return (
    <>
      <Drawer open={openDrawer} onClose={handleCloseDrawer} >
        <List style={{ width: "12rem", paddingInline: "1rem" }}>
          {pages.map((page, index) => (
            <Link
              to={`/${page}`.trim()}
              style={{ textDecoration: "none", color: "black" }}
            >
              <ListItem
                key={index}
                onClick={handleCloseDrawer}
              >
                <ListItemIcon>
                  <ListItemText style={{backgroundColor: 'red'}}>{page}</ListItemText>
                </ListItemIcon>
              </ListItem>
            </Link>
          ))}
          <Divider />
          <ListItem style={{ padding: "0" }}>
            <ListItemIcon>
              {/* <AvatarUser settings={settings} /> */}
              Avatar
            </ListItemIcon>
          </ListItem>
          {/* {actions.map((action, index) => (
            <Link
              to={`/${action}`.trim()}
              style={{ textDecoration: "none", color: "black" }}
            >
              <ListItem key={index}>
                <ListItemIcon>
                  <ListItemText>{action}</ListItemText>
                </ListItemIcon>
              </ListItem>
            </Link>
          ))} */}
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
