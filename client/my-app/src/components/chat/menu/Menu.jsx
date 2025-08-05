// components
import { Box } from "@mui/material";

import Header from "./Header";
import Search from "./Search";
import Conversations from "./conversations";
import { useState } from "react";
function Menu(){
    const [text,setText]=useState('');
    
    return <Box>
        <Header/>
        <Search setText={setText}/>
        <Conversations text={text}/> 
        </Box>
}
export default Menu;