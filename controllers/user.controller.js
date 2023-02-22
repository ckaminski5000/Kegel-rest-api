const userService = require('../services/user.service');
const catchAsync = require('../utils/catchAsync');
const httpStatus = require('http-status');


const createUser = catchAsync(async (req, res) => {
   console.log(req.body)
    const user = await userService.createUser(req.body);
    res.status(httpStatus.CREATED).send(user);
})

module.exports = {
    createUser
}