const express = require('express');
const router = express.Router();


// router.use('/alt', require('./alt'));
// Index
router.use('/', require('./home'));
// Dashboard
router.use('/dashboard', require('./dashboard'));
// Login
router.use('/login', require('./login'));
// Logout
router.use('/logout', require('./logout'));

module.exports = router;
