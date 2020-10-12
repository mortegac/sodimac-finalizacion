const express = require('express')
const router = express.Router()
const { verifiedAuth } = require('../midlewares')

router.use('/api/user', require('./user.routes'));
router.use('/api/favorites', verifiedAuth, require('./favorites.routes'));


module.exports = router