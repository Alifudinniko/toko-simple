const bycrpt = require('bcryptjs');
const { Item, Category }= require('../../models');
const Op = require('sequelize').Op;
const jwt = require('jsonwebtoken');

module.exports= {
    getAll : async (req, res,next) =>{
        try {

            const {keyword = ''} = req.query;

            console.log(keyword);

            let condition = {
                user:req.user.id,
            };

            if (keyword !== ''){
                condition = { ...condition, name : { [Op.like]: `%${keyword}%`}};
            }

            const item = await Item.findAll({
                where : condition,
                attributes: ['id','name','user','price','image','stock'],
                include: {
                    model: Category,
                    attributes: ['id','name']
                }
            });
            
            res.status(200).json({
                message: "Succes get All Items",
                data :  item
            })
            
        }catch(err){
            next(err);
        }
    },
  
}