import { Box } from "@mui/system";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
    return ( 
        <div>
            <Box>
                <Link to='/admin/products'>Products</Link>
            </Box>
        </div>
     );
}
 
export default AdminDashboard;