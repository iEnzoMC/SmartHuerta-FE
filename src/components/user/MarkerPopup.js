import React, { useContext, useState } from "react";
import { Popup } from "react-leaflet";
import "../../assets/tailwind.css";
import "../../assets/main.css";
import PersonIcon from "@material-ui/icons/Person";
import {
  popupContent,
  nameContent,
  rankedContent,
  avatarStyle,
  deleteIcon,
  iconStyle,
} from "./styles/popupStyles";
import { Avatar, Button, Grid, makeStyles, TextField } from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import PhoneAndroidOutlinedIcon from "@material-ui/icons/PhoneAndroidOutlined";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import ModalAvatarUI from "./avatar/ModalAvatarUI";

import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import { UserContext } from "../Context/useContext";
import { useNavigate } from "react-router-dom";

const MarkerPopup = ({ venue, deleteHome }) => {
  const [img, setImg] = useState("");
  const [value, setValue] = useState(2);
  const { dataUser } = useContext(UserContext);

  const navigate = useNavigate();

  const dataOfUser = dataUser();

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [avatar, setAvatar] = useState("");

/*   const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
  }));
 */
  const changeRoutePerfil = () => {
    navigate("/perfil");
  };

/*   const 'hola'tyles(); */

  return (
    <Popup className="leaflet-popup">
      <div style={popupContent}>
        <div style={deleteIcon}>
          <Button
            onClick={(e) => {
              deleteHome(venue);
            }}
          >
            <DeleteOutlineIcon style={iconStyle} />
          </Button>
        </div>
        <div>
          <Avatar
            src={img}
            onClick={() => handleClickOpen()}
            style={avatarStyle}
          >
            <PersonIcon style={{ height: 120, width: 120 }} />
          </Avatar>
        </div>
        <div style={nameContent} className="rounded-r-lg bg-lime-500">
          <h1
            style={{ paddingTop: "6%", fontSize: "15px", fontWeight: "bold" }}
          >
            {venue.name}
          </h1>
        </div>
        <div style={rankedContent} className="rounded-r-lg">
          <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
        </div>
        <div
          style={{
            width: "100%",
            position: "absolute",
            bottom: "8%",
            left: "11%",
          }}
        >
          <div className={'hola'}>
            <Grid container spacing={1} alignItems="flex-end">
              <Grid item>
                <MailOutlineIcon />
              </Grid>
              <Grid item>
                <TextField
                  id="input-with-icon-grid"
                  label="Email"
                  value={dataOfUser.email}
                />
              </Grid>
            </Grid>
          </div>
          <div className={'hola'}>
            <Grid container spacing={1} alignItems="flex-end">
              <Grid item>
                <HomeOutlinedIcon />
              </Grid>
              <Grid item>
                <TextField id="input-with-icon-grid" label="Dirección" />
              </Grid>
            </Grid>
          </div>
          <div className={'hola'}>
            <Grid container spacing={1} alignItems="flex-end">
              <Grid item>
                <PhoneAndroidOutlinedIcon />
              </Grid>
              <Grid item>
                <TextField id="input-with-icon-grid" label="Telefono" />
              </Grid>
              <div style={{ width: "70%", position: "relative", top: "20px" }}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={changeRoutePerfil}
                  style={{
                    background:
                      "linear-gradient(355deg, #caff52 0, #aefe5b 12.5%, #91f663 25%, #71ec6a 37.5%, #4de070 50%, #14d475 62.5%, #00c87b 75%, #00bf80 87.5%, #00b686 100%)",
                    color: "black",
                  }}
                >
                  Perfil
                </Button>
              </div>
            </Grid>
          </div>
        </div>
      </div>

      <ModalAvatarUI
        id="avatar"
        name="avatar"
        handleClose={handleClose}
        open={open}
        setImg={setImg}
        /* userId={selectedAccount._id} */
      />
    </Popup>
  );
};

export default MarkerPopup;
