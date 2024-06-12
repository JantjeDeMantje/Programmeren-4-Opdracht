const logger = require('../util/logger')

//In-memory database om user data te bewaren
let users = []
let userIdCounter = 1

const userService = {
    registerUser: async (user) => {
        logger.info('registerUser called');
        try {
            const newUser = {
                id: userIdCounter++,
                email: user.email,
                firstName: user.firstName,
                lastName: user.lastName,
                password: user.password,
                phoneNumber: user.phoneNumber,
                roles: user.roles,
                street: user.street,
                city: user.city,
                isActive: user.isActive
            }
            users.push(newUser);
            return newUser;
        } catch (error) {
            logger.error(error);
            throw error;
        }
    },
    getAllUsers: async () => {
        logger.info('getAllUsers called');
        try {
            return users;
        } catch (error) {
            logger.error(error);
            throw error;
        }
    },
    getUserById: async (id) => {
        logger.info('getUserById called');
        try {
            const user = users.find(user => user.id === parseInt(id));
            if (!user) {
                throw new Error('User not found');
            }
            return user;
        } catch (error) {
            logger.error(error);
            throw error;
        }
    },
    deleteUser: async (id) => {
        logger.info('deleteUser called');
        try {
            const index = users.findIndex(user => user.id === parseInt(id));
            if (index === -1) {
                throw new Error('User not found');
            }
            users.splice(index, 1);
            return 'User deleted succesfully';
        } catch (error) {
            logger.error(error);
            throw error;
        }
    },
    updateUser: async (id, user) => {
        logger.info('updateUser called');
        try {
            const index = users.findIndex(user => user.id === parseInt(id));
            if (index === -1) {
                throw new Error('User not found');
            }
            if (user.email) {
                // validate.validateEmail(user.email);
                users[index].email = user.email;
            }
            if (user.firstName) {
                users[index].firstName = user.firstName;
            }
            if (user.lastName) {
                users[index].lastName = user.lastName;
            }
            if (user.isActive) {
                users[index].isActive = user.isActive;
            }
            if (user.phoneNumber) {
                // validate.validatePhoneNumber(user.phoneNumber);
                users[index].phoneNumber = user.phoneNumber;
            }
            if (user.roles) {
                users[index].roles = user.roles;
            }
            if (user.street) {
                users[index].street = user.street;
            }
            if (user.city) {
                users[index].city = user.city;
            }
            if (user.password) {
                // validate.validatePassword(user.password);
                users[index].password = user.password;
            }
            return users[index];

        } catch (error) {
            logger.error(error);
            throw error;
        }
    }
};

module.exports = userService;