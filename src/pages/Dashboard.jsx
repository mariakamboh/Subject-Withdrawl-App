// src/pages/Dashboard.jsx
import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <h2>Welcome, {user?.name || "Student"}!</h2>
      <p>This is your dashboard. You can request subject withdrawal here.</p>
    </div>
  );
};

export default Dashboard;
