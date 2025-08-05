import React from 'react';
import { jwtDecode } from "jwt-decode";
import {  useContext } from "react";
import {Dialog,Typography,List,ListItem, Box,styled} from '@mui/material';
import {GoogleLogin} from '@react-oauth/google';
import { AccountContext } from '../../constants/contexts/AccountProvider';// the context that we require is imported we have multiple context 
import { addUser } from '../../../service/api';
import './LoginForm.css'; // Create a separate CSS file if necessary

const LoginForm = () => {
  const {setPage}=useContext(AccountContext);
  const {setAccount}=useContext(AccountContext);// we import the function to set the value of our global context variabke here
  function onLoginError(res){
    console.log(res);
    };
   async function onLoginSuccess(res){
    let decoded=jwtDecode(res.credential);
    setAccount(decoded);
    setPage(1);
     console.log(decoded);
     await addUser(decoded);
     console.log("yuhu");
    };
  return (
    <div className="Wrapper">
      <div className="form-box">
        <h2>Login</h2>
        <br></br>
        <br></br>
        <Box style={{position:"relative"}}>
        <GoogleLogin
          onSuccess={onLoginSuccess}
          onError={onLoginError}
        />
      </Box>
      </div>
    </div>
  );
}

export default LoginForm;