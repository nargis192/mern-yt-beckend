//Step 1: Import necessary modules like express (to create the web server) and mongoose (to interact with MongoDB).
const express = require('express')
const mongoose = require('mongoose')
const Router = require('./Routes/Todoroutes')
const cors= require('cors')


//Step 2: Load environment variables using dotenv. This allows for configuration settings (like the port number) to be stored securely in a .env file.
require('dotenv').config()

//Step 3: Initialize the Express application, which will be used to handle HTTP requests and responses.
const app = express()


//Step 4: Set the port number. It checks if a port number is defined in the environment variables, otherwise defaults to 5000.
const PORT = process.env.PORT || 5000
app.use(express.json())
app.use(cors())

//Step 5: Start the Express server, which listens on the specified port. Once the server starts, it logs a message indicating the port it's running o
app.listen(PORT,()=>{
    console.log(`port is running on ${PORT}`)
    
})

// checking server through a get
// app.get('/',(req, res)=>{
//    res.send(`Port is running on ${PORT}`)
// })
app.use(Router)


// Step 6: Connect to the MongoDB database using Mongoose ( .env)
mongoose.connect(process.env.MONGODB_URL)
  .then(() => {
    // Step 2: If the connection is successful, log a success message
    console.log("MongoDB is connected");
  })
  .catch((err) => {
    // Step 3: If there's an error during the connection, log the error
    console.log(err);
  });    






