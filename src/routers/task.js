const Router = require('express')
const router = new Router()
const TaskController = require("../controllers/task");

router.post('/task/userId/:id',TaskController.create);
router.patch('/task/:id', TaskController.update);
router.get('/tasks', TaskController.getAll);



module.exports = router
