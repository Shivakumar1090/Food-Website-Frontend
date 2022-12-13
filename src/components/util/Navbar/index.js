import { AppBar, Input, InputBase, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import InputAdornment from "@mui/material/InputAdornment";
import LadduImg from "./laddu.png";
const Navbar = () => {
  return (
    <div>
      <AppBar style={appbar} elevation={0}>
        <Box display="flex">
          <img
            src={LadduImg}
            alt=""
            style={{
              width: "35px",
              height: "30px",
              paddingRight: "10px",
            }}
          ></img>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Typography style={logo}>Mithai Shop</Typography>
          </Link>
        </Box>
        <Box
          style={{
            display: "flex",
            border: "1px solid #7F0606",
            borderRadius: "12px",
            padding: "7px",
            paddingLeft: "15px",
          }}
        >
          <InputBase
            placeholder="Search"
            style={{ width: "500px", color: "#791314" }}
            autoFocus="true"
            // type="search"
            endAdornment={
              <InputAdornment position="end">
                <SearchIcon
                  style={{
                    color: "#791314",
                    fontSize: "30px",
                  }}
                />
              </InputAdornment>
            }
          />
        </Box>
        <Box style={{ display: "flex" }}>
          <Link to="/login/user" style={{ textDecoration: "none" }}>
            <AccountCircleOutlinedIcon
              style={{ color: "#791314", fontSize: "30px" }}
            />
          </Link>
          <Link
            to="/cart"
            style={{ textDecoration: "none", marginLeft: "10px" }}
          >
            <LocalMallOutlinedIcon
              style={{ color: "#791314", fontSize: "28px" }}
            />
          </Link>
        </Box>
      </AppBar>
    </div>
  );
};

const logo = {
  fontFamily: "Raleway",
  color: "#791314",
  fontWeight: "bold",
  fontSize: "23px",
};

const appbar = {
  background: "#fff",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  padding: "15px 30px 15px 30px",
  // marginBottom: '100px',
};

export default Navbar;
