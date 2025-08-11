import "./Menu.css";
import { useNavigate } from "react-router-dom";

function Menu() {
  const navigate = useNavigate();
  return (
    <div className="menu">
      <h1>Welcome to FinanceApp</h1>
      <div className="menu-info">
        <span>Your Financial Overview</span>
      </div>
      <div className="menu-actions">
        <button className="btn btn-primary" onClick={() => navigate("/loans")}>
          Loans
        </button>
        <button
          className="btn btn-primary"
          onClick={() => navigate("/new-loan")}
        >
         New Loan
        </button>
        <button
          className="btn btn-primary"
          onClick={() => navigate("/savings")}
        >
          Savings
        </button>
        <button
          className="btn btn-primary"
          onClick={() => navigate("/new-saving")}
        >
          New Saving Fund
        </button>
        <button
          className="btn btn-primary"
          onClick={() => navigate("/dashboard")}
        >
          Dashboard
        </button>
        <button
          className="btn btn-primary"
          onClick={() => navigate("/documents")}
        >
          Documents
        </button>
      </div>
    </div>
  );
}

export default Menu;
