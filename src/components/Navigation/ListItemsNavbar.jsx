import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  Typography,
  Badge,
  InputBase,
  Avatar,
} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import { buttonNavStyles, textItemsNavbar } from "./styles/NavbarStyles";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import SearchIcon from "@material-ui/icons/Search";
import { listItemsStyles } from "./styles/NavbarStyles";
import AvatarOptions from "./AvatarOptions";
import { useContext } from "react";
import { UserContext } from "../Context/useContext";

const ListItemsNavbar = ({ pages, userData }) => {
  // const { dataUser } = useContext(UserContext);
  // const userData = dataUser();
  const classes = listItemsStyles();

  return (
    <>
      <div style={{ display: "flex" }}>
        <Button sx={buttonNavStyles}>
          <Typography
            variant="h7"
            style={{
              paddingLeft: "1rem",
              alignItems: "center",
            }}
          >
            LOGO SMARTHUERTA
          </Typography>
        </Button>

        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Buscar en Smart Huerta..."
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ "aria-label": "search" }}
          />
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "center" }}>
        <Box style={{ display: "flex" }}>
          {pages.map((page, index) => (
            <Link to={`/${page}`.trim()} key={index}>
              <Button
                value={page}
                // onClick={handleclickNavButton}
                sx={buttonNavStyles}
              >
                <Typography variant="button" style={textItemsNavbar}>
                  {page}
                </Typography>
              </Button>
            </Link>
          ))}
        </Box>

        {userData ? (
          <div style={{ display: "flex", alignItems: "center" }}>
            <Typography variant="h5" style={textItemsNavbar}>
              {" "}
              |{" "}
            </Typography>
            <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <AvatarOptions userData={userData} />
          </div>
        ) : null}
      </div>
    </>
  );
};

export default ListItemsNavbar;
