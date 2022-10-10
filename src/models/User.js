const mongoose = require('mongoose');
const {Schema} = require("mongoose");

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
          },
    phone: {
        type: Number,
        required: true,
    },
    password: {
        type: String,
        unique: true,
        required: true
    },
    roles:
        [ {type: String, ref: 'Role'} ],

    tasks: [{ type: String, ref: 'Task', unique: true}],

})
module.exports =  mongoose.model('User', UserSchema)
