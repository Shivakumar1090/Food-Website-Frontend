import {  Alert, Snackbar } from "@mui/material";

const MessagePopup = ({open,message,handleAlertClose,severity}) => {
    return ( 
        <div>
            <Snackbar 
                anchorOrigin={ {vertical: 'bottom' ,horizontal: 'right'}}
                autoHideDuration={4000} 
                open={open}
                message={message} 
                onClose={handleAlertClose}
                key={"topenter"}
            >
                <Alert severity={severity} onClose={handleAlertClose} style={{fontSize: '16px'}}>
                    {message}
                </Alert>
            </Snackbar>
        </div>
     );
}
 
export default MessagePopup;