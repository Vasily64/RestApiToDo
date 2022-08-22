const mongoose = require('mongoose');
const { Schema } = require('mongoose');


const Task = new Schema({
    title: {
        type: String,
    },
    status: {
        type: String,
        enum: ['ToDo', 'In progress', 'complete'],
        required: true,
    },
    description: {
      type: String
    },
    deadline: {
        type: Date,
     },
    repeatability: {
        type: Boolean,
    },
    categories: {
        type: String,
    },
    teg: {
        type: Number,
    }

})
module.exports = mongoose.model('Task', Task)
