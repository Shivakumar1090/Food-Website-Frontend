import { Box, Typography } from "@mui/material";
import img from './kaj.jpeg';
import { useState } from "react";

const ProductCard = () => {
    const [hovered,setHovered] = useState(false);
    const image = {
        width: '280px',
        height: '280px',
        objectFit: 'cover',
        borderTopLeftRadius: '15px',
        borderTopRightRadius: '15px',
        opacity: `${hovered ? 0.7 : 1}`,
        // zIndex: 1,
        // backgroundColor: `${hovered ? 'rgba(0, 0, 0, .5)' : 'none'}`
    }
    return ( 
        <div>
            <Box style={card}>
                <img 
                    src={img} alt="" style={image}
                    onMouseOut={() => setHovered(false)}
                    onMouseOver={() => setHovered(true)}
                ></img>
                <Box style={{padding: '10px 20px 10px 20px'}}>
                    <Typography style={name}>Kaju Barfi</Typography>
                    <Typography style={rupees}>Rs. 240.00</Typography>
                </Box>
            </Box>
        </div>
     );
}

const card = {
    border: '2px solid #FFC000',
    borderRadius: '15px',
    padding: '1px'
}




const name = {
    color: '#131A28',
    fontFamily: "Varela Round",
    fontSize: '20px',
    textTransform: 'uppercase',
}

const rupees = {
    color: '#791314',
    fontFamily: "Varela Round",
    fontSize: '16px',
    // textTransform: 'uppercase',
    fontWeight: 'bold',
}
 
export default ProductCard;