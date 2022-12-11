import { AppBar, Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Link} from "react-router-dom";

const Navbar = () => {
    return ( 
        <div>
            <AppBar style={appbar} elevation={0}>
                <Link to="/" style={{textDecoration: 'none'}}>
                    <Typography variant="h5" color='#E82728' fontWeight='bold'>Hunry</Typography>
                </Link>
                <Box style={{display: 'flex'}}>
                    <Link to="/login/user" style={{textDecoration: 'none'}}>
                        <Button style={{color: '#000' ,}}>Login</Button>
                    </Link>
                    <Link to="/register/user" style={{textDecoration: 'none'}}>
                        <Button style={{color: '#000' ,}}>Register</Button>
                    </Link>
                </Box>
            </AppBar>
        </div>
     );
}

const appbar = {
    background: '#fff' ,
    display: 'flex' ,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '10px 25px 10px 25px',
}

export default Navbar;