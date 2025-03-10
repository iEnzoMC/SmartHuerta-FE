import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { imageOfCarrousel } from '../carrousel/imagenes';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
      },
});


export default function Products() {
  const classes = useStyles();

  const spacing = 4;

  return (

    <Grid container style={{width: '60%', margin: 'auto'}} className={classes.root} spacing={2}>
<Grid item xs={12}>
  <Grid container justifyContent="center" spacing={spacing}>
    {[0, 1, 2].map((value) => (
      <Grid key={value} item xs={4}>
        <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          style={{height: '50%'}}
          image={imageOfCarrousel.imagenTomate}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" style={{textAlign: 'center'}}>
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" style={{textAlign: 'center'}}>
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
      </Grid>
    ))}
  </Grid>
</Grid>
</Grid>
    
  );
}

