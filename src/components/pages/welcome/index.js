import image from './images/sweets.jpg';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';
import ProductCard from '../../util/Card';


const Welcome = () => {
    const classes = useStyles();
  return (
    <div className={classes.container}>
      <Box marginTop='100px'>
        <ProductCard />
      </Box>
    </div>
  );
};

const useStyles = makeStyles({
    container: {
        display: 'flex',
        justifyContent: 'space-around',
      
    },
    RightBox: {
        marginTop: 'auto',
        marginBottom: 'auto',
    },
    
});


export default Welcome;
