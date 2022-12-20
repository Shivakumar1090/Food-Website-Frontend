import React,{useState,useEffect} from "react";
import axios from "axios";
import { Divider, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { makeStyles } from "@mui/styles";
import { useNavigate} from "react-router-dom";
// const Navigate = require('react-router-dom');
const {GET_PRODUCTS} = require('../../apis/products');

const DOMAIN = process.env.REACT_APP_DOMAIN;

const Products = () => {
    const Navigate = useNavigate();

    const classes = CSS_styles();
    const [selectedHover,setSelectedHovered] = useState(null);

    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios
        .get(GET_PRODUCTS)
        .then(async (res) => {
            await setProducts(res.data);
            console.log(products);
        })
        .catch((err) => {
            console.log(err);
        });
    }, []);

    return ( 
        <div>
            <Box className={classes.container}>
                <Typography className={classes.heading}>Our Products</Typography>
                <Divider color="#791314"/>
                <Box className={classes.list}>
                    {
                        products.map((single,keyval) => {
                            return(
                                <Paper 
                                    key={single._id} 
                                    keyVal ={single._id}
                                    className={classes.paper} 
                                    onClick = {() => Navigate(`/product/${single._id}`,{state: {details: single}})}
                                    elevation= { keyval === selectedHover ? 10 : 1}
                                    onMouseOut={() => setSelectedHovered(null)}
                                    onMouseOver={() =>setSelectedHovered(keyval)}
                                >
                                    <img src={`${DOMAIN}/${single.img}`} alt={single.name} className={classes.img}></img>
                                    <Box className={classes.prodDetails}>
                                        <Typography className={classes.prodName}>{single.name}</Typography>
                                        <Typography className={classes.prodPrice}>₹ {single.price}</Typography>
                                        <Typography className={classes.prodGrams}>{single.grams} grams</Typography>
                                    </Box>
                                </Paper>
                            )
                        })
                    }
                </Box>
            </Box>
        </div>
     );
}

const CSS_styles = makeStyles({
    container: {
        padding: '40px',
        marginTop: '70px',
    },
    heading: {
        fontSize: "25px",
        fontFamily: "Varela Round",
        color: "#791314",
        fontWeight: "bold",
        marginBottom: "15px",
    },
    list: {
        marginTop: '30px',
        display: 'grid',
        alignItems: 'center',
        gridTemplateColumns: 'auto auto auto auto',
        gap: '20px',
        justifyContent: 'space-evenly',
    },
    paper: {
        height: '380px',
        width: '300px',
        // margin: '10px',
    },
    img: {
        height: '280px',
        objectFit: 'cover',
        width: '300px',
        borderTopLeftRadius: '5px',
        borderTopRightRadius: '5px',
    },
    prodDetails: {
        padding: '10px',
        color: '#9B4F50',
    },
    prodName: {
        fontSize: '20px',
        fontWeight: '500',
        fontFamily: "Varela Round",
        textTransform: 'capitalize',
        color: "#791314",
    },
    prodPrice: {
        fontFamily: "Varela Round",
        fontSize: '18px',
    },
    prodGrams: {
        fontFamily: "Varela Round",
        fontSize: '14px',
        fontWeight: '700',
    }
})
 
export default Products;