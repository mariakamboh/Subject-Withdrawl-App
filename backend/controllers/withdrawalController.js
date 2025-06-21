const WithdrawalRequest = require('../models/WithdrawalRequest');

const submitWithdrawalRequest = async (req, res) => {
  try {
    const { subjectName, reason } = req.body;
    const userId = req.user.id;

    const newRequest = new WithdrawalRequest({
      userId,
      subjectName,
      reason
    });

    await newRequest.save();

    res.status(201).json({ message: 'Request submitted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error while submitting request' });
  }
};

module.exports = {
  submitWithdrawalRequest
};
