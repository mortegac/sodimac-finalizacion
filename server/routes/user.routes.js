const express = require('express');
const router = express.Router();
const { userCtrl } = require('../controllers');
const { verifiedAuth } = require('../midlewares')

// router.get('/', userCtrl.readAll);
router.get('/', verifiedAuth, userCtrl.readAll);
router.get('/:id', verifiedAuth, userCtrl.readOne);
router.post('/', verifiedAuth, userCtrl.create);
router.put('/:id', verifiedAuth, userCtrl.updateOne);
router.delete('/:id', verifiedAuth, userCtrl.deleteOne);

router.post('/login', userCtrl.authLogin);


module.exports = router