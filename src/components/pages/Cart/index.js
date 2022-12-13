import { Button, Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import Kaju from './kaj.jpeg'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import { Link } from "react-router-dom";

const Cart = () => {
    return ( 
        <Box marginTop='100px' padding='30px' >
            <Box style={{display:'flex', justifyContent:'space-between',}} >
                <Typography style={heading}>Your Cart</Typography>
                <Link to='/' style={{textDecoration: 'none'}}>
                    <Typography style={{fontFamily: 'Varela Round',fontSize: '17px',color:'#791314',textDecoration:'underline'}}>Continue Shopping</Typography>
                </Link>
            </Box>
            <Box style={{display: 'flex' ,color:'#9B4F50',marginBottom: '20px',width:'100%'}}>
                <Box width='60%'>
                    <Typography style={rowHead}>PRODUCT</Typography>
                </Box>
                <Box width='40%' display='flex' justifyContent='space-between'>
                    <Typography style={rowHead}>QAUNTITY</Typography>
                    <Typography style={rowHead}>TOTAL</Typography>
                </Box>
            </Box>
            <Divider/>
            <Box style={{display:'flex',color:'#9B4F50',margin:'20px 0px 30px 0px', width: '100%'}}>
                <Box display='flex' width='60%' >
                    <img src={Kaju} alt="" width="120px" height='120px'></img>
                    <Box style={{marginTop: 'auto',marginBottom: 'auto', marginLeft: '20px'}}>
                        <Typography style={name}>Andara Goli</Typography>
                        <Typography style={{fontFamily: "Varela Round",fontSize: '15px'}}>Pack: 200gm</Typography>
                    </Box>
                </Box>
                <Box width='42%' display='flex' justifyContent='space-between'>
                    <Box display='flex'>
                        <Box style={qauntity}>
                            <AddOutlinedIcon />
                            <Typography>4</Typography>
                            <RemoveOutlinedIcon />
                        </Box>
                        <DeleteOutlineOutlinedIcon style={{marginTop: 'auto',marginBottom: 'auto',marginLeft: '10px'}}/>
                    </Box>
                    <Box style={{marginTop: 'auto',marginBottom: 'auto'}}>
                        <Typography style={rowHead}>1000</Typography>
                    </Box>
                </Box>
            </Box>
            <Divider/>
            <Box textAlign='right' marginTop='20px' color='#791314'>
                <Typography style={{fontFamily: "Varela Round"}}>SubTotal. </Typography>
                <Button style={checkout}>Check Out</Button>
            </Box>
        </Box>
     );
}

const heading = {
    fontFamily: "Varela Round",
    color: "#791314",
    fontWeight: "bold",
    fontSize: "30px",
    marginBottom: "15px",
};

const rowHead = {
    fontFamily: "Varela Round",
    fontSize: "15px",
}

const qauntity = {
    border: '1px solid #791341',
    padding: '10px',
    borderRadius: '50px',
    display: 'flex',
    justifyContent: 'space-between',
    height: '20px',
    width: '100px',
    marginTop: 'auto',marginBottom: 'auto'
}
 
const name = {
    fontFamily: "Varela Round",
    fontSize: "20px",
    color: '#791314',
}

const checkout = {
    width: '250px',
    background: '#791314',
    color: '#fff',
    padding: '10px',
    marginTop: '10px',
    fontSize: '18px',
    fontFamily: "Varela Round",
    textTransform: "capitalize",
}
export default Cart;