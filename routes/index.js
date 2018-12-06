const express = require('express')
const router = express.Router()

const homeRoute = require('./home')

router.get('/', homeRoute)

module.exports = router