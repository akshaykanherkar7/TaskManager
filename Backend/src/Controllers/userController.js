const express = require("express");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

const UserModel = require("../Models/userModel");

const userRegister = async (req, res) => {
    console.log(req.body, "req.body")
    const {firstName, lastName, role, email, password} = req.body;
    try{
        await bcrypt.hash(password, 6, async (err, hash) => {
            if(err){
                return res.status(400).send({message: err})
            }
            const registeredUser = await UserModel({firstName: firstName, lastName: lastName, role: role, email: email, password: hash});
            await registeredUser.save();
            return res.status(201).send({message: "User registered successfully", userData: registeredUser})
        })
    }
    catch(err){
        return res.status(400).send({message: err.message});
    }
}

const userLogin = async (req, res) => {
    const {email , password} = req.body;
    try {
        const user = await UserModel.findOne({email:email});
        if(!user){
            return res.status(404).send({message: "User not found",});
        }
        const hashed_password = user.password;
        await bcrypt.compare(password, hashed_password, async (err, result) => {
            if(err){
                return res.status(400).send({message: err});
            }
            if(result){
                let token = jwt.sign({email: user.email, userId: user._id}, process.env.JWT_SECRET);
                return res.status(200).send({message: "Login successful", data: user, token: token});
            }
            else
            {
                return res.status(404).send({message: "You have entered wrong password"});
            }
        })
    }
    catch(err){
        return res.status(502).send({message: err.message});
    }
}

module.exports = { userRegister, userLogin } 