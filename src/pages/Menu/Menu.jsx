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
        <div className="about-us">
          <h3>About Us</h3>
          <p>
            FinanceApp is a secure, easy-to-use financial platform designed to
            help individuals and businesses manage their money with confidence.
            From personal budgeting to loan applications and credit tracking,
            our goal is to simplify finance so you can focus on what truly
            matters. We combine advanced technology with human-centered design
            to deliver clear, transparent, and reliable financial services — all
            at your fingertips.
          </p>
          <h3>Mision</h3>
          <p>
            Our mission is to empower people to take control of their financial
            future through accessible, secure, and transparent digital
            solutions. We aim to break down financial barriers, offer
            personalized tools, and ensure every transaction is handled with the
            highest level of integrity and trust.
          </p>
          <h3>Vision</h3>
          <p>
            Our vision is to become the most trusted and innovative financial
            platform in the market, where technology and transparency create
            opportunities for everyone to achieve financial stability and
            growth.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Menu;
