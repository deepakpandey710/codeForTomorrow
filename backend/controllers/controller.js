const userDb = require('../db/userDb')
const categoryServiceDb =require('../db/categoryServiceDb')
exports.login = async (req,res)=>{
    try{
        const {email,password}=req.body;
        const response = await userDb.login({email,password});
        res.send(response);
    }catch(err){
        res.send({err:'some error occured'});
        console.error('login error',err);
    }
}

exports.addCategory = async(req,res)=>{
    try{
        const name = req.body.name;
        const response = await categoryServiceDb.addCategory({name});
        res.send(response);
    }catch(err){
        res.send({err:'some error occured'});
        console.error('login error',err);
    }
}

exports.getAllCategories = async(req,res)=>{
    try{
        const response = await categoryServiceDb.getAllCategories();
        res.send(response);
    }catch(err){
        res.send({err:'some error occured'});
        console.error('login error',err);
    }
}

exports.updateCategory = async(req,res)=>{
    try{
        const id =req.params.categoryId;
        const {name} = req.body;
        const response = await categoryServiceDb.updateCategory({id,name});
        res.send(response);
    }catch(err){
        res.send({err:'some error occured'});
        console.error('login error',err);
    }
}

exports.deleteCategory = async(req,res)=>{
    try{
        const {categoryId} =req.params;
        const response = await categoryServiceDb.deleteCategory({categoryId});
        res.send(response);
    }catch(err){
        res.send({err:'some error occured'});
        console.error('login error',err);
    }
}

exports.addService = async(req,res)=>{
    try{
        const {categoryId} =req.params;
        const {service,type,price} = req.body;
        const response = await categoryServiceDb.addService({categoryId,service,type,price});
        res.send(response);
    }catch(err){
        res.send({err:'some error occured'});
        console.error('login error',err);
    }
}
exports.getService = async(req,res)=>{
    try{
        const {categoryId} =req.params;
        const response = await categoryServiceDb.getService({categoryId});
        res.send(response);
    }catch(err){
        res.send({err:'some error occured'});
        console.error('login error',err);
    }
}
exports.updateService = async(req,res)=>{
    try{
        const {categoryId,serviceId} =req.params;
        const data = req.body;
        const response = await categoryServiceDb.updateService({categoryId,serviceId,data});
        res.send(response);
    }catch(err){
        res.send({err:'some error occured'});
        console.error('login error',err);
    }
}
exports.deleteService = async(req,res)=>{
    try{
        const {categoryId,serviceId} =req.params;
        const response = await categoryServiceDb.deleteService({categoryId,serviceId});
        res.send(response);
    }catch(err){
        res.send({err:'some error occured'});
        console.error('login error',err);
    }
}
