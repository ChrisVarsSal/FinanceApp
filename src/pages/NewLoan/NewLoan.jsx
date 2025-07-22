import "./NewLoan.css";
import { useNavigate } from "react-router-dom";

function NewLoan() {
  const navigate = useNavigate();
  return (
    <div className="container-general">
      <h1>Create New Loan</h1>
      <form>
        <div className="form-group">
          <label htmlFor="loanAmount">Loan Amount</label>
          <input type="number" className="form-control" id="loanAmount" />
        </div>
        <div className="form-group">
          <label htmlFor="loanTerm">Loan Term (months)</label>
          <input type="number" className="form-control" id="loanTerm" />
        </div>
        <div className="form-group">
          <label htmlFor="interestRate">Interest Rate (%)</label>
          <input type="number" className="form-control" id="interestRate" />
        </div>
        <div>
          <button type="submit" className="btn btn-secondary">
            Create Loan
          </button>
          <button className="btn btn-primary" onClick={() => navigate("/loans")}>
            Back to Loans
          </button>
        </div>
      </form>
    </div>
  );
}

export default NewLoan;
