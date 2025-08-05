import communityMessage from "../model/CommunityMessage.js";


export async function newCMessage(request,response){
    // we need to validate the whole body of request so we need to make a model in mongodb
    //always write try and catch block
    try {
      const newCMessage=  new communityMessage(request.body );
      await newCMessage.save();
      return response.status(200).json("communityMessaage is sent")
    } catch (error) {
        return response.status(500).json(error.message);
    }

}



export const getCMessage=async(request,response) => {
    try{
      const communityMessages=await communityMessage.find({});
      return response.status(200).json(communityMessages);
    }catch(error){
       return response.status(500).json(error.message);
    }

}