import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from "axios"
import Avatar from '@mui/material/Avatar';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import FormControlLabel from '@mui/material/FormControlLabel';
import Link from '@mui/material/Link';
import Snackbar from '@mui/material/Snackbar';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="/">
                Academy3s
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export default function RegisterFunctionality() {
    const [open, setOpen] = useState(false)
    const [snackbarMessage, setSnackbarMessage] = useState('')
    const [snackbarType, setSnackbarType] = useState('success')
    const navigate = useNavigate();

    const handleSnackbarTextAndSeverity = (severity, message) => {
        console.log("in hancldeSnackbar")
        setOpen(true)
        setSnackbarType(severity)
        setSnackbarMessage(message)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const name = data.get('name')
        const email = data.get('email')
        const phone = data.get('number')
        const password = data.get('password')
        const regex = /^[6-9]$/; //for checking if number starts from 6,7,8 and 9
        console.log(phone[0])
        console.log(regex.test(phone[0]))
        if (phone.length === 10 && !regex.test(phone[0])) {
            handleSnackbarTextAndSeverity('error', 'please input valid number')
        }
        else if (password.length < 6) {
            setSnackbarMessage('please insert password above 6 length')
        }
        else {
            axios.post(`${process.env.REACT_APP_BACKEND_URL}/users/register`, {
                name,
                email,
                phone,
                password,
            })
                .then((res) => {
                    console.log(res.status)
                    if (res.status === 200 || 201) {
                        setOpen(true)
                        navigate('/', { replace: true })
                    } else {
                        alert("error in log in")
                    }
                })
                .catch(err => {
                    alert("error in log in")
                    console.log("error", err)
                })
        }
    };

    const bottom = "bottom"
    const right = "right"

    const handleClose = () => {
        setOpen(false)
    };

    return (
        <>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert variant="filled" onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    {snackbarMessage}
                </Alert>
            </Snackbar>

            {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}> */}
            <Link href="/">
                <img src='../../images/academy-logo.png' alt="academy-logo" width="165px" height="70px" style={{ opacity: "0.8" }} />
            </Link>
            {/* </Avatar > */}
            {/* <Typography component="h1" variant="h5">
                Sign up
            </Typography> */}
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="name"
                    label="Full Name"
                    name="name"
                    autoComplete="name"
                    autoFocus
                />
                <TextField
                    type="email"
                    margin="normal"

                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                />
                <TextField
                    type="number"
                    margin="normal"
                    required
                    fullWidth
                    id="number"
                    label="Phone Number"
                    name="number"
                    autoComplete="number"
                    autoFocus
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                />
                <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    Sign Up
                </Button>
                <Grid container>
                    <Grid item alignItems={'center'}  >
                        <Link href="/login" variant="body2">
                            {"log in"}
                        </Link>
                    </Grid>
                </Grid>
                <Copyright sx={{ mt: 5 }} />
            </Box >
        </>
    );
}