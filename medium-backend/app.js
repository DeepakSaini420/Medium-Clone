const express = require('express');
const passport = require('passport');
const cors = require('cors');
const app = express();

const userRouter = require('./routes/userRouter/user.router');
const blogRouter = require('./routes/blogRouter/blogRouter.router');

app.use(cors());

app.use(express.json({limit:'50mb'}));

app.use(passport.initialize());

app.use('/user',userRouter);
app.use('/blog',blogRouter);

module.exports = app;