import *  as userService from '../services/user.js';

export function addUser(req, res, next) {
    userService
    .createUser(req.body)
    .then((data)=> res.json(data))
    .catch((err)=>next(err))
}

export function login(req, res, next) {
    userService
    .login(req.body)
    .then((data)=> res.json(data))
    .catch((err)=>next(err))
}