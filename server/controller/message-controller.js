import Message from "../model/Message.js";
import conversation from "../model/Conversation.js";

export async function newMessage(request,response){
        // we need to validate the whole body of request so we need to make a model in mongodb
        //always write try and catch block
        try {
          const newMessage=  new Message(request.body );
          await newMessage.save();
          await conversation.findByIdAndUpdate(request.body.conversationId,{message:request.body.text});
          return response.status(200).json("Messaage is sengthgbjrjrnkjnfnvfkf")
        } catch (error) {
            return response.status(500).json(error.message);
        }

}
// the above whole code saves the message to the database
//now we make a function to get the messages
export async function getMessages(request,response){
  try {
    const messages =await Message.find({conversationId:request.params.id})//find the data in message cluster where the condition is ({})
    return response.status(200).json(messages);
  } catch (error) {
    return response.status(500).json({ error: error.message });
  }
}