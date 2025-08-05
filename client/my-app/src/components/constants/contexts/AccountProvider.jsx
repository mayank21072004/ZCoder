import { createContext, useState,useRef,useEffect } from "react";
import {io} from "socket.io-client";
export const AccountContext=createContext(null);//creation of a context for use 
function AccountProvider({children}){
const [account,setAccount]= useState();
const [person,setPerson]=useState({});
const [page,setPage]=useState(0);
const [profile,setProfile]=useState();
const[activeUsers,setActiveUsers]=useState([]);
const socket=useRef();
useEffect(()=>{
    socket.current=io('ws://localhost:9000')
},[])
return (
    <AccountContext.Provider value={{
         profile,
         setProfile,
        account,
        setAccount,//the things that we want to export OR USE CONTEXT FOR are listed here 
        person,
        setPerson,
        page,
        setPage,
        socket,
        activeUsers,
        setActiveUsers
    }}>
    {children}    {/* the value that is passed as a children is rendered here */}

    </AccountContext.Provider>
)
}// making of a component to export it
export default AccountProvider;
//in order to use that global declared state we need to wrap our whole project in this component 
//so we wrap the messenger