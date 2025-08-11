import "./Navbar.css";
import { useNavigate, Link } from "react-router-dom";
import {
  FaChartLine,
  FaPiggyBank,
  FaHistory,
  FaFileAlt,
  FaUser,
  FaCog,
  FaLockOpen,
} from "react-icons/fa";

function Navbar() {
  const navigate = useNavigate();
  const handleLogout = (e) => {
    e.preventDefault();
    const confirmLogout = window.confirm(
      "Are you sure you want to end the session?"
    );
    if (confirmLogout) {
      localStorage.removeItem("userToken");
      sessionStorage.clear();
      navigate("/login");
    }
  };
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="navbar-brand">
          <Link to="/menu">FinanceApp</Link>
        </li>
        <li>
          <Link to="/dashboard">
            <FaChartLine className="active" /> Dashboard
          </Link>
        </li>
        <li>
          <Link to="/loans">
            <FaHistory className="icon" /> Loans
          </Link>
        </li>
        <li>
          <Link to="/savings">
            <FaPiggyBank className="icon" /> Savings
          </Link>
        </li>
        <li>
          <Link to="/documents">
            <FaFileAlt className="icon" /> Documents
          </Link>
        </li>
        <li>
          <Link to="/profile">
            <FaUser className="icon" /> Profile
          </Link>
        </li>
        <li>
          <Link to="/settings">
            <FaCog className="icon" /> Settings
          </Link>
        </li>
        <li>
          <a href="/login" onClick={handleLogout} style={{ cursor: "pointer" }}>
            <FaLockOpen className="icon" /> Log Out
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
