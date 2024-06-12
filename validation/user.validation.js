const validateEmail = (email) => {
    const re = /^[a-zA-Z]{1}[.]{1}[a-zA-Z]{2,}\@[a-zA-Z]{2,}\.[a-zA-Z]{2,3}$/gm
    return re.test(email)
};

const validatePassword = (password) => {
    const re = /^(?=.*[A-Z])(?=.*[0-9]).{8,}$/
    return re.test(password)
};

const validatePhoneNumber = (phoneNumber) => {
    const re = /^06\d{8}$/
    return re.test(phoneNumber)
};

module.exports = {
    validateEmail,
    validatePassword,
    validatePhoneNumber
};