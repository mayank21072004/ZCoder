import { useContext } from "react";
import { AccountContext } from "../constants/contexts/AccountProvider.jsx";

import { Box, Typography, styled } from "@mui/material";
import { formatDate } from "../../utils/common-utils.js";

const Own = styled(Box)`
    background: #015856;
    padding: 10px;
    max-width: 60%;
    width: fit-content;
    margin-left: auto;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    word-break: break-word;
    position: relative;
`;

const Wrapper = styled(Box)`
    background: #202C33;
    padding: 10px;
    max-width: 60%;
    width: fit-content;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    word-break: break-word;
    position: relative;
`;

const Name = styled(Typography)`
    font-size: 14px;
    color: #FFAB00; /* Change this color as needed */
    margin-bottom: 2px;
`;

const Text = styled(Typography)`
    font-size: 16px;
    padding: 0 25px 20px 5px; /* Add bottom padding to create space for the timestamp */
    color: #FFFFFF;
`;

const Time = styled(Typography)`
    font-size: 10px;
    color: #A9A9A9;
    position: absolute;
    bottom: 10px;
    right: 10px;
`;

function SingleMessage({ message }) {
    const { account } = useContext(AccountContext);
    return (
        <>
            {account.sub === message.senderId ? (
                <Own>
                    <Name>You</Name>
                    <Text>{message.text}</Text>
                    <Time>{formatDate(message.createdAt)}</Time>
                </Own>
            ) : (
                <Wrapper>
                    <Name>{message.name}</Name>
                    <Text>{message.text}</Text>
                    <Time>{formatDate(message.createdAt)}</Time>
                </Wrapper>
            )}
        </>
    );
}

export default SingleMessage;
