import { Dialog,Box,styled } from "@mui/material";
import React from "react";
import Menu from "./menu/Menu";
import EmptyChat from "./emptychat/emptyChat";
import ChatBox from "./emptychat/ChatBox";
import { useContext } from "react";
import { AccountContext } from "../constants/contexts/AccountProvider";
import RiHeader from "../Header/Header";
//chat dialog is basically the whole chatting screen left part has that menu that is profile and all and the right empty chat is where you type the messages 

//object.keys(person).length here the keys return an array of left side values and if its length is zero then it is
const dialogStyle={
    height:"100%",
    width:"100%",
    margin:"0px",
    maxWidth:"100%",
    maxHeight:"100%",
    boxShadow:"none",
    overflow:"hidden" ,
    borderRadius:"0",
    display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  backgroundColor: "black"
  }
  const Component=styled(Box)`
    display: flex;
    ${'' /* margin:0 ;
    padding:0px; */}
  `;
  const LeftComponent=styled(Box)`
    min-width: 450px;
    
  `;
  const RightComponent=styled(Box)`
    min-width: 300px;
    width: 73%;
    height: 100%;
    border-left: 1px solid rgba(0,0,0,0.14);
    background-color:black;
  `;
function ChatDialog(){
  const {person}=useContext(AccountContext);
return (
    <Dialog open={true} PaperProps={{sx: dialogStyle}}
    hideBackdrop={true}
    maxWidth={'md'}
    >
    <RiHeader/>
     <Component>
      
        <LeftComponent>
        {/* the part on the left of chatting window and below one is the part on the right  */}
        <Menu/>
        </LeftComponent>
        <RightComponent>
            {Object.keys(person).length?<ChatBox />:<EmptyChat/>}
            {/* <EmptyChat/>
            <ChatBox/> */}
        </RightComponent>
     </Component>   
    </Dialog>
)
}
export default ChatDialog;