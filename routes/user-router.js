const express = require('express')
const UserCtrl = require('../controllers/user-controller')
const router = express.Router()

router.post('/register', UserCtrl.createUser)
router.post('/login', UserCtrl.loginUser)
router.get('/:id', UserCtrl.getUser)

module.exports = router