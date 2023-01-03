import React,{useState} from "react";
import { Button, Chip, Typography } from "@mui/material";
import { Box } from "@mui/system";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import { useLocation } from "react-router-dom";

const DOMAIN = process.env.REACT_APP_DOMAIN;

const Product = (props) => {
    const {state} = useLocation();

    const [qauntity,setQuantity] = useState(1);

    return ( 
        <Box  style={container} >
            
            <img src={`${DOMAIN}/${state.details.img}`} alt='' style={img}></img>
            <Box marginLeft='30px'>
                <Typography fontSize='15px'>MITHAI SHOP</Typography>
                <Typography style={name} marginTop='5px'>{state.details.name}</Typography>
                <Typography variant="h6" marginTop='10px'>Price. ₹ {state.details.price*qauntity}</Typography>
                <Typography fontSize='18px' marginTop='20px'>Pack</Typography>
                <Chip 
                    label={<Typography variant="caption">{(state.details.grams*qauntity)/1000}{" "}Kilo Grams</Typography>} 
                    size='medium' variant="filled" color="primary"
                />
                <Typography fontSize='18px' margin='20px 0px 5px 0px'>Qauntity</Typography>
                <Box style={qauntityBox}>
                    <AddOutlinedIcon cursor='pointer' onClick={() => setQuantity(qauntity+1)}/>
                    <Typography>{qauntity}</Typography>
                    <RemoveOutlinedIcon cursor='pointer' onClick={() => {if(qauntity > 1)setQuantity(qauntity-1)}}/>
                </Box>
                <Button style={btn}>Add to cart</Button>
               
            </Box>
        </Box>
     );
}

const container = {
    display: 'flex',
    // justifyContent: 'center',
    padding:'30px',
}

const img = {
    width: '45%',
    height: '75vh',
    borderRadius: '30px',
    objectFit:'cover',
    opacity: 1,
    transition: '.5s ease',
    backfaceVisibility: 'hidden',
    '&:hover': {
        opacity: 0.3,
    },
}

const qauntityBox = {
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
    fontSize: "25px",
    fontWeight: '600',
    textTransform: 'capitailise',
}

const btn = {
    width: '350px',
    background: '#791314',
    color: '#fff',
    padding: '10px',
    marginTop: '25px',
    fontSize: '18px',
    fontFamily: "Varela Round",
    textTransform: "capitalize",
}

export default Product;