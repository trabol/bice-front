import React,{useState} from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import Axios from 'axios';

import Card from '../components/Card/Card';

const useStyles = makeStyles((theme) => ({
  Padding: {    
    padding: '30px',
  },
  select: {
    border: "0.125rem solid #1f61f7",
    background: "white",
    "&:hover":{
      backgroundColor: "#ffffff"
    },
    borderRadius: 4,
    boxSizing: "border-box",
    width: 332,
    height:48,
  },
  label:{
    fontSize: "12px",
    lineheight: "16px",
    color: "#AFBACC",
  },
  button:{
    color:"#ffffff",
    padding: "8px 32px",
    width: 113,
    height: 48,
    borderRadius: "1.5rem",
    background: "#1f61f7",
    "&:hover":{
      backgroundColor: "#1F61F0"
    },
    margin: "0 0 0 50px",
    fontSize: 15,
    fontWeight: "bold"
  },
}));

function Home() {
  const classes = useStyles();
  const [loading, setLoading] = useState(true);  
  const [plan,setPlan] = useState();
  const [cards,setCard] = useState();
  const handleChange = (e) => { 
    setLoading(true);  
    setPlan(e.target.value); 
  }
  const handleFindplan = async () => {
    const {data} = await Axios.get('https://dn8mlk7hdujby.cloudfront.net/interview/insurance/'+plan);
    setCard(data);
    setLoading(false);  
  }
  return (
    <React.Fragment>
      <Container maxWidth="sm"  className={classes.Padding}>
        <FormControl variant="filled">
          <InputLabel 
            className={classes.label} 
            id="id-planes-label">
            Planes
          </InputLabel>
          <Select 
            onChange={handleChange} 
            labelId="id-planes-label" 
            id="id-planes" 
            className={classes.select}
          >
            <MenuItem value=""><em>None</em></MenuItem>
            <MenuItem value={59}>Seguro Viaje Protegido</MenuItem>
            <MenuItem value={58}>Seguro Vida Activa</MenuItem>
          </Select>
        </FormControl>
        <FormControl>
          <Button 
            onClick={handleFindplan}
            variant="contained" 
            className={classes.button}
          >
          Buscar
          </Button>
        </FormControl>
        {loading ? ( <div></div>) :(
          <Card data={cards}/>
        )}
      </Container>
  </React.Fragment>
  );
}
export default Home;