import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import Typography from "@material-ui/core/Typography";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import {
  DialogActions,
  DialogTitle,
  IconButton,
  makeStyles,
} from "@material-ui/core";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";
import resizeEncodedPicture from "./helpers/resizeEncodedPicture";

const ModalAvatarUI = (props) => {
  const { handleClose, open, setImg } = props;

  const [file, setFile] = useState("");

  console.log(file)

  const onImageChange = async (encodedPicture) => {
    const newEncodedPicture = await resizeEncodedPicture(
      encodedPicture,
      150,
      150
    );

    console.log(newEncodedPicture)
    setImg(newEncodedPicture);
  };

  const handleUpgradeImg = async () => {

  
    const fileAvatar = file;
    const render = new FileReader();
    render.readAsDataURL(fileAvatar);

    render.onload = () => {
      onImageChange(render.result);
    };

    handleClose();
  };
/* 
  const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: theme.spacing(1),
      },
    },
    input: {
      display: "none",
    },
  })); */

 /*  const classes = useStyles(); */

  const DialogContent = withStyles((theme) => ({
    root: {
      padding: theme.spacing(2),
    },
  }))(MuiDialogContent);

  const DialogActions = withStyles((theme) => ({
    root: {
      margin: 0,
      padding: theme.spacing(1),
    },
  }))(MuiDialogActions);

  return (
    <div>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Cambiar Foto de Perfil
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            <div /* className={classes.root} */>
              <input
                accept="image/*"
                /* className={classes.input} */
                id="contained-button-file"
                multiple
                type="file"
                /* onChange={(e) => console.log(e)} */
              />
              <label htmlFor="contained-button-file">
                <Button variant="contained" color="primary" component="span">
                  Upload
                </Button>
              </label>
              <input
                accept="image/*"
                /* className={classes.input} */
                id="icon-button-file"
                onChange={(e) => setFile(e.target.files[0])}
                type="file"
              />
              <label htmlFor="icon-button-file">
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="span"
                >
                  <PhotoCameraIcon />
                </IconButton>
              </label>
            </div>
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleUpgradeImg} color="primary">
            Save changes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ModalAvatarUI;
