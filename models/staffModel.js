const {Schema, mongoose} = require('mongoose')


const staffSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  name:{
    type:String,
    required:true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  img: {
    type: String,
    required: false,
  },
  empno: {
    type: String,
  },
  mobno: {
    type: String,
    required: false,
  },
  dept: {
    type: String,
    required: false,
  },
  sex:{
    type:String,
    required:true
  },
},{
  timestamps:true
});

module.exports= mongoose.model("Staff", staffSchema)