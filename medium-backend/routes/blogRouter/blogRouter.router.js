const express = require('express');
const blogRouter = express.Router();
const { 
    getAllBlogsDB,
    getBlogIdDB,
    addBlogDB,
    getBlogByNameDB,
    getFollowingBlogDB
} = require('./blogRouter.controller');

blogRouter.get('/getAllBlog',getAllBlogsDB);
blogRouter.post('/getBlogId',getBlogIdDB);
blogRouter.post('/addBlog',addBlogDB);
blogRouter.post('/getBlogByName',getBlogByNameDB);
blogRouter.post('/getFollowingBlogs',getFollowingBlogDB);

module.exports = blogRouter;