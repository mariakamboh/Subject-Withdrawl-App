// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import RequestForm from "./pages/RequestForm";
import AdminPanel from "./pages/AdminPanel";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import Withdraw from "./pages/Withdraw";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Withdraw />} />

        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/withdraw" element={<ProtectedRoute><RequestForm /></ProtectedRoute>} />
        <Route path="/admin" element={<ProtectedRoute><AdminPanel /></ProtectedRoute>} />
        <Route path="/withdraw" 
        element={
          <ProtectedRoute>
            <Withdraw />
          </ProtectedRoute>
      }
/>

      </Routes>
    </Router>
  );
}


export default App;



