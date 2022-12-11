import { Box, Button, Input, Typography } from "@mui/material";
import { makeStyles} from '@mui/styles';
import { Link } from "react-router-dom";

const RestuarantLogin = () => {
    const classes = useStyles();
    return ( 
        <div>
            <Box className={classes.container}>
                <Typography variant="h4" style={{color: '#FF406B'}}>Restaurant Login</Typography>
                <Input 
                    className={classes.input}
                    placeholder="Email"  
                    type="email"  
                >    
                </Input>
                <Input
                    className={classes.input}
                    placeholder="Password"
                    type="password"
                ></Input>
                <Button 
                    style={{background: '#3D3D3D',color: '#fff',width: '200px' ,marginTop: '10px',padding: '7px'}}
                >Login</Button>
                <Box display='flex' marginTop='15px'>
                    <Typography>Don't have an account yet? </Typography>
                    <Link to='/register/restaurant' style={{textDecoration: 'none',paddingLeft: '5px'}}>
                        <Typography>SignUp</Typography>
                    </Link>
                </Box>
            </Box>
        </div>
     );
}
 
const useStyles = makeStyles({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop:'100px'
    },
    input: {
        width: '350px',
        padding: '5px',
        margin: '10px',
    },
    
});

export default RestuarantLogin;