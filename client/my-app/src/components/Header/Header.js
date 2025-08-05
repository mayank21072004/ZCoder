import React, { useContext } from 'react';
import { AppBar, Toolbar, Button, Box, styled } from '@mui/material';
import logo from './logo.png';
import { AccountContext } from '../constants/contexts/AccountProvider';

const HeaderContainer = styled(AppBar)({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  padding: '0vh 15vh', // Converted 20px and 100px to vh
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  zIndex: 99,
  backgroundColor: 'black',
  boxShadow: 'none',
});

const Logo = styled('img')({
  width: '13vh', // Converted 85px to vh
  userSelect: 'none',
  height: '10vh'
});

const NavigationButton = styled(Button)({
  fontSize: '1.1em',
  color: 'white',
  fontWeight: 500,
  marginLeft: '6vh', // Converted 40px to vh
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    left: 0,
    bottom: '-0.9vh', // Converted 6px to vh
    width: '100%',
    height: '0.45vh', // Converted 3px to vh
    background: 'white',
    borderRadius: '5px',
    transform: 'scaleX(0)',
    transition: 'transform 0.5s',
  },
  '&:hover::after': {
    transform: 'scaleX(1)',
  },
});

const LoginButton = styled(Button)({
  width: '19.5vh', // Converted 130px to vh
  height: '7vh', // Converted 50px to vh
  background: 'transparent',
  border: '2px solid white', // Converted 2px to vh
  borderRadius: '6px',
  fontSize: '1.1em',
  color: 'white',
  fontWeight: 500,
  marginLeft: '6vh', // Converted 40px to vh
  '&:hover': {
    background: 'white',
    color: 'black',
  },
});

const RiHeader = () => {
  const { setAccount } = useContext(AccountContext);
  const { setPerson, setPage } = useContext(AccountContext);
  
  const logOut = () => {
    setAccount(null);
    setPerson({});
  }
  const cl1 = () => {
    setPage(1);
  }
  const cl2 = () => {
    setPage(2);
  }
  const cl3 = () => {
    setPage(3);
  }
  const cl4 = () => {
    setPage(4);
  }
  const cl5 = () => {
    setPage(6);
  }
  
  return (
    <HeaderContainer position="static">
      <Toolbar>
        <Logo src={logo} alt="Logo" />
        <Box className="navigation">
          <NavigationButton className="ello" onClick={cl1}>Profile</NavigationButton>
          <NavigationButton className="ello" onClick={cl2}>Contests</NavigationButton>
          <NavigationButton className="ello" onClick={cl3}>Community</NavigationButton>
          <NavigationButton className="ello" onClick={cl4}>Chat</NavigationButton>  
          <LoginButton className="bttnlogin" onClick={logOut}>Logout</LoginButton>
        </Box>
      </Toolbar>
    </HeaderContainer>
  );
};

export default RiHeader;
