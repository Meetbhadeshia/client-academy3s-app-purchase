import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
// @mui
import { Stack, IconButton, InputAdornment, TextField, Checkbox, FormControlLabel, Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import loginContext from "../../../context/loginContext/loginContext"
// components
import Iconify from '../../../components/iconify';
// ----------------------------------------------------------------------

export default function LoginForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loginMessage, setLoginMessage] = useState("")
  const [showPassword, setShowPassword] = useState(false);
  const a = useContext(loginContext)

  const handleClick = () => {
    axios.post(`${process.env.REACT_APP_BACKEND_URL}/users/login`, {
      email,
      password
    }).then((res) => {
      console.log(res)
      if (res.status === 200 || res.status === 201) {
        navigate('/dashboard/products', { replace: true });
        a.setIsLoggedIn(true)
      } else {
        setLoginMessage("Error in logging you in. Check your id and password once again")
      }
    }).catch(err => {
      console.log("error in post req", err)
    })

  };

  return (
    <>
      <Stack spacing={3}>
        <TextField name="email" label="Email address" value={email} onChange={(e) => { setEmail(e.target.value) }} />

        <TextField
          name="password"
          label="Password"
          onChange={(e) => setPassword(e.target.value)}
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                  <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
          value={password}
        />
      </Stack>

      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
        <FormControlLabel
          control={
            <Checkbox
              // checked={checked}
              // onChange={handleChange}
              name="remember"
              color="primary"
            />
          }
          label="Remember me"
        />
        {/* <Link variant="subtitle2" underline="hover">
          Forgot password?
        </Link> */}
      </Stack>

      <Typography variant="body2" sx={{ mb: 5 }} color="error" >
        {loginMessage} {''}
        {/* <Link variant="subtitle2">Get started</Link> */}
      </Typography>

      <LoadingButton fullWidth size="large" type="submit" variant="contained" onClick={handleClick}>
        Login
      </LoadingButton>
    </>
  );
}
