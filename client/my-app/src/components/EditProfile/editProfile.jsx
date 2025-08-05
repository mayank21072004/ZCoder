
import React, { useState, useContext } from 'react';
import RiHeader from '../Header/Header';
import { AccountContext } from '../constants/contexts/AccountProvider';
import { addProfile } from '../../service/api';
import {
  Container,
  Box,
  Card,
  CardContent,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
} from '@mui/material';
import { styled } from '@mui/system';

const RootContainer = styled(Container)({
  marginTop: 20,
  backgroundImage: 'url("zcode.jpg")',
});

const CustomCard = styled(Card)({
  boxShadow: '0 1px 4px rgba(24, 28, 33, 0.012)',
});

const EditProfile = () => {
  const { account, setPage,setProfile } = useContext(AccountContext);

  const [formData, setFormData] = useState({
    username: '',
    name: '',
    email: '',
    institution: '',
    bio: '',
    birthdate: '',
    country: 'India',
    codeforces: '',
    codechef: '',
    atcoder: '',
    linkedin: '',
    sub: account.sub,
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Check if any field is empty
    for (const key in formData) {
      if (formData[key].trim() === '') {
        alert(`Please fill in the ${key} field.`);
        return;
      }
    }

    const data = { ...formData };

    console.log(data);
    await addProfile(data);
    setFormData({
      username: '',
      name: '',
      email: '',
      institution: '',
      bio: '',
      birthdate: '',
      country: 'India',
      codeforces: '',
      codechef: '',
      atcoder: '',
      linkedin: '',
      sub: account.sub,
    });
    setPage(1);
    setProfile(data);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <RootContainer>
      <RiHeader />
      <Box py={3} mb={4}>
        <Typography variant="h4" sx={{ color: 'white' }}>Profile</Typography>
      </Box>
      <CustomCard>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <Box sx={{ p: 2 }}>
              <FormControl fullWidth sx={{ mb: 2 }}>
                <TextField
                  label="Username"
                  variant="outlined"
                  placeholder="Username"
                  fullWidth
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
              </FormControl>
              <FormControl fullWidth sx={{ mb: 2 }}>
                <TextField
                  label="Name"
                  variant="outlined"
                  placeholder="Name"
                  fullWidth
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </FormControl>
              <FormControl fullWidth sx={{ mb: 2 }}>
                <TextField
                  label="E-mail"
                  variant="outlined"
                  placeholder="E-mail"
                  fullWidth
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </FormControl>
              <FormControl fullWidth sx={{ mb: 2 }}>
                <TextField
                  label="Institution"
                  variant="outlined"
                  placeholder="Institution"
                  fullWidth
                  name="institution"
                  value={formData.institution}
                  onChange={handleChange}
                  required
                />
              </FormControl>
            </Box>
            <Box sx={{ p: 2 }}>
              <FormControl fullWidth sx={{ mb: 2 }}>
                <TextField
                  label="Bio"
                  variant="outlined"
                  placeholder="Bio"
                  multiline
                  rows={5}
                  fullWidth
                  name="bio"
                  value={formData.bio}
                  onChange={handleChange}
                  required
                />
              </FormControl>
              <FormControl fullWidth sx={{ mb: 2 }}>
                <TextField
                  label="Birthdate"
                  variant="outlined"
                  placeholder="May 3, 1995"
                  fullWidth
                  name="birthdate"
                  value={formData.birthdate}
                  onChange={handleChange}
                  required
                />
              </FormControl>
              <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel shrink required>Country</InputLabel>
                <Select
                  value={formData.country}
                  onChange={handleChange}
                  name="country"
                  fullWidth
                  required
                >
                  <MenuItem value="India">India</MenuItem>
                  <MenuItem value="USA">USA</MenuItem>
                  <MenuItem value="UK">UK</MenuItem>
                  <MenuItem value="Russia">Russia</MenuItem>
                  <MenuItem value="China">China</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box sx={{ p: 2 }}>
              <FormControl fullWidth sx={{ mb: 2 }}>
                <TextField
                  label="Codeforces"
                  variant="outlined"
                  placeholder="user"
                  fullWidth
                  name="codeforces"
                  value={formData.codeforces}
                  onChange={handleChange}
                  required
                />
              </FormControl>
              <FormControl fullWidth sx={{ mb: 2 }}>
                <TextField
                  label="Codechef"
                  variant="outlined"
                  placeholder="user"
                  fullWidth
                  name="codechef"
                  value={formData.codechef}
                  onChange={handleChange}
                  required
                />
              </FormControl>
              <FormControl fullWidth sx={{ mb: 2 }}>
                <TextField
                  label="Atcoder"
                  variant="outlined"
                  placeholder="user"
                  fullWidth
                  name="atcoder"
                  value={formData.atcoder}
                  onChange={handleChange}
                  required
                />
              </FormControl>
              <FormControl fullWidth sx={{ mb: 2 }}>
                <TextField
                  label="LinkedIn"
                  variant="outlined"
                  placeholder="user"
                  fullWidth
                  name="linkedin"
                  value={formData.linkedin}
                  onChange={handleChange}
                  required
                />
              </FormControl>
            </Box>
            <Box textAlign="center" sx={{ mt: 4 }}>
              <Button variant="contained" color="primary" type="submit">
                Submit
              </Button>
            </Box>
          </form>
        </CardContent>
      </CustomCard>
    </RootContainer>
  );
};

export default EditProfile;
