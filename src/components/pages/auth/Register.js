import { Box, Button, InputBase, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";

const { container, input, heading } = require("./styles");

const CustomerRegisteration = () => {
  return (
    <div>
      <Box style={container}>
        <Typography variant="h4" style={heading}>
          Create account
        </Typography>
        <InputBase style={input} placeholder="Name" />
        <InputBase style={input} placeholder="Email" />
        <InputBase style={input} placeholder="Password" type="password" />
        <Button
          style={{
            background: "#791314",
            color: "#fff",
            width: "200px",
            marginTop: "15px",
            padding: "7px",
            fontFamily: "Varela Round",
            textTransform: "capitalize",
            fontSize: "15px",
          }}
        >
          Create
        </Button>
        <Box display="flex" marginTop="20px">
          <Typography
            style={{
              fontSize: "18px",
              color: "#791314",
              fontFamily: "Varela Round",
            }}
          >
            if you have account already then
          </Typography>
          <Link to="/login/user" style={{ paddingLeft: "5px" }}>
            <Typography
              style={{
                ontSize: "18px",
                color: "#791314",
                fontFamily: "Varela Round",
              }}
            >
              Login here
            </Typography>
          </Link>
        </Box>
      </Box>
    </div>
  );
};

export default CustomerRegisteration;
