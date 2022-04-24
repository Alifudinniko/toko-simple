const bycrpt = require('bcryptjs');
const { Category }= require('../../models');

const jwt = require('jsonwebtoken');

module.exports= {
    getAll : async (req, res,next) =>{
        try {
            const categories = await Category.findAll({
                where : {user : req.user.id}
            });
            
            res.status(200).json({
                message: "Succes get All Categories",
                data :  categories
            })
            
        }catch(err){
            next(err);
        }
    },
    create : async (req,res,next)=>{
        try {
            const {name} = req.body;
            const categories = await Category.create({
                name:name,
                user:req.user.id,

            });
            res.status(201).json({
                message: 'Success create categories',
                data: categories
            })
        }catch(err){
            next(err);
        }
    },
    getOne : async (req, res,next) =>{
        try {
            const categories = await Category.findOne({
               where: { id : req.body.id}
            });
            
            res.status(200).json({
                message: "Succes get One Categories",
                data :  categories
            })
            
        }catch(err){
            next(err);
        }
    }
}