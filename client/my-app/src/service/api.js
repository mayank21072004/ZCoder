// here we will create all the apis req
import axios from 'axios';
//to handle api exceptions we use try and catch block
//since adding user require to send data and make a new entry we are going to post method
//these post apis are asynchronous(details in the end of file) in nature amd they return promises

const url='http://localhost:8000';//as our server is running on 8000
export const addUser=async(data)=> {
try{
    // console.log("printing the data");
    // console.log(data);
    await axios.post(`${url}/add`,data);
}catch(error){
    console.log('here we have got the error',error.message)
}
};

export const getUsers=async() => {
    try {
        let response=await axios.get(`${url}/users`)
       // console.log(response);
        return response.data;//the data is only requrired from response
    } catch (error) {
        console.log("error fetching data from getUsers api ",error.message);
    }

}
export const setConversation=async(data)=> {
    try {
        await axios.post(`${url}/conversation/add`,data);
    } catch (error) {
        console.log("error fetching data from setConversation api ",error.message);

    }
}
export const getConversation=async(data)=> {
    try {
      let response=  await axios.post(`${url}/conversation/get`,data);
      //console.log(response.data);
      return response.data;
    } catch (error) {
        console.log("error fetching data from getConversation api ",error.message);

    }
}
// now we need to call this above api as soon as the component gets mounted on page so we will use the third hook
// that is use effect and earlier classes were used and did mount was used but now we use functions and react provide us hooks 

// we create an api to send messages to our database
export const newMessage=async(messager)=> {
    try {
        await axios.post(`${url}/message/add`,messager);
    } catch (error) {
        console.log("error while adding message to the database",error.message);
    }
}

export const getMessages=async(id)=>{
    try {
        let response=await axios.get(`${url}/message/get/${id}`);
        return response.data;
    } catch (error) {
        console.error("error while fetching messages",error.message);
    }
}

export const addProfile=async(data)=> {
    try{
        // console.log("printing the data");
        // console.log(data);
        await axios.post(`${url}/add/profile`,data);
    }catch(error){
        console.log('here we have got the error while adding profile',error.message)
    }
    };
    
    export const getProfile=async(sub) => {
        try {
            let response=await axios.get(`${url}/profile/get/${sub}`)
           // console.log(response);
            return response.data;//the data is only requrired from response
        } catch (error) {
            console.log("error fetching data from getprofile api ",error.message);
        }
    
    }
    export const getCMessages=async()=>{
        try {
            let response=await axios.get(`${url}/communityMessage/get`);
            return response.data;
        } catch (error) {
            console.error("error while fetching community messages",error.message);
        }
    }

    export const newCMessage=async(messager)=> {
        try {
            await axios.post(`${url}/communityMessage/add`,messager);
        } catch (error) {
            console.log("error while adding community message to the database",error.message);
        }
    }






















// Asynchronous functions are functions that operate independently of the main program flow, allowing your program to continue running while waiting for the asynchronous operation to complete. In JavaScript, asynchronous functions are commonly used for operations that might take some time to complete, such as network requests, file I/O, or timers.

// Here are the key points about asynchronous functions:

// Non-blocking: They do not block the execution of the program while waiting for the operation to complete. This means other operations can continue executing.

// Promises: Asynchronous functions often return promises, which represent the eventual completion (or failure) of an asynchronous operation and its resulting value.

// async and await: JavaScript provides async and await keywords to work with asynchronous functions in a more synchronous-looking manner.

// An async function always returns a promise.
// The await keyword can be used inside async functions to pause execution until the promise settles (either resolves or rejects).