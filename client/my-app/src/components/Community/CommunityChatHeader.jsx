import { Typography, Box, styled } from "@mui/material";

const Header = styled(Box)`
    height: 48px;
    background: black;
    padding: 8px 16px;
    display: flex;
    align-items: center;
    justify-content: center; /* Center the content horizontally */
`;

const Title = styled(Typography)`
    color: #FFFFFF;
    font-size: 20px; /* Adjust the size as needed */
    font-weight: bold; /* Make the text bold */
    text-transform: uppercase; /* Optional: transform text to uppercase */
`;

function CommunityChatHeader() {
    return (
        <Header>
            <Title>Community</Title>
        </Header>
    );
}

export default CommunityChatHeader;
