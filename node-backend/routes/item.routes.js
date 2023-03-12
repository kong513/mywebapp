const express = require('express');
//const app = express();
const itemRoute = express.Router();
const itemlist = require('../model/itemlist');
//const verifyToken = express.Router();

//add 
itemRoute.post('/add', (req, res, next) => {
    itemlist.create(req.body, (error, data) => {
        if (error) {
            return next(error);
        } 
        else {
            res.json(data);
        }
    })
})

//Get 
itemRoute.get('/', (req, res) => {
    itemlist.find((error, data) => {
        if (error) {
            return next(error);
        }
        else {
            res.json(data);
        }
    })
})

//Gets
itemRoute.get('/show/:id', (req, res) => {
    itemlist.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        }
        else {
            res.json(data);
        }
    })
})

//update 
itemRoute.put('/update/:id', (req, res, next) => {
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

//delete 
itemRoute.delete('/delete/:id', (req, res, next) => {
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

itemRoute.post('/addcomment/:id', (req, res, next) => {
    itemlist.findByIdAndUpdate(req.params.id,
      {$push: {comments: req.body.comments /*{user: req.body.user, comment: req.body.comment }*/}},
      {new: true},
      (error, data) => {
        if (error) {
          return next(error);
        } 
        else {
          res.json(data);
        }
      }
    );
  });
  
  


module.exports = itemRoute;

