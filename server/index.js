import express from 'express';
import connection from './database/db.js';
import route from './routes/routes.js';
import cors from 'cors';
import bodyParser from 'body-parser';
const app=express();

app.use(bodyParser.json({extended:true}));//parsing the json to get the body 
app.use(bodyParser.urlencoded({extended:true}));//parsing the url in case it comes encoded 

//initialised express
// now this app takes two inputs first the port at which it is running and the next callback function that will be executed 
//imediately after the server starts
//now we will create a database connection file and will connect to database

connection();
const PORT=8000;
app.listen(PORT,()=>console.log(`server running on ${PORT}`)); 
//our express server is running on port 8000
//now we have made the connection to database and server is running now for performing adduser and others we have to create routes
// we need to to add  the type  module in package.json
// inside scripts we define a script then do npm scriptname then it will run that script
//we can install nodemon so that wheneever we do changes it restarts the server
app.use(cors());
app.use('/',route);