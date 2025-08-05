import mongoose from "mongoose";

const ConversationSchema=new mongoose.Schema({
    members: {    type: Array
    },
    message:{
        type:String
    }},
    {
        timestamps:true//whenever this conversation will be hit to store then it will create a timestamp
    }
);
const conversation= mongoose.model('Conversation',ConversationSchema);//the actual schema that will be generated is conversations 
export default conversation;