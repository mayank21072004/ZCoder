import { Box, Typography,styled } from "@mui/material";
import { useContext } from "react";
import { AccountContext } from "../../constants/contexts/AccountProvider";
import { setConversation } from "../../../service/api";
const Component=styled(Box)`
display:flex;
height:45px;
padding: 13px 0;
cursor:pointer;
`
const Image=styled("img")({
        width: 50,
        height: 50,
        borderRadius: "50%",
        padding: '0 14px',
        objectFit:'cover'
})

function Conversation(props){
    const {setPerson,account }=useContext(AccountContext);
    const getUser= async()=>{
        setPerson(props.data);
        await setConversation({senderId: account.sub,recieverId: props.data.sub});
    }
    return <Component onClick={()=>getUser()}>
        <Box>
            <Image src={props.data.picture} alt="dp"/>
        </Box>
        <Box>
            <Box>
            <Typography style={{ color: '#FFFFFF' }}>
      {props.data.sub === account.sub ? "You (bookmark your solutions here)" : props.data.name}
    </Typography>
            </Box>
        </Box>
    </Component>
}
export default Conversation;