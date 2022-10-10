const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const Time = { type: String, validate: /^\d{1,2}:\d{2}$/ };

const TaskSchema = new Schema({
    user:  { type: Schema.Types.ObjectId, ref: 'User', unique: true },
    title: {
        type: String,
    },
    // TIME
    start: Date,
    finish: Date,
    start_time: Time,
    finish_time: Time,
    hours: { type: Number, min: 0 },
    minutes: { type: Number, min: 0 },
    break_time: { type: String, default: '00:00' },

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
    },

})
module.exports = mongoose.model('Task', TaskSchema)
