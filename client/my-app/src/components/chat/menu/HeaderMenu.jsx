

import { useState } from "react";

import { styled } from "@mui/material";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
const MenuOption=styled(MenuItem)`
font-size:14px;
padding : 15px 60px 5px 24px;
color:#4A4A4A;
`
function HeaderMenu({setOpenDrawer}){
    const[open,setOpen]=useState(null);
    function handleClose(){
        setOpenDrawer(true);
        setOpen(null);
    }
    function handleClick(e){
        setOpen(e.currentTarget);
    }
    return<>
        {/*   */}
        <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
<span data-icon="menu" ><svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet"  version="1.1" x="0px" y="0px" enableBackground="new 0 0 24 24"><title>menu</title><path fill="currentColor" d="M12,7c1.104,0,2-0.896,2-2c0-1.105-0.895-2-2-2c-1.104,0-2,0.894-2,2 C10,6.105,10.895,7,12,7z M12,9c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,9.895,13.104,9,12,9z M12,15 c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,15.894,13.104,15,12,15z"></path></svg></span>
      </Button>
        <Menu
        anchorEl={open}
        keepMounted
        open={open}
        onClose={handleClose}
        getContentAnchorE1={null}
        anchorOrigin={{
            vertical:'bottom',
            horizontal :'center'
        }}
        transformOrigin={{
            vertical:'top',
            horizontal:'right'
        }}
      >
      
        <MenuOption onClick={handleClose}>Profile</MenuOption>
        
      </Menu>
    </>
}
export default HeaderMenu;