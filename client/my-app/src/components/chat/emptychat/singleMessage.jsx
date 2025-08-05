import { useContext } from "react";
import { AccountContext } from "../../constants/contexts/AccountProvider.jsx";

import { Box,Typography,styled } from "@mui/material";
import { formatDate } from "../../../utils/common-utils.js";
const Own = styled(Box)`
    background: #015856;
    padding: 5px;
    max-width: 60%;
    width: fit-content;
    margin-left: auto;
    display: flex;
    border-radius: 10px;
    word-break: break-word;
`;
const Wrapper = styled(Box)`
    background: #202C33;
    padding: 5px;
    max-width: 60%;
    width: fit-content;
    display: flex;
    border-radius: 10px;
    word-break: break-word;
`;
const Text = styled(Typography)`
    font-size: 14px;
    padding: 0 25px 0 5px;
    color:#FFFFFF
`;
const Time = styled(Typography)`
    font-size: 10px;
    color: #A9A9A9;
    margin-top: 6px;
    word-break: keep-all;
    margin-top: auto;
`;
function SingleMessage({message}){
    const{account}=useContext(AccountContext);
    return(
        <>
            {account.sub===message.senderId?
            <Own>
                <Text>{message.text}</Text>
                <Time>{formatDate(message.createdAt)}</Time>
            </Own>  
            :
            <Wrapper>
                <Text>{message.text}</Text>
                <Time>{formatDate(message.createdAt)}</Time>
            </Wrapper>    
                }
        </>)
     
}
export default SingleMessage;