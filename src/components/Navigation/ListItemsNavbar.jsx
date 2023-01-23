import React from "react";
import { Link } from "react-router-dom";
import { alpha, makeStyles } from "@material-ui/core/styles";
import { Box, Button, Typography, Badge, InputBase } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import { buttonNavStyles, textItemsNavbar } from "./styles/NavbarStyles";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import SearchIcon from "@material-ui/icons/Search";
import globalStyles from "../GlobalStyles/globalStyles";

const ListItemsNavbar = ({ pages, settings, handleclickNavButton }) => {
  const useStyles = makeStyles((theme) => ({
    search: {
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: `${globalStyles.backgroundColorSearch}`,
      "&:hover": {
        backgroundColor: `${globalStyles.backgroundColorSearchHover}`,
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(3),
        width: "auto",
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: `${globalStyles.textInNavbar}`
    },
    inputRoot: {
      color: "inherit",
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
  }));

  const classes = useStyles();

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
          {pages.map((page) => (
            <Link to={`/${page}`.trim()}>
              <Button
                key={page}
                value={page}
                onClick={handleclickNavButton}
                sx={buttonNavStyles}
              >
                <Typography variant="button" style={textItemsNavbar}>
                  {page}
                </Typography>
              </Button>
            </Link>
          ))}
        </Box>

        <Typography variant="h5" style={textItemsNavbar}>
          {" "}
          |{" "}
        </Typography>
        {/* avatar loguiado */}
        {/* <AvatarUser settings={settings} /> */}
        <div>
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
          <IconButton
            edge="end"
            aria-label="account of current user"
            // aria-controls={menuId}
            aria-haspopup="true"
            // onClick={handleProfileMenuOpen}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
        </div>
      </div>
    </>
  );
};

export default ListItemsNavbar;
