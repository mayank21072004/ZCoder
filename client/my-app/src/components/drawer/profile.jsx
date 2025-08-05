import { Box, Typography, styled } from "@mui/material";
import { useContext, useState, useEffect } from "react";
import { AccountContext } from '../constants/contexts/AccountProvider'; 
import React, { Fragment } from "react";

// Styling for profile picture
const Dp = styled("img")({
    width: 200,
    height: 200,
    borderRadius: "50%",
    padding: '25px 0px'
});

// For Material-UI defined components we can use template literals
const DescriptionBox = styled(Box)`
    padding: 15px 20px 28px 30px;
    & > p {
        font-size: 13px;
        color: black; // Light gray for description text in dark mode
    }
`;

const ImageBox = styled(Box)`
    display: flex;
    justify-content: center;
`;

const NameBox = styled(Box)`
    background: black; // Dark background for name box
    padding: 12px 30px 2px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
    margin-bottom: 10px;
    & :first-child {
        font-size: 13px;
        font-weight: 200;
        color: #80cbc4; // Teal color for first child text
    }
    & :last-child {
        margin: 14px 0;
        color: #eeeeee; // Light gray for last child text
    }
`;

const Profile = () => {
    const { account, profile } = useContext(AccountContext);
    const [userProfile, setUserProfile] = useState(profile);

    useEffect(() => {
        setUserProfile(profile);
    }, [profile]);

    return (
        <Fragment>
            <ImageBox>
                <Dp src={account.picture} alt="dp" />
            </ImageBox>
            <NameBox>
                <Typography>Username</Typography>
                <Typography>{userProfile?.username || ''}</Typography>
            </NameBox>
            <NameBox>
                <Typography>Name</Typography>
                <Typography>{userProfile?.name || ''}</Typography>
            </NameBox>
            <NameBox>
                <Typography>Email</Typography>
                <Typography>{userProfile?.email || ''}</Typography>
            </NameBox>
            <NameBox>
                <Typography>Institution</Typography>
                <Typography>{userProfile?.institution || ''}</Typography>
            </NameBox>
            <NameBox>
                <Typography>Bio</Typography>
                <Typography>{userProfile?.bio || ''}</Typography>
            </NameBox>
            <NameBox>
                <Typography>Birthdate</Typography>
                <Typography>{userProfile?.birthdate || ''}</Typography>
            </NameBox>
            <NameBox>
                <Typography>Country</Typography>
                <Typography>{userProfile?.country || ''}</Typography>
            </NameBox>
            <NameBox>
                <Typography>Codeforces</Typography>
                <Typography>{userProfile?.codeforces || ''}</Typography>
            </NameBox>
            <NameBox>
                <Typography>Codechef</Typography>
                <Typography>{userProfile?.codechef || ''}</Typography>
            </NameBox>
            <NameBox>
                <Typography>Atcoder</Typography>
                <Typography>{userProfile?.atcoder || ''}</Typography>
            </NameBox>
            <NameBox>
                <Typography>LinkedIn</Typography>
                <Typography>{userProfile?.linkedin || ''}</Typography>
            </NameBox>
            {/* Third box just contains the paragraph element */}
            
            <NameBox>
                <Typography>Quote of the day</Typography>
                <Typography>Hail Hydra</Typography>
            </NameBox>
        </Fragment>
    );
}

export default Profile;
