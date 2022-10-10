const mongoose = require('mongoose');
const UserSchema = require('../models/User')
const TaskSchema = require('../models/Task')
module.exports = {
    User: mongoose.model('User', UserSchema, 'users'),
    Task: mongoose.model('Task', TaskSchema, 'tasks')
}
