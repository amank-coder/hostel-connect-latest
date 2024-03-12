const express = require("express")
const router = express.Router()
const {userAuth, isAdmin} = require('../middleware/authMiddleware')
const userController = require('../controller/userController')


/**
 * @swagger
 * components:
 *  securitySchemes:
 *   bearerAuth:            
 *    type: http
 *    scheme: bearer
 *    bearerFormat: JWT    
 *  schemas:
 *    User:
 *      type: object
 *      properties:
 *        name:
 *          type: string
 *          description: The Auto-generated id of user collection
 *          example : DHSASDHJDJHVAJDSVJAVSD
 *        email:
 *          type: string
 *          description: User Name
 *        password:
 *          type: string
 *          description: user email address
 *        regno:
 *          type: string
 *          description: user password should be greater then 6 character
 *        mobno:
 *          type: string
 *          description: User Name
 *        block:
 *          type: string
 *          description: user email address
 *        roomno:
 *          type: string
 *          description: user password should be greater then 6 character
 *        isAdmin:
 *          tyoe: boolean
 *          description: admin or student
 * security:
 *  - bearerAuth: [] 
 */

/**
 *  @swagger
 *  tags:
 *    name: User
 *    description: user apis
 */

/**
 * @swagger
 * /api/users:
 *    get:
 *      security:
 *       - bearerAuth: [] 
 *      summary: list user
 *      tags: [User]
 *      parameters:
 *        - in: query
 *          name: block
 *          schema:
 *            type: string
 *            description: Filter complaints by block
 *        - in: query
 *          name: roomno
 *          schema:
 *            type: string
 *            description: Filter complaints by roomno
 *      responses:
 *        200:
 *          description: users fetched successfully
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/User'
 *        500:
 *          description: internal serevr error
 */

// router.delete('/delete/:id', middle.verifyToken, userController.deleteUser)
router.get('/' ,userAuth, isAdmin, userController.getUsers)
// router.put('/users',userAuth, userController.deleteUser)
router.post('/getUser', userAuth, userController.getUserController)

module.exports= router