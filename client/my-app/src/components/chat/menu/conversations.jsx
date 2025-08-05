import { useEffect, useState,useContext, Fragment } from "react";
import { getUsers } from "../../../service/api";
import { Box,styled } from "@mui/material";
import Conversation from "./conversation";
import Divider from '@mui/material/Divider';
import { AccountContext } from "../../constants/contexts/AccountProvider";
const Component=styled(Box)`
height:67.5vh;
overflow:overlay;
background-color:black;
border: 2px solid #3b3b3b;
${'' /* in case more than page size then scrollable */}
`
const Sdivider=styled(Divider)`
margin:0 0 0 70px;
background:#3b3b3b;
opacity:0.6;
`
function Conversations({text}){//this is object destructuring 
    const {account,socket,setActiveUsers}=useContext(AccountContext);
    const[users,setUsers]=useState([]);
    useEffect(()=>{
        const fetchData= async ()=>{
            let response=await getUsers();
            const filteredData=response.filter(user =>user.name.toLowerCase().includes(text.toLowerCase()));  //we are here using the filter function of javascript based on a condition
            setUsers(filteredData); 
        }
        fetchData();
    },[text ]);//whenever text changes remount them using useeffect
   // console.log(users);
   useEffect(()=>{
    socket.current.emit("addUsers",account);//info sent from frontend(conversations ) to backend(index.js of socket)
    socket.current.on("getUsers",users=>{
        setActiveUsers(users);                //emit for sending and on for recieving
    }); 
   },[account])
    return (<Component>
            
            
                {users.map(user => (
                    <Fragment>
                    <Conversation data={user}/>
                    <Sdivider/>
                    </Fragment>
                     
                     
                ))}
            </Component>)
}
export default Conversations;





























// The useEffect hook is a fundamental feature in React, a popular JavaScript library for building user interfaces. It allows you to perform side effects in function components. Side effects can include data fetching, subscriptions, manual DOM manipulations, and more.

// Basic Syntax
// The basic syntax of the useEffect hook is as follows:

// javascript
// Copy code
// import React, { useEffect } from 'react';

// useEffect(() => {
//   // Your side effect code here
//   return () => {
//     // Cleanup code here (optional)
//   };
// }, [dependencies]);
// Parameters
// Effect Function: The first argument to useEffect is a function where you can perform side effects.
// Dependencies Array: The second argument is an optional array of dependencies. The effect will only re-run if one of the dependencies has changed since the last render.
// Examples
// Running an Effect on Every Render
// javascript
// Copy code
// import React, { useEffect } from 'react';

// const ExampleComponent = () => {
//   useEffect(() => {
//     console.log('Component rendered or re-rendered');
//   });

//   return <div>Hello, world!</div>;
// };
// This will run the effect after every render.

// Running an Effect Only Once (on Mount and Unmount)
// javascript
// Copy code
// import React, { useEffect } from 'react';

// const ExampleComponent = () => {
//   useEffect(() => {
//     console.log('Component mounted');

//     return () => {
//       console.log('Component unmounted');
//     };
//   }, []);

//   return <div>Hello, world!</div>;
// };
// Passing an empty array as the second argument ensures the effect runs only once when the component mounts and the cleanup function runs when it unmounts.

// Running an Effect When Dependencies Change
// javascript
// Copy code
// import React, { useEffect, useState } from 'react';

// const ExampleComponent = () => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     console.log(`Count has changed to ${count}`);
//   }, [count]);

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//     </div>
//   );
// };