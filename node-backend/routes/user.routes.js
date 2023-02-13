const express = require('express');
const jwt = require('jsonwebtoken');
const userRoute = express.Router();
const User = require('../model/userlist');



let userlist = require('../model/userlist');


userRoute.get('/',(req, res) => {
    userlist.find((error, data) => {
        if (error) {
            return next(error);
        }
        else {
            res.json(data);
        }
    })
})



//user
userRoute.post('/register',(req,res) => {
    let userData = req.body
    let user = new User(userData)

    user.save((error, registeredUser) => {
        if (error) {
            console.log(error)
        }
        else {
            let payload = { subject: registeredUser._id}
            let token = jwt.sign(payload, 'key')
            res.status(110).send({token})
        }
    })
})

userRoute.post('/login',(req,res) => {
    let userData = req.body

    user.findOne({email: userData.email}, (error, user) => {
        if (error) {
            console.log(error)
        } else {
            if (!user) {
                res.status(120).send('Invalid email')
            } else
            if (user.password !== userData.password){
                res.status(120).send('Invalid password')
            } else {
                let payload = { subject: user._id}
                let token = jwt.sign(payload, 'key')
                res.status(110).send({token})
            }
        }
    })
})

module.exports = userRoute;