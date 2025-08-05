import mongoose from "mongoose";
import { configDotenv } from "dotenv";//for protecting the info we use env
configDotenv();
const user=process.env.user;
const pass=process.env.password;
//here also we use try and catch error block
const URL=`mongodb+srv://${user}:${pass}@cluster0.kevcjxt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
const  connection = async () =>{
    try{
        // using function to connect url id the url needed and useunified topology is detailed in the end
         await mongoose.connect(URL,{useUnifiedTopology: true });
         console.log("we rolling database connected");
    }catch(error){
        console.log(error.message);
    }
}

export default connection;





























// Once you have enabled the unified topology, Mongoose will use the new Server Discovery and Monitoring engine to connect to MongoDB. This engine provides a number of benefits, including:
// Improved connection reliability, Support for MongoDB sharded clusters, and Automatic failover to secondary servers.
// The unified topology is the recommended way to connect to MongoDB with Mongoose.
// Here are some additional things to keep in mind when using the unified topology:
// The unified topology is not compatible with the autoReconnect, reconnectTries, and reconnectInterval options. If you are using these options, you need to remove them from your Mongoose configuration.
// The unified topology is not compatible with the replSet option. If you are using a replica set, you need to specify the replica set name in the mongodb:// connection string.
// The unified topology is not compatible with the ssl option. If you need to use SSL to connect to MongoDB, you need to use the tls option instead.
