const { 
    addBlog,
    getAllBlog,
    getBlogById,
    getBlogByName,
    getFollowingBlog
} = require('../../model/blog.model');

async function addBlogDB(req,res){
    
    const blogdata = req.body;

    const resp = await addBlog(blogdata.blog,blogdata.userId,blogdata.searchTags);

    if(!resp) return res.status(500).json({message:"Internal Server Error!"})

    return res.status(200).json({
        message:"Working"
    });
}

async function getAllBlogsDB(req,res){

    const data = await getAllBlog();

    return res.status(200).json(data);
}

async function getBlogIdDB(req,res){
    
    const { id } = req.body;

    const blog = await getBlogById(id);

    return res.status(200).json(blog);

}

async function getBlogByNameDB(req,res){
    
    const { title } = req.body;

    const blog = await getBlogByName(title);

    return res.status(200).json(blog);

}

async function getFollowingBlogDB(req,res){
    
    const { id } = req.body;

    const blogs = await getFollowingBlog(id);

    return res.status(200).json(blogs);

}

module.exports = {
    addBlogDB,
    getAllBlogsDB,
    getBlogIdDB,
    getBlogByNameDB,
    getFollowingBlogDB
}