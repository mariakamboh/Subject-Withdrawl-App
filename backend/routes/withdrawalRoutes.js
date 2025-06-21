const express = require('express');
const router = express.Router();
const { submitWithdrawalRequest } = require('../controllers/withdrawalController');
const { authenticateUser } = require('../middleware/authMiddleware');

router.post('/', authenticateUser, submitWithdrawalRequest);

module.exports = router;
