import React, { useState, useEffect } from "react";
import { Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
// import ProductCard from "../../components/util/Card";
const { GET_PRODUCTS } = require("../../apis/products");

const ProductsList = () => {
  const [Data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(GET_PRODUCTS)
      .then(async (res) => {
        await setData(res.data);
        console.log(Data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <Box style={container}>
      <Typography style={heading}>Our Products</Typography>
      <Divider color="#791314" />
      <Box marginTop="20px">
        {/* {Data.map((eachOne) => {
          return <ProductCard card={eachOne} />;
        })} */}
      </Box>
    </Box>
  );
};

const container = {
  padding: "30px 50px 10px 50px",
};

const heading = {
  fontFamily: "Varela Round",
  color: "#791314",
  fontWeight: "bold",
  fontSize: "30px",
  marginBottom: "12px",
};

export default ProductsList;
