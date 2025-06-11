// src/pages/AdminPanel.jsx
import { useEffect, useState } from 'react';
import API from '../services/api';

const AdminPanel = () => {
  const [requests, setRequests] = useState([]);

  const fetchRequests = async () => {
    try {
      const res = await API.get('/withdrawals');
      setRequests(res.data);
    } catch (err) {
      console.error('Failed to fetch withdrawal requests');
    }
  };

  const handleAction = async (id, status) => {
    try {
      await API.patch(`/withdrawals/${id}`, { status });
      fetchRequests();
    } catch (err) {
      console.error('Failed to update status');
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  return (
    <div>
      <h2>Admin Panel</h2>
      {requests.map((req) => (
        <div key={req._id} style={{ border: '1px solid #ccc', marginBottom: '10px', padding: '10px' }}>
          <p><strong>Student:</strong> {req.studentName}</p>
          <p><strong>Subject:</strong> {req.subjectName}</p>
          <p><strong>Reason:</strong> {req.reason}</p>
          <p><strong>Status:</strong> {req.status}</p>
          <button onClick={() => handleAction(req._id, 'approved')}>Approve</button>
          <button onClick={() => handleAction(req._id, 'rejected')}>Reject</button>
        </div>
      ))}
    </div>
  );
};

export default AdminPanel;
