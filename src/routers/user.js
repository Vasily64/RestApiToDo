const Router = require('express')
const router = new Router()
const UserController = require("../controllers/user");

router.post('/user', UserController.create);
router.patch('/user/:id', UserController.update);
router.get('/users', UserController.getAll);
router.get('/user/tasks/:id', UserController.getList);
router.post('/user/task/:id', UserController.createTask);


module.exports = router
