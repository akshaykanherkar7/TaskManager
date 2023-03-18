const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fullName: {type: String, required: true},
    email: {type: String, required: true, enum: ['email']},
    password: {type: String, required: true, enum: ['password']}
})

const UserModel = mongoose.model("user", userSchema);

module.exports = UserModel;