const Mongoose = require('mongoose');

const { ObjectId } = Mongoose.Types;
const AppError = (message, statusCode) => {
    const err = new Error(message);
    err.statusCode = statusCode;
    throw err;
};

module.exports ={
    ObjectId,
    AppError
}
