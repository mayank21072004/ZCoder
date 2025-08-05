import express from 'express';
import { addUser,getUsers } from '../controller/user-controller.js';
import { newConversation } from '../controller/conversation-controller.js';
import { getConversation } from '../controller/conversation-controller.js';
import { newMessage } from '../controller/message-controller.js';
import { getMessages } from '../controller/message-controller.js';
import { addProfile } from '../controller/profile-controller.js';
import { getProfile } from '../controller/profile-controller.js';
import { newCMessage } from '../controller/community-message-controller.js';
import { getCMessage } from '../controller/community-message-controller.js';
//must write .js above
const route=express.Router();
//we are creating a post route with endpoint /add on our express server  and the callback function is what we do when this route is hit
// we are creating these callback function in other folder named controller 
route.post('/add',addUser);
route.get('/users',getUsers);
route.post('/conversation/add',newConversation);
route.post('/conversation/get',getConversation);
route.post('/message/add',newMessage);
route.get('/message/get/:id',getMessages);
route.post('/add/profile',addProfile);
route.get('/profile/get/:sub',getProfile);
route.post('/communityMessage/add',newCMessage);
route.get('/communityMessage/get',getCMessage);
export default route;