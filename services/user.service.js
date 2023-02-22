const catchAsync = require("../utils/catchAsync");
const User = require("../models/user.model");
const ApiError = require("../utils/ApiError");
const httpStatus = require('http-status');


//get User


//create user
const createUser = async (userBody) => {
    console.log(userBody)
    const user = await User.create(userBody);
    //throw ApiError(ApiError(httpStatus.BAD_REQUEST, 'Email already taken'))
    return user;
}


//delete User

// update user

module.exports = {
    createUser
}