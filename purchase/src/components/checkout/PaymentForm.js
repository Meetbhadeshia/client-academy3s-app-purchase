import * as React from 'react';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import paymentDetailContext from '../../context/paymentDetail/paymentDetailContext';

export default function PaymentForm(props) {
    const { paymentStatus, paymentOrderId, paymentDetailAmount } = React.useContext(paymentDetailContext)
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Payment Details
            </Typography>
            <ListItem sx={{ py: 1, px: 0 }}>
                <ListItemText primary="Payment status" />
                <Typography variant="body2" sx={{ color: paymentStatus === "success" ? "green" : "red" }}>{paymentStatus}</Typography>
            </ListItem>
            <ListItem sx={{ py: 1, px: 0 }}>
                <ListItemText primary="OrderId" />
                <Typography variant="body2">{paymentOrderId}</Typography>
            </ListItem>
            <ListItem sx={{ py: 1, px: 0 }}>
                <ListItemText primary="Amount" />
                <Typography variant="body2">{paymentDetailAmount}</Typography>
            </ListItem>
        </React.Fragment>
    );
}