import { Box } from "@mui/material";
import ChatHeader from "./ChatHeader.jsx";
import Messages from "./Messages.jsx";
import { useContext, useEffect, useState } from "react";
import { AccountContext } from "../../constants/contexts/AccountProvider.jsx";
import { getConversation } from "../../../service/api.js";
function ChatBox(){
    const{person,account}=useContext(AccountContext);

    const[conversation, setConversation]=useState({});
    useEffect(()=>{
        const getConversationDetails=async()=>{
          let data=  await getConversation({senderId:account.sub,recieverId:person.sub});
          setConversation(data);
           console.log(data);
        }
         getConversationDetails();
    },[person.sub])
    return<Box>
            <ChatHeader person={person}/>
            <Messages person={person} conversation={conversation}/> 
            
    </Box>
}
export default ChatBox;