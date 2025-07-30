import "./NewSaving.css";
import { useNavigate } from "react-router-dom";

function NewSaving() {
  const navigate = useNavigate();
  return (
    <div className="container-general">
      <h1>Create New Saving Fund</h1>
      <form>
        <div className="form-group">
          <h6>Initial Deposit</h6>
          <input
            type="number"
            className="form-control"
            id="initialDeposit"
            placeholder="Enter initial deposit"
          />
        </div>
        <div className="form-group">
          <h6>Monthly Contribution</h6>
          <input
            type="number"
            className="form-control"
            id="monthlyContribution"
            placeholder="Enter monthly contribution"
          />
        </div>
        <div className="form-group">
          <h6>Target Amount</h6>
          <input
            type="number"
            className="form-control"
            id="targetAmount"
            placeholder="Enter target amount"
          />
        </div>
        <div className="form-group">
          <h6>Description</h6>
          <input
            type="Text"
            className="form-control"
            id="description"
            placeholder="Enter a brief description"
          />
        </div>
        <div className="actions">
          <button type="submit" className="btn btn-secondary">
            Create Saving Fund
          </button>
          <button
            className="btn btn-primary"
            onClick={() => navigate("/savings")}
          >
            Back to Savings
          </button>
        </div>
      </form>
    </div>
  );
}

export default NewSaving;
