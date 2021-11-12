import * as React from 'react';
import { Grid } from '@mui/material';

import MyOrders from '../MyOrders/MyOrders';

const OrdersInfo = () => {
    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={4}>
                    <img className="img-fluid" src="https://i.ibb.co/h29CpKX/294-2946413-we-send-your-order-plus-an-additional-surprise-vector-graphics-removebg-preview.png" alt="" />
                </Grid>
                <Grid item xs={12} sm={12} md={8}>
                    <MyOrders></MyOrders>
                </Grid>


            </Grid>
        </div>
    );
};

export default OrdersInfo;