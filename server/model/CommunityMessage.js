import mongoose from "mongoose";

const CommunityMessageSchema =new mongoose.Schema({
    
    
    senderId:{
        type: String,
        required: true,
        trim: true
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    text: {
        type: String,
        required: function () {
          return this.type === 'text';
        },
        trim: true
    },
    type: {
        type: String //we are also adding a timestamp by mongodb to get the timestamp when message was sent
    }
},
{
    timestamps:true
});
const communityMessage=mongoose.model('CommunityMessage',CommunityMessageSchema);
export default communityMessage;
// a default exported can be imported by any name of your choice