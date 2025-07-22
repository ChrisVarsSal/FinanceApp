import "./PayLoan.css";
import { useState } from "react";
import { CreditCard, DollarSign, AlertCircle, CheckCircle } from "lucide-react";

function PayLoan() {
  const [paymentAmount, setPaymentAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("credit-card");
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const loanData = {
    loanId: "LN-2024-001",
    principalAmount: 25000,
    interestRate: 5.5,
    remainingBalance: 18750,
    monthlyPayment: 485.67,
    nextDueDate: "2025-08-15",
    totalPaid: 6250,
    paymentsRemaining: 38,
  };

  const handlePaymentSubmit = async () => {
    if (!paymentAmount) return;
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setPaymentSuccess(true);
      setTimeout(() => setPaymentSuccess(false), 3000);
    }, 2000);
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount);
  };
  return (
    <div className="container-general">
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              Loan Payment Center
            </h1>
            <p className="text-gray-600">
              Manage your loan payments securely and efficiently
            </p>
          </div>
          {paymentSuccess && (
            <div className="mb-6 bg-green-50 border border-green-200 rounded-lg p-4 flex items-center space-x-3">
              <CheckCircle className="h-6 w-6 text-green-600" />
              <div>
                <h3 className="font-semibold text-green-800">
                  Payment Successful!
                </h3>
                <p className="text-green-700">
                  Your payment has been processed successfully.
                </p>
              </div>
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-6">
            <div className="container-1">
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
                <div className="flex items-center mb-4">
                  <DollarSign className="h-6 w-6 text-blue-600 mr-2" />
                  <h2 className="text-xl font-semibold text-gray-800">
                    Loan Summary
                  </h2>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600">Loan ID:</span>
                    <span className="font-medium text-gray-800">
                      {loanData.loanId}
                    </span>
                  </div>

                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600">Original Amount:</span>
                    <span className="font-medium text-gray-800">
                      {formatCurrency(loanData.principalAmount)}
                    </span>
                  </div>

                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600">Remaining Balance:</span>
                    <span className="font-bold text-red-600 text-lg">
                      {formatCurrency(loanData.remainingBalance)}
                    </span>
                  </div>

                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600">Monthly Payment:</span>
                    <span className="font-medium text-gray-800">
                      {formatCurrency(loanData.monthlyPayment)}
                    </span>
                  </div>

                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600">Interest Rate:</span>
                    <span className="font-medium text-gray-800">
                      {loanData.interestRate}%
                    </span>
                  </div>

                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600">Next Due Date:</span>
                    <span className="font-medium text-gray-800">
                      {loanData.nextDueDate}
                    </span>
                  </div>

                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600">Total Paid:</span>
                    <span className="font-medium text-green-600">
                      {formatCurrency(loanData.totalPaid)}
                    </span>
                  </div>

                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-600">Payments Remaining:</span>
                    <span className="font-medium text-gray-800">
                      {loanData.paymentsRemaining}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="container-1">
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
                <div className="flex items-center mb-4">
                  <CreditCard className="h-6 w-6 text-blue-600 mr-2" />
                  <h2 className="text-xl font-semibold text-gray-800">
                    Make a Payment
                  </h2>
                </div>

                <div className="space-y-4">
                  <div>
                     <h3 className="font-semibold text-gray-800 mb-2">
                        Payment Amount
                      </h3>
                    <div className="relative">
                      <span className="absolute left-3 top-3 text-gray-500">
                        $ 
                      </span>
                      <input
                        type="number"
                        value={paymentAmount}
                        onChange={(e) => setPaymentAmount(e.target.value)}
                        placeholder="0.00"
                        className="loan-amount w-full pl-8 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg"
                        required
                        min="0"
                        step="0.01"
                      />
                    </div>
                    <div className="mt-2 flex space-x-2">
                      <button
                        type="button"
                        onClick={() =>
                          setPaymentAmount(loanData.monthlyPayment.toString())
                        }
                        className="btn btn-secondary btn-pay-month"
                      >
                        Monthly Payment
                      </button>
                      <button
                        type="button"
                        onClick={() =>
                          setPaymentAmount(loanData.remainingBalance.toString())
                        }
                        className="btn btn-secondary btn-pay-all"
                      >
                        Pay Off Loan
                      </button>
                    </div>
                  </div>

                  <div>
                     <h3 className="font-semibold text-gray-800 mb-2">
                        Payment Method
                      </h3>
                    <select
                      value={paymentMethod}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="drop-down w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="credit-card">Credit Card</option>
                      <option value="debit-card">Debit Card</option>
                      <option value="bank-transfer">Bank Transfer</option>
                    </select>
                  </div>

                  {paymentAmount && (
                    <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                      <h3 className="font-semibold text-gray-800 mb-2">
                        Payment Summary
                      </h3>
                      <div className="space-y-1 text-sm">
                        <div className="flex justify-between">
                          <span>Payment Amount:</span>
                          <span className="font-medium">
                            {formatCurrency(parseFloat(paymentAmount) || 0)}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span>Processing Fee:</span>
                          <span className="font-medium">$0.00</span>
                        </div>
                        <div className="flex justify-between font-bold text-lg pt-2 border-t border-gray-300">
                          <span>Total Payment:</span>
                          <span className="text-blue-600">
                            {formatCurrency(parseFloat(paymentAmount) || 0)}
                          </span>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="flex items-start space-x-2">
                    <AlertCircle className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-gray-600">
                      Payments are processed securely and may take 1-2 business
                      days to reflect in your account.
                    </p>
                  </div>

                  <button
                    onClick={handlePaymentSubmit}
                    disabled={!paymentAmount || isProcessing}
                    className={`btn btn-secondary btn-make-pay ${
                      !paymentAmount || isProcessing
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-blue-600 hover:bg-blue-700 active:transform active:scale-95"
                    }`}
                  >
                    {isProcessing ? (
                      <div className="flex items-center justify-center space-x-2">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Processing...</span>
                      </div>
                    ) : (
                      "Make Payment"
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div className="container-1">
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
                <h3 className="font-semibold text-gray-800 mb-3">
                  Quick Actions
                </h3>
                <div className="space-y-2">
                  <button className="btn btn-primary btn-quick-actions">
                    Download Payment Receipt
                  </button>
                  <button className="btn btn-primary btn-quick-actions">
                    Set Up Auto-Pay
                  </button>
                  <button className="btn btn-primary btn-quick-actions">
                    View Loan Agreement
                  </button>
                  <button className="btn btn-primary btn-quick-actions">
                    Contact Support
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PayLoan;
