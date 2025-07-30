import "./SavingsInfo.css";
import { useNavigate } from "react-router-dom";

function SavingsInfo() {
  const navigate = useNavigate();
  const loan = {
    id: 1,
    name: "Juan Pérez",
    initialDeposit: 100,
    interestRate: 7.5,
    requestedDate: "2025-01-05",
    monthlyContribution: 500,
    targetAmount: 10000,
  };
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount);
  };
  return (
    <div className="container-general">
      <h1>Saving Fund Information</h1>
      <div className="container-1">
        <div className="section">
          <p>
            <strong>ID:</strong> {loan.id}
          </p>
          <p>
            <strong>Name:</strong> {loan.name}
          </p>
          <p>
            <strong>Target Amount:</strong> {loan.targetAmount}
          </p>
          <p>
            <strong>Interest Rate:</strong> {loan.interestRate}%
          </p>
          <p>
            <strong>Requested Date:</strong> {loan.requestedDate}
          </p>
        </div>
      </div>
      <div className="container-1">
        <div className="section">
          <h3>Financial Details</h3>
          <p>
            <strong>Target Amount:</strong> ${loan.targetAmount}
          </p>
          <p>
            <strong>Interest Rate:</strong> {loan.interestRate}%
          </p>
          <p>
            <strong>Initial Deposit:</strong> ${loan.initialDeposit}
          </p>
          <p>
            <strong>Monthly Contribution:</strong> ${loan.monthlyContribution}
          </p>
        </div>
      </div>
      <div className="container-1">
        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
          <h3 className="font-semibold text-gray-800 mb-3">Added Savings</h3>
          <div className="payment-history-dates">
            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="text-sm text-gray-600">July 15, 2025</span>
              <span className="text-sm font-medium text-gray-800">
                {formatCurrency(485.67)}
              </span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="text-sm text-gray-600">June 15, 2025</span>
              <span className="text-sm font-medium text-gray-800">
                {formatCurrency(485.67)}
              </span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="text-sm text-gray-600">May 15, 2025</span>
              <span className="text-sm font-medium text-gray-800">
                {formatCurrency(485.67)}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="actions">
        <div>
          <button
            className="btn btn-secondary"
            onClick={() => navigate("/pay-loan")}
          >
            Add to Savings
          </button>
        </div>
        <div>
          <button className="btn btn-primary" onClick={() => navigate(-1)}>
            Back to Savings
          </button>
        </div>
      </div>
    </div>
  );
}

export default SavingsInfo;
