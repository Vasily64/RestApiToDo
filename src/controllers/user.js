const UserService = require("../services/user");

const UserController = {
    async create(req, res) {
        const result = await UserService.create(req.body);
        res.json(result);
    },
    async createTask(req, res) {
        const { id } = req.params;
        await UserService.createTask(id , req.body);
        res.sendStatus(200);
    },
    async update(req, res) {
        const { id } = req.params;
       await UserService.update(id , req.body);
        res.sendStatus(204);
    },
    async getAll(req, res) {
        const data = await UserService.getAll(req.query);
        res.json(data);
    },
    async getList(req, res) {
        const { id } = req.params;
        const data = await UserService.getList(id);
        res.json(data);
    },
}
module.exports = UserController
