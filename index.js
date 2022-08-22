const express = require('express');
const mongoose = require('mongoose');
const authRouter = require('./src/routers/authRouter')
const User = require('./src/models/User')
const Task = require('./src/models/Task')

const PORT = 5000;
const URL_DB = `mongodb+srv://new_user1:new_user1@cluster0.jpc2oun.mongodb.net/?retryWrites=true&w=majority`
const app = express()
app.use(express.json())
app.use('/auth', authRouter)

// app.post('/', async (req, res) => {
//  const {name, phone, tasks, status, description, deadline, repeatability, categories, teg} = req.body
//  // const post = await User.create({name, phone, tasks})
//  const task = await Task.create({status, description, deadline, repeatability, categories, teg})
//  res.status(200).json('Server Working')
// })

async function startApp() {
 try {
  await mongoose.connect(URL_DB)
  app.listen(PORT, ()=> console.log(`Server Working на ${PORT} порту`))
 } catch (e){
  console.log(e)
 }
}
startApp()
