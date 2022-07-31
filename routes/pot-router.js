const express = require('express')
const PotCtrl = require('../controllers/pot-controller')
const router = express.Router()

router.post('/newPot', PotCtrl.createPot)
router.get('/getPots', PotCtrl.getPots)
router.get('/getPot/:id', PotCtrl.getPot)
router.delete('/deletePot/:id', PotCtrl.deletePot)
router.put('/updatePot/:id', PotCtrl.updatePot)
