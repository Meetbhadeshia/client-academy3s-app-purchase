import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from "axios"
import Avatar from '@mui/material/Avatar';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import FormControlLabel from '@mui/material/FormControlLabel';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import authContext from "../../context/auth/authContext"

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

export default function LoginFunctionality() {
    const navigate = useNavigate()
    const [open, setOpen] = useState(false)
    const { setLoggedIn, setLocalLogIn } = useContext(authContext)
    const [snackbarMessage, setSnackbarMessage] = useState('')
    const [snackbarType, setSnackbarType] = useState('success')
    const [remember, setRemember] = useState(true)

    const handleSnackbarTextAndSeverity = (severity, message) => {
        setOpen(true)
        setSnackbarType(severity)
        setSnackbarMessage(message)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget)
        const email = data.get('email')
        const password = data.get('password')

        axios.post(`${process.env.REACT_APP_BACKEND_URL}/users/login`, {
            email,
            password,
        })
            .then((res) => {
                if ((res.status === 200 || res.status === 201)) {
                    handleSnackbarTextAndSeverity("success", "successfully logged in")
                    setLoggedIn(true) // setting global variable
                    window.localStorage.setItem("isLoggedIn", true)
                    setLocalLogIn(window.localStorage.getItem("isLoggedIn")) // setting local storage variable
                    navigate('/', { replace: true })
                } else {
                    handleSnackbarTextAndSeverity("error", "error in log in")
                }
            })
            .catch(err => {
                handleSnackbarTextAndSeverity("error", "error in log in")
            })

    };

    const handleClose = () => {
        setOpen(false)
    };
    return (
        <>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert variant="filled" onClose={handleClose} severity={snackbarType} sx={{ width: '100%' }}>
                    {snackbarMessage}
                </Alert>
            </Snackbar>
            <Link href="/">
                <img src="/images/academy-logo.png" width="160px" height="70px" />
            </Link>
            <Typography component="h1" variant="h5" mt={8}>
                Sign in
            </Typography>
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
                <TextField
                    type="email"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
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
                    control={<Checkbox defaultChecked={remember} value="remember" color="primary" onClick={() => setRemember(!remember)} />}
                    label="Remember me"
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    Sign In
                </Button>
                <Grid container>
                    <Grid item xs>
                        <Link href="#" variant="body2">
                            Forgot password?
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link href="/register" variant="body2">
                            {"Don't have an account? Sign Up"}
                        </Link>
                    </Grid>
                </Grid>
                <Copyright sx={{ mt: 5 }} />
            </Box>
        </>
    );
}