const express = require('express')
const logger = require('../util/logger')
const userController = require('../controllers/user.controller')
const router = express.Router()

router.post('/api/user', userController.registerUser)
router.get('/api/user', userController.getAllUsers)
router.get('/api/user/:id', userController.getUserById)
router.delete('/api/user/:id', userController.deleteUser)
router.put('/api/user/:id', userController.updateUser)

module.exports = router