const Request = require('../models/Request');

// POST /api/requests
const createRequest = async (req, res) => {
  try {
    const { subject, reason } = req.body;

    const newRequest = new Request({
      subject,
      reason,
      user: req.user.id,
    });

    await newRequest.save();
    res.status(201).json({ message: 'Withdrawal request submitted', request: newRequest });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// GET /api/requests/my
const getMyRequests = async (req, res) => {
  try {
    const requests = await Request.find({ user: req.user.id }).sort({ createdAt: -1 });
    res.status(200).json(requests);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { createRequest, getMyRequests };
