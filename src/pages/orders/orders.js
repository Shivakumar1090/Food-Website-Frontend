import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
// import './orders.scss';
import { toast } from 'react-toastify';
import axios from 'axios';
import Order from './orderComp';

const {GET_USER_ORDERS} = require('../../apis/order');

const OrdersSection = () => {
  const [orders, setOrders] = useState([]);
  const [statusFilter, setStatusFilter] = useState("");
  const [fetching, setFetching] = useState(false);
  const statusOptions = ['Placed', 'Accepted', 'Out for Delivery', 'Completed', 'Cancelled'];

  useEffect(() => {
    fetchOrders();
  }, [statusFilter])

  const fetchOrders = async () => {
    let payload = {
      id: window.localStorage.getItem('id'),
      token: window.localStorage.getItem('token'),
      status: statusFilter
    }
    setFetching(true);
    try {
      const data = await axios.post(GET_USER_ORDERS , payload);
      setOrders(data.data);
      console.log(data);
      setFetching(false);
    } catch (err) {
      toast.error("couldn't fetch orders", { position: toast.POSITION.TOP_CENTER });
      setFetching(false);
    }
  }

  return (
    <Box display="flex" flexDirection="column" alignItems="center" gap="25px" marginTop="20px">
        <Box display="flex" alignItems="center" gap="25px">
          <Typography>Status:</Typography>
          <Select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            displayEmpty
            inputProps={{ 'aria-label': 'Without label' }}
            className='status-dropdown'
          >
            <MenuItem value="">All</MenuItem>
            {
              statusOptions.map((status) => (
                <MenuItem value={status}>{status}</MenuItem>
              ))
            }
          </Select>
        </Box>
        <Box className='orders-list' marginTop="20px">
          
          {fetching ?
             <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" className="noData-container">
              <CircularProgress />
            </Box>
            :  orders.length > 0 &&
            <Box display="flex" alignItems="center" flexWrap="wrap" gap="20px" className='items-list'>
                {
                  orders.map(item => <Order data={item} key={item._id}  fetchOrders={fetchOrders} />)
                }
              </Box>
          }
          
          {/* <If condition={!fetching}>
            <If condition={orders.length > 0}>
              <Box display="flex" alignItems="center" flexWrap="wrap" gap="20px" className='items-list'>
                {
                  orders.map(item => <Order data={item}  fetchOrders={fetchOrders} />)
                }
              </Box>
            </If>
            <If condition={orders.length === 0}>
              <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" className="noData-container">
                <img className='empty-cart-icon' src={emptyList} alt="empty-cart" />
                <Typography className="empty-text">No orders available!</Typography>
              </Box>
            </If>
          </If> */}
        </Box>
      </Box>
  );
};



export default OrdersSection;