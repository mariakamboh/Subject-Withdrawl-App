import { useEffect, useState } from "react";
import API from "../services/api";

const MyRequests = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const res = await API.get("/requests/my");
        setRequests(res.data);
      } catch (err) {
        alert("Failed to fetch requests");
      }
    };
    fetchRequests();
  }, []);

  return (
    <div className="requests-container">
      <h2>My Withdrawal Requests</h2>
      {requests.length === 0 ? (
        <p>No requests found.</p>
      ) : (
        <ul>
          {requests.map((req) => (
            <li key={req._id}>
              <strong>{req.subject}</strong> - {req.reason} <em>({req.status})</em>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MyRequests;
