import React,  { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import dp from '../image/login_page.jpeg';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { authenticateSignup } from '../service/api';

const signupInitialValue = {
    email: '',
    password: '',
}

const Login = () => {

    const [signup, setSignup] = useState(signupInitialValue)

    const onInputChange = (e) =>{
        setSignup({...signup, [e.target.name]: e.target.value})
        console.log(signup)

    }

    const signupUser = async () =>{
         await authenticateSignup(signup);
    }

    return (
        <Box sx={{ display: 'flex', justifyContent: "center", alignItems: "center", width: "100vw", height: "100vh" }}>
            <Card sx={{ display: 'flex', justifyContent: "space-evenly", alignItems: "center", width: "1000px", height: "600px" }}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="h5">
                            Welcome back to
                        </Typography>
                        <Typography component="div" variant="h5">
                            Pretty Login
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                            It's great to have you back
                        </Typography>
                    </CardContent>
                    <Box sx={{ pl: 1, pb: 1 }}>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                            Email
                        </Typography>
                        <TextField
                            type="email"
                            name='email'
                            onChange={(e) => onInputChange(e)}
                        />
                    </Box>
                    <Box sx={{ pl: 1, pb: 1 }}>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                            Password
                        </Typography>
                        <TextField
                            type="password"
                            name='password'
                            onChange={(e) => onInputChange(e)}
                        />
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <FormControlLabel control={<Checkbox sx={{ color: "purple" }} />} label="Remind" />
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                            Forget Password?
                        </Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <Link to="/home" style={{textDecoration:"none"}}>   
                            <Button onClick={()=> signupUser()} sx={{ background: "purple" }} variant="contained">Login</Button>
                        </Link>
                        <Button sx={{ borderColor: "purple", color: "purple" }} variant="outlined">Signup</Button>
                    </Box>
                    <Box sx={{ textAlign: "center", marginTop: "2rem", color: "purple", cursor: "pointer" }}>
                        <Link to="/home" style={{textDecoration:"none"}}>
                            Skip -&gt;
                        </Link>
                    </Box>
                </Box>
                <CardMedia
                    component="img"
                    sx={{ width: 500 }}
                    image={dp}
                    alt="Live from space album cover"
                />
            </Card>
        </Box>
    )
}

export default Login;

