const mongoose = require('mongoose')
const todoTasksSchema = new mongoose.Schema({
  title:{
    type: String,
    required: true
  },
  content:{
    type: String,
    required: false
  },
  title:{
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('todoTasks',todoTasksSchema, 'lists')