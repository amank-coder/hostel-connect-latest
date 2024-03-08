const {Schema, mongoose} = require('mongoose')


const complaintSchema = new Schema({
  roomno: {
    type: Number,
  },
  category: {
    type: String,
  },
  timing:{
    type:String,
  },
  message: {
    type: String,
    required: false,
  },
  status:{
    type:Boolean,
    required:true,
    default:false
  },
  block: {
    type: String,
    required: false,
  },
  
},{
  timestamps:true
});

module.exports= mongoose.model("Complaint", complaintSchema)