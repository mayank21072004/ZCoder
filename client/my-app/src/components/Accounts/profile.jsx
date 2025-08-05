// Profile.js
import React from 'react';
import {
  Container,
  Box,
  Card,
  CardContent,
  Tabs,
  Tab,
  Avatar,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import { styled } from '@mui/system';

const RootContainer = styled(Container)({
  marginTop: 20,
  backgroundImage: 'url("zcode.jpg")',
});

const CustomCard = styled(Card)({
  boxShadow: '0 1px 4px rgba(24, 28, 33, 0.012)',
});

const CustomAvatar = styled(Avatar)({
  width: 80,
  height: 'auto',
});

const Profile = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <RootContainer>
      <Box py={3} mb={4}>
        <h4>Profile</h4>
      </Box>
      <CustomCard>
        <Tabs value={value} onChange={handleChange} aria-label="profile tabs">
          <Tab label="General" />
          <Tab label="Info" />
          <Tab label="Other profiles" />
        </Tabs>
        <CardContent>
          {value === 0 && (
            <Box sx={{ p: 2 }}>
              <Box display="flex" alignItems="center">
                <CustomAvatar
                  src="https://www.shutterstock.com/image-vector/user-profile-icon-vector-avatar-600nw-2247726673.jpg"
                  alt="User Avatar"
                />
                <Box ml={4}>
                  <Button variant="outlined" component="label" sx={{ marginRight: 2 }}>
                    Upload new photo
                    <input type="file" hidden />
                  </Button>
                  <Button variant="contained">Reset</Button>
                </Box>
              </Box>
              <form>
                <FormControl fullWidth sx={{ mb: 2 }}>
                  <TextField label="Username" variant="outlined" placeholder="Username" fullWidth />
                </FormControl>
                <FormControl fullWidth sx={{ mb: 2 }}>
                  <TextField label="Name" variant="outlined" placeholder="Name" fullWidth />
                </FormControl>
                <FormControl fullWidth sx={{ mb: 2 }}>
                  <TextField label="E-mail" variant="outlined" placeholder="E-mail" fullWidth />
                </FormControl>
                <FormControl fullWidth sx={{ mb: 2 }}>
                  <TextField label="Institution" variant="outlined" placeholder="xyz" fullWidth />
                </FormControl>
              </form>
            </Box>
          )}
          {value === 1 && (
            <Box sx={{ p: 2 }}>
              <form>
                <FormControl fullWidth sx={{ mb: 2 }}>
                  <TextField label="Bio" variant="outlined" placeholder="Bio" multiline rows={5} fullWidth />
                </FormControl>
                <FormControl fullWidth sx={{ mb: 2 }}>
                  <TextField label="Birthdate" variant="outlined" placeholder="May 3, 1995" fullWidth />
                </FormControl>
                <FormControl fullWidth sx={{ mb: 2 }}>
                  <InputLabel>Country</InputLabel>
                  <Select defaultValue="India">
                    <MenuItem value="India">India</MenuItem>
                    <MenuItem value="USA">USA</MenuItem>
                    <MenuItem value="UK">UK</MenuItem>
                    <MenuItem value="Russia">Russia</MenuItem>
                    <MenuItem value="China">China</MenuItem>
                  </Select>
                </FormControl>
              </form>
            </Box>
          )}
          {value === 2 && (
            <Box sx={{ p: 2 }}>
              <form>
                <FormControl fullWidth sx={{ mb: 2 }}>
                  <TextField label="Codeforces" variant="outlined" placeholder="user" fullWidth />
                </FormControl>
                <FormControl fullWidth sx={{ mb: 2 }}>
                  <TextField label="Codechef" variant="outlined" placeholder="user" fullWidth />
                </FormControl>
                <FormControl fullWidth sx={{ mb: 2 }}>
                  <TextField label="Atcoder" variant="outlined" placeholder="user" fullWidth />
                </FormControl>
                <FormControl fullWidth sx={{ mb: 2 }}>
                  <TextField label="LinkedIn" variant="outlined" placeholder="user" fullWidth />
                </FormControl>
              </form>
            </Box>
          )}
        </CardContent>
      </CustomCard>
    </RootContainer>
  );
};

export default Profile;