import "./NewLoan.css";
import { useNavigate } from "react-router-dom";

function NewLoan() {
  const navigate = useNavigate();
  return (
    <div className="container-general">
      <h1>Create New Loan</h1>
      <form>
        <div className="form-group">
          <h6>Loan Amount</h6>
          <input
            type="number"
            className="form-control"
            id="loanAmount"
            placeholder="Enter loan amount"
          />
        </div>
        <div className="form-group">
          <h6>Loan Term (months)</h6>
          <input
            type="number"
            className="form-control"
            id="loanTerm"
            placeholder="Enter loan term in months"
          />
        </div>
        <div className="form-group">
          <h6>Interest Rate (%)</h6>
          <input
            type="number"
            className="form-control"
            id="interestRate"
            placeholder="Enter interest rate"
          />
        </div>
        <div className="form-group">
          <h6>Description</h6>
          <input
            type="text"
            className="form-control"
            id="description"
            placeholder="Enter a brief description"
          />
        </div>
        <div>
          <button type="submit" className="btn btn-secondary">
            Create Loan
          </button>
          <button
            className="btn btn-primary"
            onClick={() => navigate("/loans")}
          >
            Back to Loans
          </button>
        </div>
      </form>
    </div>
  );
}

export default NewLoan;
