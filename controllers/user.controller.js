const userService = require('../services/user.services');
const logger = require('../util/logger');
const validate = require('../validation/user.validation');

let userController = {
    registerUser: async (req, res) => {
        console.log('registerUser called');
        try {
            const user = req.body;
            logger.debug(user);
            // validate.validateEmail(user.email)
            // validate.validatePassword(user.password)
            // validate.validatePhoneNumber(user.phoneNumber)
            const result = await userService.registerUser(user);
            res.status(201).send(result);
        } catch (error) {
            logger.error(error);
            res.status(400).send(error.message);
        }
    },
    getAllUsers: async (req, res) => {
        console.log('getUsers called');
        try {
            const result = await userService.getAllUsers();
            res.status(200).send(result);
        } catch (error) {
            logger.error(error);
            res.status(400).send(error.message);
        }
    },
    getUserById: async (req, res) => {
        console.log('getUserById called')
        try {
            const id = req.params.id;
            console.log(id);
            const result = await userService.getUserById(id);
            res.status(200).send(result);
        } catch (error) {
            logger.error(error);
            res.status(400).send(error.message);
        }
    },
    deleteUser: async (req, res) => {
        console.log('deleteUser called');
        try {
            const id = req.params.id;
            const result = await userService.deleteUser(id);
            res.status(200).send(result);
        } catch (error) {
            logger.error(error);
            res.status(400).send(error.message);
        }
    },
    updateUser: async (req, res) => {
        console.log('updateUser called');
        try {
            const id = req.params.id;
            const user = req.body;
            // validate.validateUser(user);
            const result = await userService.updateUser(id, user);
            res.status(200).send(result);
        } catch (error) {
            logger.error(error);
            res.status(400).send(error.message);
        }
    }
}

module.exports = userController;