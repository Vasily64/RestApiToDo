const TaskService = require("../services/task");


const TaskController = {
    async create(req, res) {
        const { id } = req.params
        const result = await TaskService.create(id, req.body);
        res.json(result);
    },
    async update(req, res) {
        const { id } = req.params;
        await TaskService.update(id , req.body);
        res.sendStatus(204);
    },
    async getAll(req, res) {
        const data = await TaskService.getAll(req.query);
        res.json(data);
    },
}
module.exports = TaskController
