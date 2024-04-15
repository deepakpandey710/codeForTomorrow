const User =require('../models/User')
const jwt = require('jsonwebtoken');
const secret ="codefortomorrow";
exports.login=async (user)=>{
    try{
        const response = await User.findOne({where: {email:user.email, password: user.password}});
        if(!response){
            return {error:"login with correct details"};
        }
        const token = jwt.sign(user,secret);
        response.loggedInStatus=true;
        response.token=token;
        await response.save();
        return response;
    }catch(err){
        console.log(err);
        return {error:"some error occured"};
    }
}