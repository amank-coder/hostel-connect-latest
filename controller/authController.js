const User = require('../models/userModel')
const bcrypt = require('bcrypt')
var jwt = require('jsonwebtoken');
const createError = require('../utils/createError');
const nodemailer = require('nodemailer');
const userModel = require('../models/userModel');

exports.register = async(req,res, next)=>{
    try{
        const pass= await bcrypt.hash(req.body.password, 5);

        const existingUser = await userModel.findOne({email:req.body.email});
        if(existingUser)
        {
            return res.status(200).send({
                success: false,
                message:"User already exists"
            });
        }

        const newUser= new User({
            ...req.body,
            password:pass,
        })

        await newUser.save()

        const token = newUser.createJWT();

        res.status(201).send({
            success: true,
            message:"New user created",
            user:newUser,
            token,
        })

    }catch(err){
        next(err)
    }
}

exports.login = async(req, res, next)=>{
    try{
        const user = await User.findOne({email:req.body.email})
        if(!user) return next(createError(404, "User not found!"))

        const isCorrect = await bcrypt.compare(req.body.password, user.password)
        if(!isCorrect) return next(createError(400, "Wrong password or username!"))

        const token = user.createJWT()
        res.status(200).json({
            success:true,
            message:"Login successful",
            user,
            token,
        })

        // const {password, ...info} = user._doc

        // res.cookie("accessToken", token, {
        //     httpOnly:true,
        // }).status(200).send(info) 

    }catch(err){
        next(err)
    }
}

// exports.loginAdmin = async(req, res, next)=>{
//     try{
//         const user = await User.findOne({email:req.body.email})
//         if(!user) return next(createError(404, "User not found!"))
//         if(!user.isAdmin) return next(createError(401, "You are not an admin!"))

//         const isCorrect = await bcrypt.compare(req.body.password, user.password)
//         if(!isCorrect) return next(createError(400, "Wrong password or username!"))

//        const token = user.createJWT()

//         const {password, ...info} = user._doc

//         res.cookie("accessToken", token, {
//             httpOnly:true,
//         }).status(200).send(info) 

//     }catch(err){
//         next(err)
//     }
// }


exports.logout = async(req,res)=>{
    res.clearCookie("accessToken",{
        sameSite:"none",
        secure:true,
    })
    .status(200)
    .send("User has been logged out")
}

exports.forgot=async(req, res)=>{
    const {email}= req.body
    try{
        const oldUser= await User.findOne({email})
        if(!oldUser){
            return res.json({status:"User not exists!!"})
        }
        const secret= "mysecretkey" + oldUser.password
        const token = jwt.sign({email: oldUser.email, id:oldUser._id}, secret, {
            expiresIn:"15m",
        })
        const link = `${process.env.API_URL}/api/auth/reset-password/${oldUser._id}/${token}`;
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'techwizard2302@gmail.com',
              pass: 'cebfupfmihviohrh'        
            }
          });
          
          var mailOptions = {
            from: 'youremail@gmail.com',
            to: 'amanmaxwel@gmail.com',
            subject: 'Password Reset',
            text: link,
          };
          
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          });
        console.log(link)
        res.send(link)
    }
    catch(err){
        console.log(err)
    }
}

exports.reset = async(req, res)=>{
    const {id, token} = req.params;
    console.log(req.params)
    const oldUser= await User.findOne({_id:id})
        if(!oldUser){
            return res.json({status:"User not exists!!"})
        }
        const secret= "mysecretkey" + oldUser.password
        try{
            const verify = jwt.verify(token, secret)
            res.render("index",{email:verify.email, status:"not verified"})
        }catch(err)
        {
            res.send("Not verified")
        }
}

exports.resetpost = async(req, res)=>{
    const {id, token} = req.params;
    const {password} = req.body
    const oldUser= await User.findOne({_id:id})
        if(!oldUser){
            return res.json({status:"User not exists!!"})
        }
        const secret= "mysecretkey" + oldUser.password
        try{
            const verify = jwt.verify(token, secret)
            const encryptedPassword = await bcrypt.hash(password,10)
            await User.updateOne({
                _id: id
            },
             {
                $set: {
                    password: encryptedPassword,
                },
             }   
            );
            // res.json({status:"password updated"})
            res.render("index", {email:verify.email, status:"verified"})
        }catch(err)
        {
            console.log(err)
            res.json({status:"Something went wrong"})
        }
}