import React, { useContext, useEffect, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import validator  from 'validator';
import {  useNavigate  } from 'react-router-dom';
import AuthContext from '../contexts/AuthContext';
const theme = createTheme();

export default function SignUp() {
  const {setUser}= useContext(AuthContext);
  
  const [email,setEmail]= useState("");
  const [emailError, setEmailError]= useState(null);
  const [password,setPassword]= useState("");
  const [passwordError, setPasswordError]= useState(null);
  const navigate = useNavigate();

  const handleSubmit = async event => {
    event.preventDefault();
    setEmailError(null);
    setPasswordError(null);
    var errors=0;
     if(! email){
      setEmailError("Email is required");
      errors++;
     }else if( ! password){
      setPasswordError("Password is required");
      errors++;
     }
     if(!validator.isEmail(email)){
      setEmailError("Email must be in correct fromat");
      errors++;
     }
     if (errors) return;
    const fdata = new FormData(event.currentTarget);
    const data ={
      email: fdata.get('email'),
      password: fdata.get('password')
    };
    try{
    const response= await axios.post("http://localhost:3010/api/auth/login", data);
    const {userId, token}= response.data;
     setUser(userId);
     localStorage.setItem("token",token);

     navigate('/');
    }  catch (e){
       console.log(e);
    }
  };
  
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Log in
          </Typography>
          <Box component="form"  onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value= {email}
                  onChange={e=> setEmail(e.target.value)}
                  error={!!emailError}
                  helperText={emailError}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value= {password}
                  onChange={e=> setPassword(e.target.value)}
                  error={!!passwordError}
                  helperText={passwordError}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Log In
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                   Forgot your password ? 
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}