const  Task  = require('../models/Task');
const TaskService = {
    create:  async (id, body) => {
        return  Task.create({user: id, ...body})
    },

    update: async (_id,body) => {
        return Task.updateOne({_id}, body)
    },
    getAll: async () => {
        return Task.find({})
    }
}
module.exports = TaskService;
