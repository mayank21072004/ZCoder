import user from "../model/User.js"
export const addUser = async (request,response) => {
//     console.log(request.body);
//     //request.body is now gvivng undefined as we do not have a body parser so we do npm i body-parser
//     //after parsing it is okay now 
//     //we need to test whether the data we are getting is in right format or not so we make data models basically schema in mongoose
try{
    let exist=await user.findOne({ sub: request.body.sub });

    if(exist){
        response.status(200).json({msg: 'user already exist'});//we send status 200 as response and the message in json format
        return;
    }
    const newUser = new user(request.body);
    await newUser.save();
    return response.status(200).json(newUser);

}catch(error){
    return response.status(500).json(error.message);
}
 }

 export const getUsers=async(request,response) => {
     try{
       const users=await user.find({});
       return response.status(200).json(users);
     }catch(error){
        return response.status(500).json(error.message);
     }

 }