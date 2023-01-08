import React, { useState, useEffect } from "react";
import { Button, Chip, Divider, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { Box } from "@mui/system";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import EmptyCart from "../../components/emptyCart";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { AddCartItem, DeleteCartItem, DecreaseCartItem } from "../../redux/actions/cart";
import axios from "axios";

const { UPDATE_CART } = require('../../apis/cart');
const DOMAIN = process.env.REACT_APP_DOMAIN;

const Cart = () => {
    const Navigate = useNavigate();
    const dispath = useDispatch();
    const [totalPrice, setTotalPrice] = useState(0);

    const CartReduxData = useSelector((state) => state.Cart_Reducer);

    const UpdateCartBackend = (item, type) => {
        const userId = window.localStorage.getItem("id");
        const data = {
            itemId: item._id,
            quantity: item.count,
            type: type,
        }
        axios.post(UPDATE_CART + userId, data)
            .then((res) => {
                console.log("updated");
            })
            .catch(err => {
                console.log(err);
            })
    }

    const handleIncrease = (item) => {
        UpdateCartBackend(item, "ADD_ITEM");
        dispath(AddCartItem({ ...item }));
    }

    const handleDecrease = (item) => {
        UpdateCartBackend(item, "REMOVE_ITEM");
        dispath(DecreaseCartItem({ ...item }));
    }

    const handleDelete = (item) => {
        dispath(DeleteCartItem(item));
        UpdateCartBackend(item, "DELETE_ITEM");
    }

    useEffect(() => {
        let p = 0;
        // eslint-disable-next-line array-callback-return
        CartReduxData.map((ele, k) => {
            p = Number(ele.price) * (ele.count) + p;
        });
        setTotalPrice(p);
    }, [CartReduxData])

    return (
        <Box padding='70px 30px' >
            {CartReduxData.length === 0 ?
                <EmptyCart></EmptyCart>
                :
                <Box>
                    <Box style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }} >
                        <Typography style={heading}>Your Cart</Typography>
                        <Link to='/products' style={{ textDecoration: 'none' }}>
                            <Typography style={continueShopFont}>Continue Shopping</Typography>
                        </Link>
                    </Box>
                    {/*---------------------------------- Products will be starting here----------------------------------- */}

                    <TableContainer >
                        <Table  >
                            <TableHead>
                                <TableRow >
                                    <TableCell style={tableHeadFonts}>PRODUCT</TableCell>
                                    <TableCell style={tableHeadFonts}>QAUNTITY</TableCell>
                                    <TableCell align="right" style={tableHeadFonts}>TOTAL</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    CartReduxData.map(cartItem => {
                                        return (
                                            <TableRow key={cartItem._id}>
                                                <TableCell component="th" scope="row" style={{ border: 'none' }}>
                                                    <Box
                                                        key={cartItem._id}
                                                        display='flex'
                                                        onClick={() => Navigate(`/product/${cartItem._id}`, { state: { details: cartItem } })}
                                                    >
                                                        <img src={`${DOMAIN}/${cartItem.img}`} alt="img" width="120px" height='120px' style={{ cursor: 'pointer' }}></img>
                                                        <Box margin='auto 0px auto 20px' style={{ cursor: 'pointer' }}>
                                                            <Typography fontSize='20px' color='primary'>{cartItem.name}</Typography>
                                                            <Typography fontSize='15px' color='primary'>Pack: {cartItem.grams} Grams</Typography>
                                                        </Box>
                                                    </Box>
                                                </TableCell>
                                                <TableCell variant="body" align='right' style={{ border: 'none' }} >
                                                    <Stack spacing={1} direction='row' color='#791314'>
                                                        <Chip
                                                            variant="outlined"
                                                            color='primary'
                                                            label={
                                                                <Stack spacing={2} direction='row' >
                                                                    <AddOutlinedIcon cursor='pointer' onClick={() => handleIncrease(cartItem)} />
                                                                    <Typography>{cartItem?.count}</Typography>
                                                                    <RemoveOutlinedIcon cursor='pointer' onClick={() => handleDecrease(cartItem)} />
                                                                </Stack>
                                                            }
                                                        />
                                                        <DeleteOutlineOutlinedIcon cursor='pointer' onClick={() => handleDelete(cartItem)} />
                                                    </Stack>
                                                </TableCell>
                                                <TableCell align="right" style={{ border: 'none', color: '#791314', fontSize: '15px' }}>₹ {cartItem.price * cartItem?.count}</TableCell>
                                            </TableRow>
                                        )
                                    })
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>

                    <Divider />

                    <Box textAlign='right' marginTop='20px' >
                        <Typography>SubTotal.  ₹{totalPrice}</Typography>
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
    color: '#9B4F50',
    fontSize: '18px'
}

const continueShopFont = {
    fontSize: '17px',
    textDecoration: 'underline',
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