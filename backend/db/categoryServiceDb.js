const Category =require('../models/Category');
const Services =require('../models/Services');
const ServicePrice =require('../models/ServicePrice');
const { where } = require('sequelize');

exports.addCategory=async (data)=>{
    try{
        const response = await Category.create(data);
        if(!response){
            return {error:"error adding category"};
        }
        return response;
    }catch(err){
        console.log(err);
        return {error:"some error occured"};
    }
}

exports.getAllCategories=async ()=>{
    try{
        const response = await Category.findAll();
        if(!response){
            return {error:"error getting categories"};
        }
        return response;
    }catch(err){
        console.log(err);
        return {error:"some error occured"};
    }
}

exports.updateCategory=async (data)=>{
    try{
        const response = await Category.findOne({where:{id:data.id}});
        if(!response){
            return {error:"error getting categories"};
        }
        if(data.name)
            response.name = data.name;
        await response.save();
        return response;
    }catch(err){
        console.log(err);
        return {error:"some error occured"};
    }
}

exports.deleteCategory=async ({categoryId})=>{
    try{
        const response = await Services.findOne({where:{categoryId}});
        console.log(response);
        if(response){
            return {error:"there are services in this category"};
        }
        const result = await Category.destroy({where:{id:categoryId}});
        console.log('result',result)
        return {res:"deleted successfully"};
    }catch(err){
        console.log(err);
        return {error:"some error occured"};
    }
}

exports.addService=async (data)=>{
    try{
        const response = await Services.create(data);
        if(!response){
            return {error:"error adding Services"};
        }
        return response;
    }catch(err){
        console.log(err);
        return {error:"some error occured"};
    }
}

exports.getService=async ({categoryId})=>{
    try{
        const response = await Services.findAll({where:{categoryId}});
        return {response};
    }catch(err){
        console.log(err);
        return {error:"some error occured"};
    }
}

exports.updateService=async ({categoryId,serviceId,data})=>{
    try{
        const response = await Services.findOne({where:{id:serviceId, categoryId}});
        if(!response){
            return {error:"error getting services"};
        }
        response.name = data.name?data.name:response.name;
        response.type = data.type?data.type:response.type;
        await response.save();
        return response;
    }catch(err){
        console.log(err);
        return {error:"some error occured"};
    }
}

exports.deleteService=async ({categoryId,serviceId})=>{
    try{
        await Services.destroy({where:{categoryId,id:serviceId}});
        return {res:"deleted successfully"};
    }catch(err){
        console.log(err);
        return {error:"some error occured"};
    }
}