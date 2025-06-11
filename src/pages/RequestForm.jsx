// src/pages/RequestForm.jsx
import { useState } from 'react';
import API from '../services/api';

const RequestForm = () => {
  const [form, setForm] = useState({
    subjectName: '',
    reason: ''
  });

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post('/withdrawals', form);
      alert('Request submitted successfully');
      setForm({ subjectName: '', reason: '' });
    } catch (err) {
      alert('Failed to submit request');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Subject Withdrawal Form</h2>
      <input
        type="text"
        name="subjectName"
        placeholder="Subject Name"
        value={form.subjectName}
        onChange={handleChange}
        required
      />
      <textarea
        name="reason"
        placeholder="Reason for withdrawal"
        value={form.reason}
        onChange={handleChange}
        required
      />
      <button type="submit">Submit Request</button>
    </form>
  );
};

export default RequestForm;
