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
    },
    updateOne: async (req,res,next) => {
        try {
            const {id} = req.params;
            const {name} =req.body;

            const checkCategory = await Category.findOne(
                {
                    where :{
                        id:id,
                        user: req.user.id
                    }
                }
            )

            const categories = await checkCategory.update(
                {
                    name:name
                }
               
            )
            res.status(200).json({
                message : "Success update category",
                data: categories,
                params: req.params
            })
        }catch(err){
            res.status(500).json({
                 message : "data tidak ditemukan atau salah",
            })
            next(err);
        }
    },
    deleteOne: (req, res, next) =>{
        Category
            .findOne({
                where :{
                    id:req.params.id,
                    user: req.user.id
                }
            })
            .then((categories) =>{
                if(categories){
                    categories.destroy();
                    res.status(200).json({
                        message : "Success delete category",
                        data: categories,
                    })
                }
            })
            .catch((err)=> next(err));
    }
}