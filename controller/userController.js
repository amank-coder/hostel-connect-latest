const User = require('../models/userModel')
const createError = require('../utils/createError')

// exports.deleteUser = async(req,res, next)=>{
//     const user = await User.findById(req.params.id) 
    
//         if(req.userId!==user._id.toString())
//         {
//             return next(createError(403,"You can delete only your own account"))      
//         }
//         await User.findByIdAndDelete(req.params.id)
//         res.status(200).send("Deleted!!")
// }

exports.getUsers = async(req,res, next)=>{

    const q= req.query
      const filters={
          ...(q.roomno && {roomno:q.roomno}),
          ...(q.block && { block: q.block }),
          isAdmin:false
      }
    try{
    const user= await User.find(filters)
    res.status(200).send(user)
    console.log(user)
    }catch(err){
        next(err)
    }
  }

//   exports.updateUser = async(req,res,next)=>{
//     const user = await User.findOne({_id:req.user.userId})
    
//         if(req.userId!==user._id.toString())
//         {
//             return next(createError(403,"You can delete only your own account"))      
//         }
//         await User.findByIdAndUpdate(req.params.id)
//         res.status(200).send("Deleted!!")
//   }