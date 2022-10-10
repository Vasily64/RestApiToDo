const  User  = require('../models/User');
const  Task  = require('../models/Task');
const UserService = {
    create:  async (body) => {
        const some = await User.find({})
        console.log(some)
        return  User.create({...body})},

    update: async (_id,body) => {
        return User.updateOne({_id}, body)
    },
    createTask: async (_id,body) => {
        return Task.create({user:_id, ...body})
    },
    getAll: async () => {
        return User.find({})
    },
    getList: async (_id) => {
        return User.find({_id}).populate({
            path: 'tasks',
            select: 'description',
        }).select('_id tasks')
    },
}
module.exports = UserService;
