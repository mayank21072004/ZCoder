import { Box,InputBase,styled } from "@mui/material";
import { SmileyIcon } from "./icons";
import { MicIcon,PlusIcon } from "./icons";
import { useState } from "react";
const Container= styled(Box)`
height:60 px;
display:flex;
background:black;
width:1035px;
align-items:center;
${'' /* justify-content:space-between; */}
padding:0 15px;
& > *{
    margin:5px;
    color: #919191;
}
`;
const Search=styled(Box)`
background-color:#FFFFFF;
${'' /* border-radius:18px; */}
width:850px;
border-radius:25%;
`;
const InputField= styled(InputBase)`
    width:100%;
    padding:20px;
    height:20px;
    font-size:20px;
    background-color:black;
    color:white;
`;

const  Footer=({sendText,setValue,value})=>{
    return<Container>
        <SmileyIcon/>
        <PlusIcon/>
        <Search>
            <InputField
                placeholder="Type a message"
                onChange={(e)=>setValue(e.target.value)}
                onKeyPress={(e)=>sendText(e)}
                value={value}
            />
        </Search>
        
        
    </Container>
    
}
export default Footer;