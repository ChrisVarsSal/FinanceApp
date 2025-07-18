import "./LoanInfo.css";
import { useNavigate } from "react-router-dom";

function LoanInfo() {
  const navigate = useNavigate();
  const loan = {
    id: 1,
    name: "Juan Pérez",
    amount: 5000,
    interestRate: 7.5,
    term: 24,
    status: "Aprobado",
    requestedDate: "2025-01-05",
    disbursementDate: "2025-01-12",
    monthlyPayment: 225.3,
    totalPayable: 5407.2,
  };
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount);
  };

  return (
    <div className="loan-info-container">
      <h1>Loan Information</h1>
      <div className="container-1">
        <div className="section">
          <p>
            <strong>ID:</strong> {loan.id}
          </p>
          <p>
            <strong>Name:</strong> {loan.name}
          </p>
          <p>
            <strong>Status:</strong> {loan.status}
          </p>
          <p>
            <strong>Requested Date:</strong> {loan.requestedDate}
          </p>
          <p>
            <strong>Disbursement Date:</strong> {loan.disbursementDate}
          </p>
        </div>
      </div>
      <div className="container-1">
        <div className="section">
          <h3>Financial Details</h3>
          <p>
            <strong>Requested Amount:</strong> ${loan.amount}
          </p>
          <p>
            <strong>Interest Rate:</strong> {loan.interestRate}%
          </p>
          <p>
            <strong>Term:</strong> {loan.term} months
          </p>
          <p>
            <strong>Monthly Payment:</strong> ${loan.monthlyPayment}
          </p>
          <p>
            <strong>Total Payable:</strong> ${loan.totalPayable}
          </p>
        </div>
      </div>
      <div className="container-1">
        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
          <h3 className="font-semibold text-gray-800 mb-3">Payment History</h3>
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
            Pay Loan
          </button>
        </div>
        <div>
          <button className="btn btn-primary" onClick={() => navigate(-1)}>
            Back to Loans
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoanInfo;
