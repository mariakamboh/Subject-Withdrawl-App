const Request = require('../models/Request');

// POST /api/requests - Submit a new subject withdrawal request
const createRequest = async (req, res) => {
  try {
    const { subject, reason } = req.body;

    // Validate inputs
    if (!subject || !reason) {
      return res.status(400).json({ message: 'Subject and reason are required.' });
    }

    const newRequest = new Request({
      subject,
      reason,
      user: req.user.id, // Added by authenticateUser middleware
    });

    await newRequest.save();
    res.status(201).json({ message: 'Withdrawal request submitted', request: newRequest });
  } catch (error) {
    console.error("❌ Create Request Error:", error.message);
    res.status(500).json({ message: 'Server error while submitting request' });
  }
};

// GET /api/requests/my - Get all withdrawal requests of logged-in user
const getMyRequests = async (req, res) => {
  try {
    const requests = await Request.find({ user: req.user.id }).sort({ createdAt: -1 });
    res.status(200).json(requests);
  } catch (error) {
    console.error("❌ Fetch Requests Error:", error.message);
    res.status(500).json({ message: 'Server error while fetching requests' });
  }
};

module.exports = {
  createRequest,
  getMyRequests
};
