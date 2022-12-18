import React,{useState} from "react";
import { Box, Button, InputBase, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import MessagePopup from "../../components/MessagePopup";
import axios from "axios";
const { container, input, heading } = require("./styles");

const {LOGIN} = require('../../apis/user');

const CustomerLogin = () => {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const [openPopUp,setOpenPopUp] = useState(false);
  const [resp,setResp] = useState("");
  const [severityMsg , setSeverityMsg] = useState("error");

  const clearAll = () => {
    setEmail("");
    setPassword("");
    setResp("");
  }

  const LoginHandler = () => {
    const checkuser = {
      email: email,
      password: password,
    }

    axios.post(LOGIN , checkuser)
      .then(async(res) => {
        console.log("check")
        console.log(res);
        await setResp(res.data.Message);
        await res.status === 200 ? setSeverityMsg("success") : setSeverityMsg("warning");
        clearAll();
      })
      .catch(async(err) => {
        console.log(err);
        await setResp(err.response.data.Message);
        await err.response.status === 301 ? setSeverityMsg("warning") : setSeverityMsg("error");
      })
      setOpenPopUp(true);
  }

  return (
    <div>
      <Box style={container}>
        <Typography variant="h4" style={heading}>Login</Typography>
        <InputBase 
            style={input} 
            placeholder="Email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        />
        <InputBase 
            style={input} 
            placeholder="Password" 
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
        />
        <Button style={loginBtn} onClick={LoginHandler}>
          Login
        </Button>
        <Box display="flex" marginTop="20px">
          <Typography style={{ fontSize: "18px", color: "#791314", fontFamily: "Varela Round",}} >
            Don't have an account yet?{" "}
          </Typography>
          <Link to="/register/user" style={{ paddingLeft: "5px" }}>
            <Typography style={{ fontSize: "18px",color: "#791314", fontFamily: "Varela Round",}} >
              SignUp
            </Typography>
          </Link>
          <MessagePopup  
            message={resp} 
            open={openPopUp} 
            handleAlertClose={() => setOpenPopUp(!openPopUp)}
            severity={severityMsg}
          />
        </Box>
      </Box>
    </div>
  );
}

const loginBtn = {
  background: "#791314",
  color: "#fff",
  width: "200px",
  marginTop: "15px",
  padding: "7px",
  fontFamily: "Varela Round",
  textTransform: "capitalize",
  fontSize: "15px",
}

export default CustomerLogin;
