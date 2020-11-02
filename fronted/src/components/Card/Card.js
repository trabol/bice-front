import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";


const useStyles = makeStyles({
  card: {
    marginTop:25,
    width: 328,
  },
  image:{
    width: 328,
    height: 192,
  },
  font: {
    width: "100%",
    color: "#F5F7FA",
    backgroundColor: "#1F61F7",
    fontFamily: "Poppins",
    borderRadius: 4,
    width: 52,
    textAlign:"center",
    marginLeft:20,
    fontWeight: 600,
    fontSize: 14,
    top:"41%",
    position:"absolute"
  },
  fontH1:{
    padding:10,
    width: 216,
    fontFamily: "Poppins",
    fontWeight: "bold",
    fontSize: 16,
    color: "#060B25",
  },
  fontP:{
    fontFamily: "Poppins",
    fontWeight: "normal",
    fontSize: 14,
    color: "#58606E",
    padding:10,
  }
  
  
});

export default function Cards({data}) {
  const classes = useStyles();
  console.log(data);
  return (
    <Card className={ classes.card } >
      <CardMedia className={ classes.image}
        image={data.insurance.image}
        component="img"
        />
        <Typography
          className={classes.font}>
          ${ data.insurance.price }
        </Typography>
        <Typography
          className={classes.fontH1}>
          { data.insurance.name }
        </Typography>
        <Typography
          className={classes.fontP}>
          { data.insurance.description }
        </Typography>
      <CardContent>
        <label></label>
      </CardContent>
    </Card>
  );
}