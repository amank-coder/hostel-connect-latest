const Complaint = require('../models/complaintModel');
const mongoose = require('mongoose');
const { sendMail } = require('../middleware/sendMail');

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

exports.sendEmail = async (req, res) => {
  try {
    const { complaintId } = req.body;
    console.log(complaintId)
    // Find the complaint by complaintId and populate the userId to get the user details
    let complaint = await Complaint.findById(complaintId).populate('userId'); // Ensure userId is populated

    if (!complaint) {
      return res.status(404).json({
        message: "Complaint not found!",
      });
    }

    const user = complaint.userId; // Access the populated user object

    if (!user) {
      return res.status(400).json({
        message: "No user associated with this complaint",
      });
    }

    const email = user.email; // Get the email from the populated user

    // Prepare email data and send it

    // Send the email
    await sendMail(email, "Hostel Connect", complaintId, email);

    // Respond with a success message
    res.status(200).json({
      message: "Verification link sent to your email!",
    });

  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({
      message: error.message,
    });
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

