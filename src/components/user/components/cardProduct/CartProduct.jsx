import { Box, Card, CardContent, Typography } from "@material-ui/core";
import React from "react";
import { useContext } from "react";
import { UserContext } from "../../../Context/useContext";

const CartProduct = () => {
  const { dataUser } = useContext(UserContext);
  const userData = dataUser();

  return (
    <Card style={{ width: "15vw",display: 'flex', alignItems:'center', flexDirection: 'column',padding: '0.5rem',marginTop: '1rem', marginBottom: '1rem' }}>
      <Box>
        <img
          src="https://cdn0.recetasgratis.net/es/posts/3/7/1/el_aguacate_es_una_verdura_o_una_fruta_73173_orig.jpg"
          alt="asd"
          style={{ width: "100%", height: "100%" }}
        />
      </Box>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          Palta
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
    </Card>
  );
};
export default CartProduct;
