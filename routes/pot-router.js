const express = require('express')
const PotCtrl = require('../controllers/pot-controller')
const router = express.Router()

router.post('/newPot', PotCtrl.createPot)
router.get('/getPots', PotCtrl.getPots)
router.delete('/delete/:id', PotCtrl.deletePot)
router.put('/update/:id', PotCtrl.updatePot)
// DO NOT USE THESE ROUTES -- THEY ARE FOR TESTING ONLY
router.get('/get/:id', PotCtrl.getPot)


module.exports = router
