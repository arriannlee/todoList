//Declare variables
const express = require('express')
const app = express()
const PORT = 8000;
const mongoose = require('mongoose')
require('dotenv').config()

app.set('view engine', 'ejs')
app.use(express.static('public'))
// app.use(express.urlencoded({extend:true}))
app.use(express.urlencoded({ extended: true }))


mongoose.connect(process.env.DB_CONNECTION,
  {useNewUrlParser: true, useUnifiedTopology: true } )
  .then(() => console.log('Connected Successfully'))
  .catch((err) => { console.error(err); 
});


  
app.listen(PORT,() => console.log(`server is running on ${PORT} woohoooooo!!!`))

