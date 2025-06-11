// src/components/Navbar.jsx
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import logo from "../assets/logo.png"; // Adjust the path as necessary
import './Navbar.css';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="navbar-logo flex items-center gap-2">
        Student Withdrawal Portal
        </Link>
      </div>
      <div className="navbar-right">
        {!user ? (
          <>
            <Link to="/login" className="navbar-link">Login</Link>
            <Link to="/register" className="navbar-link">Register</Link>
          </>
        ) : (
          <>
            <Link to="/dashboard" className="navbar-link">Dashboard</Link>
            {user.role === "admin" && <Link to="/admin" className="navbar-link">Admin</Link>}
            <Link to="/withdraw" className="navbar-link">Withdraw</Link>
            <button className="navbar-logout" onClick={logout}>Logout</button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
