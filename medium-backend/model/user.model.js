const User = require('../schema/user.schema');

async function addUserDB(name,email,password){
    const user =await User.findOne({email});
    if(user) return false;

    const newUser =new User({
        name,
        email,
        password
    })

    await newUser.save();
    return true;
}

async function getUserDB(email){
    const user  = await User.findOne({email:email});
    if(!user) return false;
    return user;
}

async function getUserById(id){
    const user = await User.findOne({_id:id});
    return user;
}

async function followUser(followerId,followingId){
    const user = await User.findById(followerId);
    const userFollowed = await User.findById(followingId);
    user.Followers.push(followingId);
    userFollowed.Following.push(followerId);
    console.log(userFollowed);
    await user.save();
    await userFollowed.save();
}


module.exports = {
    addUserDB,
    getUserDB,
    getUserById,
    followUser
}