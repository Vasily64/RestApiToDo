const  Task  = require('../models/Task');
const  User  = require('../models/User');
const moment = require('moment')
const {AppError} =require('../common/helpers')
const TaskService = {
    create:  async (id, body) => {
        const date = moment(body.start).format('YYYY-MM-DD');
        const user = await User.findOne({_id: id})
        const findTask = await Task.find({_id: { $in: user.tasks }})
        const checkTime= findTask.filter(one =>  moment(one.start).format('YYYY-MM-DD') === date)
        if(checkTime) {
          const checkTask = checkTime
              .filter(t => (Number(t.start_time.split(':')[0])*60+ Number(t.start_time.split(':')[1]))< (Number(
                  body.start_time.split(':')[0])*60+Number(body.start_time.split(':')[1])) <(Number(t.finish_time
                  .split(':')[0])*60+Number(t.finish_time.split(':')[1])))
            if(checkTask.length>0){
               throw AppError('Данный таймслот занят', 400);
           }
        }


     const task =await Task.create({user: id, ...body})
     const taskOne = task._id
      user.tasks.push(taskOne)
       await user.save()
    },

    update: async (_id,body) => {
        return Task.updateOne({_id}, body)
    },
    getAll: async () => {
        return Task.find({})
    }
}
module.exports = TaskService;
// .populate({path: 'tasks', select: 'start finish start_time finish_time'})
