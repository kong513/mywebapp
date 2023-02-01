const express = require('express');
const app = express();

const userRoute = express.Router();
let Userlist = require('../model/Userlist');

//add User ID
userRoute.route('/register-user').post((req, res, next) => {
    Userlist.create(req.body, (error, data) => {
        if (error) {
            return next(error);
        } 
        else {
            res.json(data);
        }
    })
})

//Get all User ID
userRoute.route('/').get((req, res) => {
    Userlist.find((error, data) => {
        if (error) {
            return next(error);
        }
        else {
            res.json(data);
        }
    })
})

//Get User ID
userRoute.route('/show-user/:id').get((req, res) => {
    Userlist.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        }
        else {
            res.json(data);
        }
    })
})

//update User
userRoute.route('/update-user/:id').put((req, res, next) => {
    Userlist.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }), (error, data) => {
        if (error) {
            return next(error);
            console.log(error);
        } 
        else {
            res.json(data);
            console.log('update success');
        }
    }
})

//delete user 
userRoute.route('/delete-user/:id').delete((req, res, next) => {
    Userlist.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        }
        else {
            res.status(200).json({
                msg: data
            })
                
        }
    })
})

module.exports = userRoute;