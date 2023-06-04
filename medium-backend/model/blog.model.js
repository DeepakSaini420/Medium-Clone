const Blog = require('../schema/blog.schema');
const { getUserById } = require('./user.model');

async function addBlog(blogData,userId,searchTags){
    if(!blogData) return false;

    try {
        const newBlog = new Blog({
            title:blogData[0].value,
            user:userId,
            data:blogData,
            searchTags:searchTags
        });
        newBlog.save().then(()=>{
            console.log("Blog added!");
        });
    } catch (error) {
        console.log(error);
        return false
    }

    return true;
}

async function getAllBlog(){
    return Blog.find({});
}

async function getFollowingBlog(userId){
    const user = await getUserById(userId);
    let Blogs=[]
    const records = user.Following.map(async (id)=>{
        const blog = await Blog.find({user:id});
        return blog
    })
    Promise.all(records).then((res)=>{
        Blogs.push(res);
    })
    return Blogs;
}

async function getBlogById(id){
    const blogs = await Blog.findById(id); 
    return  blogs;
}

async function getBlogByUserId(id){
    const blogs = await Blog.find({user:id});
    return blogs;
}

async function getBlogByName(title){
    const blogs = await Blog.find({}); 
    const data = blogs.filter((blog)=>{
        if(blog.searchTags.find(b=>b.toLowerCase() === title.toLowerCase())){
            return blog
        }
    });
    console.log(data);
    return data;
}

module.exports = {
    addBlog,
    getAllBlog,
    getBlogById,
    getBlogByName,
    getBlogByUserId,
    getFollowingBlog,
}