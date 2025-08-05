import mongoose from "mongoose";

const MessageSchema =new mongoose.Schema({
    conversationId: {
        type:String
    },
    senderId:{
        type:String
    },
    recieverId:{
        type:String
    },
    text: {
        type: String
    },
    type: {
        type: String //we are also adding a timestamp by mongodb to get the timestamp when message was sent
    }
},
{
    timestamps:true
});
const message=mongoose.model('Message',MessageSchema);
export default message;
// a default exported can be imported by any name of your choice