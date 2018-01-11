const router = require('express').Router()

router.use('/api/users', require('./api/users'))
router.use('/api/auth', require('./api/auth'))
router.use('/', require('./api/home'))

module.exports = router
