import image from './images/img4.jpg';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';


const Welcome = () => {
    const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.RightBox}>
        <Typography variant='h1' style={{color: '#646464'}}>Safe Food</Typography>
        <Typography variant='h2' style={{color: '#808080',fontWeight: 'bolder'}}>Delivary</Typography>
        <Typography variant='h6' style={{color: '#FF406B'}}>
            Order now & Get your favourite food delivered instantly.
        </Typography>
        <Box marginTop='10px'>
            <Button style={btn1} >Order Now</Button>
            <Link to="/register/restaurant" style={{textDecoration: 'none'}}>
              <Button style={btn2}>Add Your Restaurant</Button>
            </Link>
        </Box>
      </div>
      <img src={image} alt="" style={{height: '700px' , width: '700px'}}></img>
    </div>
  );
};

const useStyles = makeStyles({
    container: {
        display: 'flex',
        justifyContent: 'space-around',
        marginTop: 'auto',
        marginBottom: 'auto',
    },
    RightBox: {
        marginTop: 'auto',
        marginBottom: 'auto',
    },
    
});

const btn1 = {
    background: '#3D3D3D',
    color: '#FF406B',
    padding: '10px',
    fontSize: '15px',
    width: '150px',
    marginRight: '20px'
}

const btn2 = {
    border: '3px solid #FF406B',
    color: '#5A4041',
    padding: '7px',
    fontSize: '15px',
    width: '250px',
}

export default Welcome;
