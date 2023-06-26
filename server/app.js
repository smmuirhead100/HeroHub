const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const home = require('./routes/login')
const chat = require('./routes/chat')
const getCharacters = require('./middleware/GetCharacters')


//parse JSON
app.use(express.json())

//Allow CORS
app.use(cors())

//Routes
app.use('/login', home)
app.use('/chat', chat)

//Get Characters
app.get("/getCharacters", async (req, res) => {
    try {
      const characters = await getCharacters(); // Wait for the characters to be retrieved
      res.send(characters); // Send the response with the characters
    } catch (error) {
      console.error(error);
      res.status(500).send("An error occurred");
    }
  });
  
app.get("/test", async (req, res) => {
    res.send(<h1>Hello World</h1>)
  });

//Connect to MongoDB
async function connect() {
    try {
        mongoose.connect(process.env.MONGO_KEY)
        console.log('connected to MongoDB')
    } catch (error) {
        console.log(`reached an error: ${error}`)
    }
}

//Start Server
connect()
app.listen(3001, () => {
    console.log('server running on port 3001.')
})