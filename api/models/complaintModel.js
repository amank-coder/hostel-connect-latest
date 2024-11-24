const { Schema, mongoose } = require('mongoose');

const complaintSchema = new Schema({
  roomno: {
    type: Number,
  },
  category: {
    type: String,
  },
  timing: {
    type: String,
  },
  message: {
    type: String,
    required: false,
  },
  status: {
    type: Boolean,
    required: true,
    default: false,
  },
  block: {
    type: String,
    required: false,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,  // Reference to the User collection
    ref: 'User',  // Reference to the User model
    required: true,
  }
}, {
  timestamps: true,
});

module.exports = mongoose.model("Complaint", complaintSchema);
