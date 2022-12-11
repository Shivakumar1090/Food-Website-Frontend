import { Box, Button, Input, Typography } from "@mui/material";
import { makeStyles} from '@mui/styles';
import { Link } from "react-router-dom";

const CustomerRegisteration = () => {
    const classes = useStyles();
    return ( 
        <div>
            <Box className={classes.container}>
                <Typography variant="h4" style={{color: '#FF406B'}}>Customer Registeration</Typography>
                <Input
                    className={classes.input}
                    placeholder="Name"    
                ></Input>
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
                <Input
                    className={classes.input}
                    placeholder="Confirm Password"
                    type="password"
                ></Input>
                <Button 
                    style={{background: '#3D3D3D',color: '#fff',width: '200px' ,marginTop: '10px',padding: '7px'}}
                >Register</Button>
                <Box display='flex' marginTop='15px'>
                    <Typography>Already have an account ?</Typography>
                    <Link to='/login/user' style={{textDecoration: 'none',paddingLeft: '5px'}}>
                        <Typography>Login</Typography>
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
        width: '450px',
        padding: '5px',
        margin: '15px',
    },
    
});
 
export default CustomerRegisteration;