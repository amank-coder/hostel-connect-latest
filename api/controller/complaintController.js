const Complaint = require('../models/complaintModel');
const mongoose = require('mongoose');

exports.createComplaint = async (req, res, next) => {
  try {
    const newComplaint = new Complaint(req.body);

    await newComplaint.save();
    res.send({
      message:"Complaint Created",
      newComplaint
    });
  } catch (err) {
    next(err);
  }
};


exports.getComplaints = async (req, res, next) => {
  const q = req.query;
  console.log("query",q);
  const filters = {
    ...(q.block && { block: q.block }),
    ...(q.roomno && { roomno: q.roomno }),
    ...(q.category && { category: q.category }),
  };
  try {
    const complaints = await Complaint.find(filters);
    res.status(200).send(complaints);
  } catch (err) {
    next(err);
  }
};


exports.updateStatus = async(req, res, next)=>{
    try {
    const { id } = req.params;
    const idx = new mongoose.Types.ObjectId(id);
    const { status } = req.body;
    console.log(id)

    let complaint = await Complaint.findById(idx)
    complaint.status = status;
    await complaint.save();

    return res.json(
      { 
        message: "Complaint status updated successfully",
        complaint
      }
      );
  } catch (error) {
    console.error("Error updating complaint status:", error);
    return res.status(500).json({ message: "Internal server error" , error: error});
  }

}

