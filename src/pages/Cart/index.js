import React,{useState} from "react";
import { Button, Chip, Divider, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { Box } from "@mui/system";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import Kaju from './kaj.jpeg'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import { Link } from "react-router-dom";
import EmptyCart from "../../components/emptyCart";

const Cart = () => {

    const [check,setCheck] = useState(true);
    return ( 
        <Box padding='70px 30px' >
            {!check ? 
                <EmptyCart></EmptyCart> 
            : 
                <Box>
                    <Box style={{display:'flex', justifyContent:'space-between', marginBottom: '15px'}} >
                        <Typography style={heading}>Your Cart</Typography>
                        <Link to='/products' style={{textDecoration: 'none'}}>
                            <Typography style={continueShopFont}>Continue Shopping</Typography>
                        </Link>
                    </Box>
                    {/*---------------------------------- Products will be starting here----------------------------------- */}
                    
                    <TableContainer >
                        <Table sx={{ minWidth: 650 }} >
                            <TableHead>
                                <TableRow >
                                    <TableCell style={tableHeadFonts}>PRODUCT</TableCell>
                                    <TableCell  style={tableHeadFonts}>QAUNTITY</TableCell>
                                    <TableCell align="right" style={tableHeadFonts}>TOTAL</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell component="th" scope="row" style={{border: 'none'}}>
                                        <Box display='flex'>
                                            <img src={Kaju} alt="img" width="120px" height='120px'></img>
                                            <Box margin='auto 0px auto 20px'>
                                                <Typography fontSize='20px'  color='primary'>Kakinada Kaja</Typography>
                                                <Typography fontSize= '15px' color='primary'>Pack: 200gm</Typography>
                                            </Box>
                                        </Box>
                                    </TableCell>
                                    <TableCell variant="body" align='right' style={{border: 'none'}} >
                                            <Stack spacing={1} direction='row' color='#791314'>
                                                <Chip 
                                                    variant="outlined"
                                                    color='primary'
                                                    label={
                                                        <Stack  spacing={2} direction='row' >
                                                            <AddOutlinedIcon />
                                                            <Typography>5</Typography>
                                                            <RemoveOutlinedIcon />
                                                        </Stack>
                                                    } 
                                                />
                                                <DeleteOutlineOutlinedIcon />
                                            </Stack>
                                    </TableCell>
                                    <TableCell align="right" style={{border: 'none',color: '#791314',fontSize: '15px'}}>₹ 1000</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>

                    <Divider />
                    <Box textAlign='right' marginTop='20px' >
                        <Typography>SubTotal. </Typography>
                        <Button style={checkout}>Check Out</Button>
                    </Box>
                </Box>
            }
        </Box>
     );
}

const heading = {
    fontWeight: "bold",
    fontSize: "30px",
};

const tableHeadFonts = {
    color:'#9B4F50',
    fontSize: '18px'
}

const continueShopFont = {
    fontSize: '17px',
    textDecoration:'underline',
    color: '#791314',
    marginTop: '10px',
}


const checkout = {
    width: '250px',
    background: '#791314',
    color: '#fff',
    padding: '10px',
    marginTop: '10px',
    fontSize: '18px',
    textTransform: "capitalize",
}
export default Cart;