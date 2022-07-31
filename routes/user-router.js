const express = require('express')
const UserCtrl = require('../controllers/user-controller')
const router = express.Router()

router.post('/register', UserCtrl.createUser)
router.post('/login', UserCtrl.loginUser)
router.put('/:id', UserCtrl.updateUser)
// DO NOT USE THESE ROUTES -- THEY ARE FOR TESTING ONLY
router.get('/:id', UserCtrl.getUser)


module.exports = router