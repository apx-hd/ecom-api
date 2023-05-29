const express = require('express');

const router = express.Router();

const { getAllUsers, getSingleUser, updateUser, deleteUser } = require('../controllers/user');

router.get('/', getAllUsers)
router.get('/:userID', getSingleUser)
router.patch('/:userID', updateUser)
router.delete('/:userID', deleteUser)

module.exports = router;