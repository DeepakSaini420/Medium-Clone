const jsonwebtoken = require('jsonwebtoken');
const {
    addUserDB,
    getUserDB,
    getUserById,
    followUser
} = require('../../model/user.model');
const { getBlogByUserId } = require('../../model/blog.model');

async function loginUser(req,res){
    const {email,password} = req.body;
    
    if(!email || !password) return res.status(400).json({
        message:"Please Enter All fields!"
    })
    const user =await getUserDB(email);

    if(user){
        if(user.password===password){
            const data = {_id:user._id,email:user.email,name:user.name,publishedBlogs:user.publishedBlogs,savedBlogs:user.savedBlogs}
            const token = jsonwebtoken.sign(data,process.env.secretKey);

            return res.status(200).json({
                data,
                token
            })
        }

        return res.status(400).json({
            error:"Unauthorized"
        })
    }else{
        return res.status(404).json({
            error:"User Not Found!"
        })
    }
}

async function addUser(req,res){

    const { name,email,password } = req.body;

    if(!email || !password || !name) return res.status(400).json({
        message:"Please Enter All fields!"
    })

    if(!(await addUserDB(name,email,password))) return res.status(400).json({
        error:"User Already Exist"
    })
    const user =await getUserDB(email);

    return res.status(200).json({
        message:"User Added!",
        user
    })
}

async function getProfile(req,res){
    const { id } = req.body;
    console.log(id);
    try {
        const user  = await getUserById(id);
        
        const blogs = await getBlogByUserId(id); 

        if(true) return res.status(200).json({name:user.name,publishedBlogs:blogs});
    } catch (error) {
        
        console.log(error);

        return res.status(404).json({error:"User Not Found!"});
    }
}

async function followUsers(req,res){
    const { followingId,followerId } = req.body;

    try{
        await followUser(followingId,followerId);
        return res.status(200).json({
            message:"Successfully Followed!"
        });
    }catch(err){
        console.log(err);
        return res.status(404).json({
            error:"Followed Unsuccessfull!"
        });
    }
}

module.exports={
    loginUser,
    addUser,
    getProfile,
    followUsers
}