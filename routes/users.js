const express = require('express')
const { getUsers, createUser } = require('../controllers/users')

const router = express.Router({ mergeParams: true })

router.route('/').get(getUsers).post(createUser)

module.exports = router
