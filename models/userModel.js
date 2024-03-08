const {Schema, mongoose} = require('mongoose')
const validator = require('validator')
const JWT = require('jsonwebtoken')

const userSchema = new Schema({
  name:{
    type:String,
    required:true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: validator.isEmail,
  },
  password: {
    type: String,
    required: true,
    unique:true
  },
  regno: {
    type: String,
  },
  mobno: {
    type: String,
    required: false,
  },
  block: {
    type: String,
    required: false,
  },
  roomno:{
    type:Number
  },
  isAdmin:{
    type:Boolean,
    default:false
  }
},{
  timestamps:true
});

userSchema.methods.createJWT = function(){
  return JWT.sign({userId: this._id, isAdmin: this.isAdmin},process.env.JWT_SECRET,{
    expiresIn: "1d",
  });
};

module.exports= mongoose.model("User", userSchema);