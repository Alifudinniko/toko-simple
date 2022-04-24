const bycrpt = require('bcryptjs');
const { User }= require('../../models');

const jwt = require('jsonwebtoken');

module.exports= {
    signin: async (req,res,next)=>{
        try{
            const { email, password} = req.body;
            const checkUser = await User.findOne({
                where: { email: email },
              });
            if (checkUser){
                const checkPassword = bycrpt.compareSync(password, checkUser.password);
                if (checkPassword){

                    const token = jwt.sign({
                        user:{
                            id: checkUser.id,
                            name: checkUser.name,
                            email: checkUser.email
                        }
                    }, 'secret')

                    res.status(200).json({message: 'Success Signin', jwt :token});
                }else {
                    res.status(403).json({message:"Invalid Password"});
                }
            }else {
                res.status(403).json({message:'invalid Email'});
            }
        }
        catch(err){
            console.log(err);
            next(err);
        }
    },

    signup : async (req, res, next) =>{
        try {
            const {name, email, password, confirmPassword }= req.body;
            if (password !== confirmPassword){
                res 
                .status(403)
                .json({message :"Password and password Confirmation dont match"});
            }
            const checkEmail = await User.findOne({where : {email:email}})
            if (checkEmail){
                return res.status(403).json({ message: "Email registered"})
            }

            const user = await User.create(
                {
                    name,
                    email,
                    password : bycrpt.hashSync(password,10),
                    role:"admin"
                }
            );


            delete user.dataValues.password;
            
            res.status(201).json({
                message : "Success Signup",
                data : user
            });

        } catch (err){
            next(err);
        }
    }
}