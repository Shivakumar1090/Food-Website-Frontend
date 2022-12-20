import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import { useLocation } from "react-router-dom";

const DOMAIN = process.env.REACT_APP_DOMAIN;

const Product = (props) => {
    const {state} = useLocation();
    console.log(state.details);
    return ( 
        <Box marginTop='100px'>
            <Box display='flex' padding='30px'>
                <img src={`${DOMAIN}/${state.details.img}`} alt='' style={img}></img>
                <Box marginLeft='30px'>
                    <Typography style={rs}>MITHAI SHOP</Typography>
                    <Typography style={name} marginTop='5px'>{state.details.name}</Typography>
                    <Typography style={rs} marginTop='20px'>RS. {state.details.price}</Typography>
                    <Typography style={heads} marginTop='20px'>Pack</Typography>
                    <Button style={pack} size='medium'>{state.details.grams} grams</Button>
                    <Typography style={heads} marginTop='20px'>Qauntity</Typography>
                    <Box style={qauntity}>
                        <AddOutlinedIcon />
                        <Typography>4</Typography>
                        <RemoveOutlinedIcon />
                    </Box>
                    <Button style={btn}>Add to cart</Button>
                </Box>
            </Box>
        </Box>
     );
}

const img = {
    width: '40%',
    height: '70vh',
    borderRadius: '30px',
    objectFit:'cover',
}

const qauntity = {
    border: '1px solid #791341',
    padding: '10px',
    borderRadius: '50px',
    display: 'flex',
    justifyContent: 'space-between',
    height: '20px',
    width: '100px',
    marginTop: 'auto',marginBottom: 'auto',
    color: '#9B4F50'
}

const name = {
    fontFamily: "Varela Round",
    fontSize: "25px",
    color: '#791314',
    fontWeight: '600',
    textTransform: 'uppercase',
}

const rs = {
    fontFamily: "Varela Round",
    fontSize: "25px",
    color: '#9B4F50',
}

const heads = {
    fontFamily: "Varela Round",
    fontSize: "20px",
    color: '#791314',
}

const pack = {
    background: '#791314',
    width: '100px',
    borderRadius: '50px',
    color: '#fff',
    fontFamily: "Varela Round",
    fontWeight: 'bold',
    textTransform: "capitalize",
}

const btn = {
    width: '350px',
    background: '#791314',
    color: '#fff',
    padding: '10px',
    marginTop: '20px',
    fontSize: '18px',
    fontFamily: "Varela Round",
    textTransform: "capitalize",
}

export default Product;