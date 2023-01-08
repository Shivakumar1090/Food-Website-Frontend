import React, { useState } from "react";
import { Box, Button, InputBase, Typography } from "@mui/material";
import MessagePopup from "../../components/MessagePopup";
import { Link } from "react-router-dom";
import axios from "axios";

const { container, input, heading } = require("./styles");

const { REGISTER } = require('../../apis/user');

const CustomerRegisteration = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const [openPopUp, setOpenPopUp] = useState(false);
    const [resp, setResp] = useState("");
    const [severityMsg, setSeverityMsg] = useState("error");

    const registerHandler = () => {
        const newuser = {
            name: name,
            email: email,
            password: password,
        }

        axios.post(REGISTER, newuser)
            .then(async (res) => {
                console.log("check")
                console.log(res);
                await setResp(res.data.Message);
                await res.status === 200 ? setSeverityMsg("success") : setSeverityMsg("warning");
                window.location.href = "/login";
            })
            .catch(async (err) => {
                console.log(err);
                await setResp(err.response.data.Message);
                await err.response.status === 422 ? setSeverityMsg("warning") : setSeverityMsg("error");
            })
        setOpenPopUp(true);
        setSeverityMsg("");
    }

    return (
        <div>
            <Box style={container}>
                <Typography variant="h4" style={heading}>
                    Create account
                </Typography>
                <InputBase
                    style={input}
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
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
                <Button style={btn} onClick={registerHandler}> Create </Button>
                <Typography style={{ fontSize: "18px", marginTop: '20px' }} >
                    if you have account already then{" "}
                    <span><Link to="/login" style={{ color: '#791314' }}>Login Here</Link></span>
                </Typography>
                <MessagePopup
                    message={resp}
                    open={openPopUp}
                    handleAlertClose={() => setOpenPopUp(!openPopUp)}
                    severity={severityMsg}
                />
            </Box>
        </div>
    );
}

const btn = {
    background: "#791314",
    width: "200px",
    marginTop: "15px",
    padding: "7px",
    textTransform: "capitalize",
    fontSize: "15px",
    color: '#fff'
}

export default CustomerRegisteration;