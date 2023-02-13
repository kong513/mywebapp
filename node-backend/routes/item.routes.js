const express = require('express');
const app = express();
const itemRoute = express.Router();


let itemlist = require('../model/itemlist');

//add User ID
itemRoute.route('/add').post((req, res, next) => {
    itemlist.create(req.body, (error, data) => {
        if (error) {
            return next(error);
        } 
        else {
            res.json(data);
        }
    })
})

//Get all User ID
itemRoute.route('/').get((req, res) => {
    itemlist.find((error, data) => {
        if (error) {
            return next(error);
        }
        else {
            res.json(data);
        }
    })
})

//Get User ID
itemRoute.route('/show/:id').get((req, res) => {
    itemlist.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        }
        else {
            res.json(data);
        }
    })
})

//update User
itemRoute.route('/update/:id').put((req, res, next) => {
    itemlist.findByIdAndUpdate(req.params.id, {
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
itemRoute.route('/delete/:id').delete((req, res, next) => {
    itemlist.findByIdAndRemove(req.params.id, (error, data) => {
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


module.exports = itemRoute;

