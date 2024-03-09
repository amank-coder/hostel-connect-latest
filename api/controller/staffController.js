const Staff = require('../models/staffModel')
const jwt = require('jsonwebtoken')
const createError = require('../utils/createError')


exports.addStaff = async(req,res, next)=>{
    try{
        const newUser= new Staff({
            ...req.body,
        })
        await newUser.save()
        res.send("New staff created")

    }catch(err){
        next(err)
    }
}


exports.getStaffs = async(req,res, next)=>{

    const q= req.query
      const filters={
          ...(q.dept && {roomno:q.dept})
      }
    try{
    const staff= await Staff.find(filters)
    res.status(200).send(staff)
    }catch(err){
        next(err)
    }
  }