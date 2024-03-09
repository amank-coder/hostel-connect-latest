const express = require("express")
const router = express.Router()
const authController = require('../controller/authController')

/**
 * @swagger
 * components:
 *  schemas:
 *    User:
 *      type: object
 *      required:
 *        - name
 *        - email
 *        - password
 *        - regno
 *        - mobno
 *        - block
 *        - roomno
 *        - isAdmin
 *      properties:
 *        id:
 *          type: string
 *          description: The Auto-generated id of user collection
 *          example : DHSASDHJDJHVAJDSVJAVSD
 *        name:
 *          type: string
 *          description: User Name
 *        email:
 *          type: string
 *          description: user email address
 *        password:
 *          type: string
 *          description: user password should be greater then 6 character
 *        regno:
 *          type: string
 *          description: User Name
 *        mobno:
 *          type: string
 *          description: user email address
 *        block:
 *          type: string
 *          description: user password should be greater then 6 character
 *        roomno:
 *          type: number
 *          description: user password should be greater then 6 character
 *        isAdmin:
 *          type: boolean
 *          description: user password should be greater then 6 character
 *      example:
 *        name: stud1
 *        email: stud1@gmail.com
 *        password: stud1
 *        regno: stud11234
 *        mobno: 9999999999
 *        block: A
 *        roomno: 101
 *        isAdmin: false
 */

/**
 *  @swagger
 *  tags:
 *    name: Auth
 *    description: authentication apis
 */

/**
 * @swagger
 * /api/auth/register:
 *    post:
 *      summary: register new user
 *      tags: [Auth]
 *      requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *      responses:
 *        200:
 *          description: user created successfully
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/User'
 *        500:
 *          description: internal serevr error
 */

/**
 * @swagger
 * /api/auth/login:
 *    post:
 *      summary: login user
 *      tags: [Auth]
 *      requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *      responses:
 *        200:
 *          description: user logged in successfully
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/User'
 *        500:
 *          description: internal serevr error
 */


router.post('/register', authController.register)
router.post('/login', authController.login)
// router.post('/login/admin', authController.loginAdmin)
router.post('/logout', authController.logout)
router.post('/forgot-password', authController.forgot)
router.get('/reset-password/:id/:token', authController.reset)
router.post('/reset-password/:id/:token', authController.resetpost)


module.exports= router