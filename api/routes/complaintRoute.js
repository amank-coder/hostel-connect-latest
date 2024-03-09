const express = require("express")
const router = express.Router()
const { userAuth, isAdmin } = require('../middleware/authMiddleware');

const complaintController = require('../controller/complaintController')

/**
 * @swagger
 * components:
 *  securitySchemes:
 *   bearerAuth:            
 *    type: http
 *    scheme: bearer
 *    bearerFormat: JWT    
 *  schemas:
 *    Complaint:
 *      type: object
 *      required:
 *        - roomno
 *        - category
 *        - timing
 *        - block
 *      properties:
 *        roomno:
 *          type: string
 *          description: User Name
 *        category:
 *          type: string
 *          description: user email address
 *        timing:
 *          type: string
 *          description: user password should be greater then 6 character
 *        message:
 *          type: string
 *          description: User Name
 *        status:
 *          type: string
 *          description: user email address
 *        block:
 *          type: string
 *          description: user password should be greater then 6 character
 *      example:
 *        roomno: 101
 *        category: cleaning
 *        timing: 9:00am
 *        regno: stud11234
 *        message: hello
 *        status: false
 *        block: A
 * security:
 *  - bearerAuth: [] 
 */

/**
 *  @swagger
 *  tags:
 *    name: Complaint
 *    description: complaint apis
 */

/**
 * @swagger
 * /api/complaint:
 *    post:
 *      security:
 *       - bearerAuth: [] 
 *      summary: report complaint
 *      tags: [Complaint]
 *      requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Complaint'
 *      responses:
 *        200:
 *          description: complaint created successfully
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Complaint'
 *        500:
 *          description: internal serevr error
 */

/**
 * @swagger
 * /api/complaint:
 *    get:
 *      security:
 *       - bearerAuth: [] 
 *      summary: report complaint
 *      tags: [Complaint]
 *      parameters:
 *        - in: query
 *          name: block
 *          schema:
 *            type: string
 *            description: Filter complaints by status (e.g., open, closed)
 *      responses:
 *        200:
 *          description: complaint created successfully
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Complaint'
 *        500:
 *          description: internal serevr error
 */

/**
 * @swagger
 * /api/complaint/{id}:
 *    patch:
 *      security:
 *       - bearerAuth: [] 
 *      summary: report complaint
 *      tags: [Complaint]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *            type: string
 *          required: true
 *          description: Complaint id
 *      requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Complaint'
 *      responses:
 *        200:
 *          description: complaint created successfully
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Complaint'
 *        500:
 *          description: internal serevr error
 */


router.post('/complaint', userAuth, complaintController.createComplaint)
router.get('/complaint' ,userAuth, complaintController.getComplaints) 
router.patch('/complaint/:id', userAuth, isAdmin, complaintController.updateStatus)

module.exports= router