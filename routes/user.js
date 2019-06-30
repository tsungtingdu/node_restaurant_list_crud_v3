const express = require('express')
const router = express.Router()
const User = require('../models/user.js')


// login
router.get('/login', (req, res) => {
  res.render('login')
})

// login check
router.post('/login', (req, res) => {

})

// register
router.get('/register', (req, res) => {
  res.render('register')
})

// register check
router.post('/register', (req, res) => {
  const { name, email, password, password2 } = req.body
  User.findOne({ email: email }).then(user => {
    if (user) {
      console.log('User already exist!')
      res.render('register', {
        name,
        email,
        password,
        password2
      })
    } else if (password !== password2) {
      console.log('Passwords are not consistent')
      res.render('register', {
        name,
        email,
        password,
        password2
      })
    } else if (password === password2) {
      const newUser = new User({
        name,
        email,
        password
      })
      newUser.save().then(user => {
        res.redirect('/')
      }).catch(
        err => console.log(err)
      )
    }
  })
})

// logout
router.get('logout', (req, res) => {
  res.send('logout')
})

module.exports = router