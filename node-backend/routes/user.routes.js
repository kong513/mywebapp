require('dotenv').config();

const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs')
const userRoute = express.Router();
const userlist = require('../model/userlist');


userRoute.post('/register', async (req, res) => {
  try{
    const { firstname, lastname, username, email, password } = req.body;

    encryptedPassword = await bcrypt.hash(password, 10);

    const user = await userlist.create({
      firstname,
      lastname,
      email: email.toLowerCase(),
      username,
      password: encryptedPassword
    })

    const token =jwt.sign(
      { user_id : user._id, email},
      process.env.TOKEN_KEY,
      {
        expiresIn:"2h"
      }
    )
    user.token = token;

    res.status(201).json(user);
    

  } catch (err) {
    console.log(err)
  }
})

userRoute.post('/login', async (req, res) => {
  try{
    const { email, password } = req.body;

    const user = await userlist.findOne({email});

    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign(
        { user_id: user._id, email},
        process.env.TOKEN_KEY,
        {
          expiresIn:"2h"
        }
      )
      user.token = token;
      res.status(200).json(user);
  
    }
    res.status(400)

  } catch (err) {
    console.log(err)
  }
})



// Authentication middleware
/*function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, 'secret_key', (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

// Protected route
userRoute.get('/users', authenticateToken, (req, res) => {
  userlist.find((error, data) => {
    if (error) {
      return next(error);
    }
    else {
      res.json(data);
    }
  })
})

// Unprotected routes
userRoute.post('/add', (req, res, next) => {
  userlist.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } 
    else {
      res.json(data);
    }
  })
})

userRoute.get('/', (req, res) => {
  userlist.find((error, data) => {
    if (error) {
      return next(error);
    }
    else {
      res.json(data);
    }
  })
})

userRoute.get('/show/:id', (req, res) => {
  userlist.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    }
    else {
      res.json(data);
    }
  })
})

userRoute.put('/update/:id', (req, res, next) => {
  userlist.findByIdAndUpdate(req.params.id, {
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

userRoute.delete('/delete/:id', (req, res, next) => {
  userlist.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    }
    else {
      res.status(200).json({
        msg: data
      });
    }
  })
})

// Login route
userRoute.post('/login', (req, res) => {
  userlist.findById(req.params.body)
  const { email, password } = req.body;
  
  
  // Check if user exists and password is correct
  if (email === 'Aimpree04478@gmail.com' && password === '1234') {
    // Generate JWT token
    const token = jwt.sign({ email }, 'secret_key');
    res.json({ token });
  } else {
    res.status(401).json({ message: 'Invalid username or password' });
  }
});*/

module.exports = userRoute;
