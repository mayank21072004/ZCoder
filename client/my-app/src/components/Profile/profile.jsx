
import React, { useContext, useState, useEffect } from 'react';
import RiHeader from '../Header/Header';
import { AccountContext } from '../constants/contexts/AccountProvider';
import {
  Container,
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Grid,
} from '@mui/material';
import { styled } from '@mui/system';

const RootContainer = styled(Container)({
  marginTop: 20,
  backgroundColor: 'transparent',
});

const CustomCard = styled(Card)({
  boxShadow: '0 1px 4px rgba(24, 28, 33, 0.012)',
  backgroundColor: 'transparent',
});

const Profile = () => {
  const { setPage, profile } = useContext(AccountContext);
  const [userProfile, setUserProfile] = useState(profile);

  useEffect(() => {
    setUserProfile(profile);
  }, [profile]);

  const cl5 = () => {
    setPage(5);
  };

  return (
    <RootContainer>
      <RiHeader />
      <Box py={3} mb={4}></Box>
      {userProfile ? (
        <CustomCard>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Box 
                  display="flex" 
                  flexDirection="column" 
                  justifyContent="flex-end"
                  border={1} 
                  borderColor="white" 
                  p={1} 
                  minHeight={80}
                >
                  <Typography variant="h5" sx={{ color: 'white' }}>{userProfile.username}</Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box 
                  display="flex" 
                  flexDirection="column" 
                  justifyContent="flex-end"
                  border={1} 
                  borderColor="white" 
                  p={1} 
                  minHeight={80}
                >
                  <Typography variant="h6" sx={{ color: 'white' }}>Name: {userProfile.name}</Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box 
                  display="flex" 
                  flexDirection="column" 
                  justifyContent="flex-end"
                  border={1} 
                  borderColor="white" 
                  p={1} 
                  minHeight={80}
                >
                  <Typography variant="h6" sx={{ color: 'white' }}>E-mail: {userProfile.email}</Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box 
                  display="flex" 
                  flexDirection="column" 
                  justifyContent="flex-end"
                  border={1} 
                  borderColor="white" 
                  p={1} 
                  minHeight={80}
                >
                  <Typography variant="h6" sx={{ color: 'white' }}>Institution: {userProfile.institution}</Typography>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box 
                  display="flex" 
                  flexDirection="column" 
                  justifyContent="flex-end"
                  border={1} 
                  borderColor="white" 
                  p={1} 
                  minHeight={80}
                >
                  <Typography variant="h6" sx={{ color: 'white' }}>Bio: {userProfile.bio}</Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box 
                  display="flex" 
                  flexDirection="column" 
                  justifyContent="flex-end"
                  border={1} 
                  borderColor="white" 
                  p={1} 
                  minHeight={80}
                >
                  <Typography variant="h6" sx={{ color: 'white' }}>Birthdate: {userProfile.birthdate}</Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box 
                  display="flex" 
                  flexDirection="column" 
                  justifyContent="flex-end"
                  border={1} 
                  borderColor="white" 
                  p={1} 
                  minHeight={80}
                >
                  <Typography variant="h6" sx={{ color: 'white' }}>Country: {userProfile.country}</Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box 
                  display="flex" 
                  flexDirection="column" 
                  justifyContent="flex-end"
                  border={1} 
                  borderColor="white" 
                  p={1} 
                  minHeight={80}
                >
                  <Typography variant="h6" sx={{ color: 'white' }}>Codeforces: {userProfile.codeforces}</Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box 
                  display="flex" 
                  flexDirection="column" 
                  justifyContent="flex-end"
                  border={1} 
                  borderColor="white" 
                  p={1} 
                  minHeight={80}
                >
                  <Typography variant="h6" sx={{ color: 'white' }}>Codechef: {userProfile.codechef}</Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box 
                  display="flex" 
                  flexDirection="column" 
                  justifyContent="flex-end"
                  border={1} 
                  borderColor="white" 
                  p={1} 
                  minHeight={80}
                >
                  <Typography variant="h6" sx={{ color: 'white' }}>Atcoder: {userProfile.atcoder}</Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box 
                  display="flex" 
                  flexDirection="column" 
                  justifyContent="flex-end"
                  border={1} 
                  borderColor="white" 
                  p={1} 
                  minHeight={80}
                >
                  <Typography variant="h6" sx={{ color: 'white' }}>LinkedIn: {userProfile.linkedin}</Typography>
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </CustomCard>
      ) : (
        <Box 
          display="flex" 
          flexDirection="column" 
          justifyContent="center" 
          alignItems="center" 
          minHeight="50vh"
          textAlign="center"
        >
          <Typography variant="h6" sx={{ color: 'white' }}>Profile not made yet</Typography>
        </Box>
      )}
      <Button variant="contained" color="primary" sx={{ mt: 2 }} onClick={cl5}>
        Edit Profile
      </Button>
    </RootContainer>
  );
};

export default Profile;
