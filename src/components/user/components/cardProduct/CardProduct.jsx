import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const CardProduct = () => {
  const useStyles = makeStyles(() => ({
    root: {
      maxWidth: "16rem",
      padding: "0.2rem",
      margin: "0.5rem 0",
      borderRadius: "0.5rem",
      '&:hover': {
        transform: 'scale(1.05)',
      },
    },
    media: {
      height: 0,
      paddingTop: "56.25%", // 16:9
    },
    content: {
      padding: "0 1rem",
    },
  }));

  const classes = useStyles();

  return (
    <button>
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image="https://soycomocomo.es/media/2016/06/lechuga.jpg"
          // image="/static/images/cards/paella.jpg"
          title="Vendo Lechuga pa"
        />
        <CardHeader
          title="Vendo Lechuga pa' "
          subheader="September 14, 2016"
        />
        <CardContent className={classes.content}>
          <Typography variant="body2" color="textSecondary" component="p">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent>
      </Card>
    </button>
  );
};

export default CardProduct;
