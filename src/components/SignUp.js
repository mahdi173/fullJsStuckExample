import React, { useEffect, useState } from 'react';
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




const theme = createTheme();

export default function SignUp() {

  const [name,setName]= useState("");
   const [nameError, setNameError]= useState(null);
   const [email,setEmail]= useState("");
   const [emailError, setEmailError]= useState(null);
   const [password,setPassword]= useState("");
   const [passwordError, setPasswordError]= useState(null);
  //const userNameFormat= new RegExp  ('^[a-zA-Z0-9]+$');
   
  const handleSubmit = async (event) => {
    event.preventDefault();
    var errors=0;
    if (!email ){
      setEmailError("Email is required");
      errors++;
    }else if(!password){
       setPasswordError("Password is required");
       errors++;
    }else if (!name){
      setNameError("Username is required");
      errors++;
    }
    if(!validator.isEmail(email)){
      setEmailError("Email must be in correct fromat");
      errors++;
     }
     if(!validator.isAlpha(name) ){
      setNameError("Username must be in correct fromat (ex : userX)");
      errors++;
     }
     if (errors) return;
    const fdata = new FormData(event.currentTarget);    
    const data ={
      userName: fdata.get('userName'),
      email: fdata.get('email'),
      password: fdata.get('password')
    };
    //console.log(data);
    await axios.post("http://localhost:3010/api/auth/signup", data);
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
            Sign up
          </Typography>
          <Box component="form"  onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="userName"
                  required
                  fullWidth
                  id="userName"
                  label="User Name"
                  autoFocus
                  value= {name}
                  onChange={e=> setName(e.target.value)}
                  error={!!nameError}
                  helperText={nameError}
                />
              </Grid>
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
                  value={password}
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
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/auth/LogIn" variant="body2">
                  Already have an account? Log in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}