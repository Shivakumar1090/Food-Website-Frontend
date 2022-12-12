import { AppBar, InputBase, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import SearchIcon from "@mui/icons-material/Search";

const Navbar = () => {
  return (
    <div>
      <AppBar style={appbar} elevation={5}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Typography style={logo}>Mithai Shop</Typography>
        </Link>
        <Box
          style={{
            display: "flex",
            border: "1px solid #791314",
            borderRadius: "10px",
            padding: "3px 5px 3px 15px",
          }}
        >
          <InputBase
            placeholder="Search"
            style={{ width: "400px", color: "#791314" }}
          />
          <SearchIcon
            style={{
              color: "#791314",
              fontSize: "26px",
              marginTop: "auto",
              marginBottom: "auto",
            }}
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
            style={{ textDecoration: "none", marginLeft: "5px" }}
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
};

export default Navbar;
