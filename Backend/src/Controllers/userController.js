const express = require("express");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

// const userController = express.Router();

const UserModel = require("../Models/userModel");

// userController.post('/api/user/register', async (req, res) => {
//     const {fullName, email, password} = req.body;
//     try{
//         await bcrypt.hash(password, 6, async (err, hash) => {
//             if(err){
//                 return res.status(400).send({message: err})
//             }
//             const registeredUser = await UserModel({fullName: fullName, email: email, password: hash});
//             await registeredUser.save();
//             return res.status(201).send({message: "User registered successfully", userData: registeredUser})
//         })
//     }
//     catch(err){
//         return res.status(400).send({message: err.message});
//     }
// })

// module.exports = userController;

const userRegister = async (req, res) => {
    const {fullName, email, password} = req.body;
    try{
        await bcrypt.hash(password, 6, async (err, hash) => {
            if(err){
                return res.status(400).send({message: err})
            }
            const registeredUser = await UserModel({fullName: fullName, email: email, password: hash});
            await registeredUser.save();
            return res.status(201).send({message: "User registered successfully", userData: registeredUser})
        })
    }
    catch(err){
        return res.status(400).send({message: err.message});
    }
}

module.exports = userRegister 