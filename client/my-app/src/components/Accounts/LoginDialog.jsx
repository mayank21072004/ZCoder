import React, { useContext } from 'react';
import { Dialog, Box, styled, Typography } from '@mui/material';
import { GoogleLogin } from '@react-oauth/google';
import { AccountContext } from '../constants/contexts/AccountProvider';
import { jwtDecode } from 'jwt-decode';
import { addUser, getProfile } from '../../service/api';
import logo from "../Header/logo.png"; // Adjust the import path as necessary

const dialogStyle = {
  height: '96%',
  marginTop: '12%',
  width: '60%',
  maxWidth: '100%',
  maxHeight: '100%',
  boxShadow: 'none',
  overflow: 'hidden',
  background: 'linear-gradient(135deg, #000000 0%, #050100 100%)' // Black gradient background
};

const Container = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%'
});

const GoogleButtonContainer = styled(Box)({
  position: 'relative',
  textAlign: 'center'
});

const WhiteBorderBox = styled(Box)({
  border: '2px solid #3b3b3b',
  width: '400px',
  height: '450px',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  alignItems: 'center',
  background: 'linear-gradient(135deg, #434343 0%, #050505 100%)', // Previous gradient background
  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.6)', // Box shadow
  borderRadius: '12px', // Rounded corners
  zIndex: 10,
  padding: '20px' // Added padding to ensure the content doesn't touch the edges
});

const Text = styled(Typography)({
  color: '#ffffff', // White text color
  fontSize: '40px', // Reduced text size
  fontWeight: 800, // Normal font weight
  margin: '4px 0', // Margin around the text
  //alignSelf: 'flex-start' // Aligns the text to the top
});

const Logo = styled('img')({
  width: '100px', // Adjust the size as necessary
  height: '100px', // Adjust the size as necessary
  position: 'fixed', // Positioned relative to the viewport
  top: '20px',
  left: '20px',
  zIndex: 20 // Higher z-index to ensure it stays on top
});

function LoginDialog() {
  const { setPage, setProfile, setAccount } = useContext(AccountContext);

  const onLoginError = (res) => {
    console.log(res);
  };

  const onLoginSuccess = async (res) => {
    let decoded = jwtDecode(res.credential);
    setAccount(decoded);
    setPage(1);
    await addUser(decoded);
    let response = await getProfile(decoded.sub);
    setProfile(response);
  };

  return (
    <Dialog open={true} PaperProps={{ sx: dialogStyle }} hideBackdrop={true}>
      <Logo src={logo} alt="Logo" />
      <Container>
        <GoogleButtonContainer>
          <WhiteBorderBox>
            <Text>Login</Text>
            <GoogleLogin
              onSuccess={onLoginSuccess}
              onError={onLoginError}
              render={(renderProps) => (
                <button onClick={renderProps.onClick} disabled={renderProps.disabled}>
                  Login with Google
                </button>
              )}
            />
          </WhiteBorderBox>
        </GoogleButtonContainer>
      </Container>
    </Dialog>
  );
}

export default LoginDialog;