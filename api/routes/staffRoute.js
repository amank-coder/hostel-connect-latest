const express = require("express")
const router = express.Router()
const staffController = require('../controller/staffController')

router.post('/addstaff', staffController.addStaff)
router.get('/getstaffs' ,staffController.getStaffs)

module.exports= router