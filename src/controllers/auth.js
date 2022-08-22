const User = require('../models/User')
const Role = require('../models/Role')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const { validationResult } = require('express-validator')
const {secret} = require('./config')
const genenerateAccessToken = (id, roles) => {
    const payload = {
        id,
        roles
    }
    return jwt.sign(payload, secret, {expiresIn: "16h"})
}

class authController {
    async registration(req, res){
try {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return  res.status(400).json({message: "Ошибка при регисрации", errors})
    }
   const {name, password, phone} = req.body
    const condidate = await User.findOne({name})
    if(condidate) {
        return res.status(400).json({message: "Пользователь найден с такими же именем"})
    }
    const hashPassword = bcrypt.hashSync(password, 7);
    const userRole = await Role.findOne({value: 'USER'})
    const  user = new User({name, phone, password: hashPassword, roles: [userRole.value]})

    await user.save()
    return res.json({message: 'Пользователь был успешно зарегистрирован'})
} catch (e) {
    console.log(e)
    res.status(400).json({message: 'Registration error'})
}
    }
    async login(req, res){
try {
    const {name, password} = req.body
    const user = await User.findOne({name})
    if(!user){
        return res.status(400).json({message: `Пользовтель ${name} не найден`})
    }
    const validPassword = bcrypt.compareSync(password, user.password)
    if(!validPassword){
        return res.status(400).json({message: `Введенный ${password} не верный`})
    }
    const token = genenerateAccessToken(user._id, user.roles)
    return res.json({token})
} catch (e) {
    console.log(e)
    res.status(400).json({message: 'Login error'})
}
    }
    async getUsers(req, res){
try {
    const users = await User.find()
    res.json(users)
} catch (e) {
console.log(e)
}
    }
}
module.exports = new authController()
