const mongoose = require('mongoose');
const { Schema } = require('mongoose');


const User = new Schema({
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

    tasks: {
        type: [{ type: String}],

    }

})
module.exports = mongoose.model('User', User)