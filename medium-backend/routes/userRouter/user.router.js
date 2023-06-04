const userRouter = require('express').Router();

const {
    loginUser,
    addUser,
    getProfile,
    followUsers
} = require('./user.controller');


userRouter.post('/login',loginUser);
userRouter.post('/signup',addUser);
userRouter.post('/getUser',getProfile);
userRouter.post('/followUser',followUsers);

module.exports = userRouter;