import React,{useState} from "react";
import { Box, Button, InputBase, Typography } from "@mui/material";
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

    const LoginHandler = () => {
        const checkuser = {
            email: email,
            password: password,
        }

        axios.post(LOGIN , checkuser)
            .then(async(res) => {
                console.log(res);
                await setResp(res.data.Message);
                await res.status === 200 ? setSeverityMsg("success") : setSeverityMsg("warning");
                window.localStorage.setItem("token" , res.data.token);
                window.localStorage.setItem("id" , res.data.user._id);
                window.localStorage.setItem("name" , res.data.user.name);
                window.localStorage.setItem("isAuth" , true);
                window.localStorage.setItem("isAdmin" , res.data.user.admin);
                window.location.href = "/products";
            })
            .catch(async(err) => {
                console.log(err);
                setResp(err.response.data.Message);
                err.response.status === 301 ? setSeverityMsg("warning") : setSeverityMsg("error");
            })
        setOpenPopUp(true);
        setSeverityMsg("");
    }

    return ( 
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
            <Button variant="contained" style={loginBtn} onClick={LoginHandler}>Login</Button>
            <Typography style={{ fontSize: "18px", marginTop: '20px'}} >
                Don't have an account yet?{" "}
                <span> <Link to="/register" style={{color: '#791314'}}> Signup </Link> </span>
            </Typography>
            <MessagePopup  
                message={resp} 
                open={openPopUp} 
                handleAlertClose={() => setOpenPopUp(!openPopUp)}
                severity={severityMsg}
            />
        </Box>
     );
}

const loginBtn = {
    width: "200px",
    marginTop: "15px",
    padding: "7px",
    textTransform: "capitalize",
    fontSize: "15px",
}
 
export default CustomerLogin;