import { useState, useContext, useEffect, useRef, Fragment } from 'react';
import { useNavigate } from "react-router-dom"
import axios from "axios";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import PaymentForm from './PaymentForm';
import Review from './Review';
import cartContext from '../../context/carItems/cartContext';
import paymentDetailContext from '../../context/paymentDetail/paymentDetailContext';

function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const steps = ['Review your order', 'Payment Gateway', 'Payment Details'];

function getStepContent(step) {
    switch (step) {
        case 0:
            return <Review />;
        case 1:
            return <p>please wait! razorpay gateway is opening</p>;
        case 2:
            return <PaymentForm />;
        default:
            throw new Error('Unknown step');
    }
}

const theme = createTheme();

export default function Checkout() {
    const { totalValue, setTotalValue, setLocalCart } = useContext(cartContext)
    const [activeStep, setActiveStep] = useState(0);
    const activeRef = useRef(activeStep)

    const { setPaymentStatus, setpaymentOrderId, setPaymentDetailAmount } = useContext(paymentDetailContext)

    const navigate = useNavigate()

    const loadScript = (src) => {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = src;
            script.onload = () => {
                resolve(true);
            }
            script.onerror = () => {
                resolve(false)
            }
            document.body.appendChild(script);
        })
    }

    const deleteCartItems = () => {
        window.localStorage.removeItem("cartItems")
        setLocalCart([])
        setTotalValue(0)
    }

    const updatePaymentDetails = (status, orderId) => {
        status ? setPaymentStatus("success") : setPaymentStatus("failure")
        setpaymentOrderId(orderId)
        setPaymentDetailAmount(totalValue)
    }

    useEffect(() => {
    }, [activeStep])

    const handleNext = async () => {
        setActiveStep(prevActiveStep => prevActiveStep + 1)
        activeRef.current = activeRef.current + 1
        console.log(activeStep)
        console.log("activeRef.current:", activeRef.current)



        if (activeRef.current === 1) {
            console.log("Razorpay")

            const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js")
            if (!res) {
                alert("Razorpay SDK failed to load. Are you online?")
                return;
            }
            let result = await axios.post("http://localhost:8000/payment", { amount: totalValue })

            console.log(result.data)
            if (!result) {
                alert("Server error. Are you online?")
                return;
            } else {
                let options = {
                    key: "rzp_test_4jyyPp7LWJ0H2v",
                    currency: 'INR',
                    amount: result.data.response.amount,
                    order_id: result.data.response.id,
                    name: 'Academy3s',
                    description: 'Test Transactions',
                    image: '/images/academy-logo.png',
                    handler: async function (response) {
                        console.log("---response--->", response)
                        if (response.razorpay_payment_id) {
                            // Payment successful
                            // Update your database or perform other actions
                            console.log("Payment successful. Payment ID:", response.razorpay_payment_id);
                            activeRef.current = activeRef.current + 1
                            deleteCartItems()
                            updatePaymentDetails(true, result.data.response.id)
                            setActiveStep(activeStep + 1)
                            setActiveStep(activeStep + 2)
                            console.log("activeRef.current:::::::::::::::::", activeRef.current)
                            console.log("active step:", activeStep)
                            // Display success message to the user
                            console.log("Payment successful! Thank you for your purchase.");
                        } else {
                            // Payment failed or cancelled
                            // Handle the error or cancellation
                            console.log("Payment failed or cancelled:", response.error);
                            // Display error message to the user
                            alert("Payment failed or cancelled. Please try again.");
                        }
                    },
                    prefill: {
                        email: 'support@academy3s.com',
                        contact: 9289497697
                    },
                    notes: {
                        address: "Academy3s Corporate Office"
                    },
                    theme: {
                        color: "#003399"
                    }
                }
                let paymentObject = new window.Razorpay(options);
                paymentObject.open()
            }
        }
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
        activeRef.current = activeRef.current - 1
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
                <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                    <Typography component="h1" variant="h4" align="center">
                        Checkout
                    </Typography>
                    <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5, display: 'flex', justifyContent: 'center' }}>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    {activeRef.current === steps.length ? (
                        <Fragment>
                            <Typography variant="h5" gutterBottom>
                                Thank you for your order.
                            </Typography>
                            <Typography variant="subtitle1">
                                Your order number is #2001539. We have emailed your order
                                confirmation, and will send you an update when your order has
                                shipped.
                            </Typography>
                        </Fragment>
                    ) : (
                        <Fragment>
                            {getStepContent(activeRef.current)}
                            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                                {activeRef.current === 0 && (
                                    <Button variant="contained" onClick={handleNext} sx={{ mt: 3, ml: 1 }}>
                                        Place Order
                                    </Button>
                                )}
                                {activeRef.current === 1 && (
                                    <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                                        Back
                                    </Button>
                                )}
                                {activeRef.current === 2 && (
                                    <Button variant="contained" onClick={() => navigate("/")} sx={{ mt: 3, ml: 1 }}>
                                        Home
                                    </Button>
                                )}
                            </Box>
                        </Fragment>
                    )}
                </Paper>
                <Copyright />
            </Container>
        </ThemeProvider >
    );
}