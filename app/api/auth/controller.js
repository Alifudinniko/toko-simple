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
    }
}