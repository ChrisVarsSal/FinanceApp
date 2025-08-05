import { useState } from "react";
import "./PaymentCenter.css";

function PaymentCenter() {
  const [paymentAmount, setPaymentAmount] = useState("");
  const [paymentType, setPaymentType] = useState("loan");
  const [paymentMethod, setPaymentMethod] = useState("credit-card");
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [accountNumber, setAccountNumber] = useState("");

  const paymentTypes = {
    loan: { label: "Loan Payment", fee: 0.0 },
    mortgage: { label: "Savings Payment", fee: 0.0 },
    other: { label: "Other Payment", fee: 2.99 },
  };

  const handlePaymentSubmit = async () => {
    if (!paymentAmount || !accountNumber) return;
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

  const getProcessingFee = () => {
    return paymentTypes[paymentType]?.fee || 0;
  };

  const getTotalAmount = () => {
    const amount = parseFloat(paymentAmount) || 0;
    const fee = getProcessingFee();
    return amount + fee;
  };

  return (
    <div className="container-general">
      <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 p-5">
        <div className="max-w-6xl mx-auto p-6 bg-gray-50 rounded-lg shadow-md">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
              Payment Center
            </h1>
            <p className="text-gray-600">
              Securely pay your bills and manage payments
            </p>
          </div>

          {paymentSuccess && (
            <div className="mb-6 bg-green-50 border border-green-200 rounded-lg p-4 flex items-center justify-center space-x-3 max-w-md mx-auto">
              <span className="text-2xl text-green-600">✓</span>
              <div className="text-center">
                <h3 className="font-semibold text-green-800">
                  Payment Successful!
                </h3>
                <p className="text-green-700">
                  Your {paymentTypes[paymentType].label.toLowerCase()} payment
                  has been processed successfully.
                </p>
              </div>
            </div>
          )}

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Main Payment Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
                <div className="flex items-center justify-center mb-6">
                  <span className="text-2xl text-blue-600 mr-2">💳</span>
                  <h2 className="text-2xl font-semibold text-gray-800">
                    Make a Payment
                  </h2>
                </div>

                {/* Payment Type */}
                <div className="container-1">
                  <div className="w-full max-w-md mx-auto mt-6">
                    <h3 className="font-semibold text-gray-800 mb-3 text-center">
                      Payment Type
                    </h3>
                    <select
                      value={paymentType}
                      onChange={(e) => setPaymentType(e.target.value)}
                      className="w-full bg-white text-gray-800 border-2 border-gray-300 rounded-lg px-4 py-4 text-center text-lg focus:border-blue-500 focus:outline-none transition-colors"
                    >
                      {Object.entries(paymentTypes).map(([key, type]) => (
                        <option key={key} value={key}>
                          {type.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Account/Reference Number */}
                <div className="container-1">
                  <div className="w-full max-w-md mx-auto mt-6">
                    <h3 className="font-semibold text-gray-800 mb-3 text-center">
                      Account/Reference Number
                    </h3>
                    <input
                      type="text"
                      value={accountNumber}
                      onChange={(e) => setAccountNumber(e.target.value)}
                      placeholder="Enter account number"
                      className="w-full bg-white text-gray-800 border-2 border-gray-300 rounded-lg px-4 py-4 text-center text-lg focus:border-blue-500 focus:outline-none transition-colors"
                      required
                    />
                  </div>
                </div>

                {/* Payment Amount */}
                <div className="container-1">
                  <div className="w-full max-w-md mx-auto mt-6">
                    <h3 className="font-semibold text-gray-800 mb-3 text-center">
                      Payment Amount
                    </h3>
                    <div className="relative">
                      <input
                        type="number"
                        value={paymentAmount}
                        onChange={(e) => setPaymentAmount(e.target.value)}
                        placeholder="$0.00"
                        className="w-full bg-white text-gray-800 border-2 border-gray-300 rounded-lg px-4 py-4 text-center text-xl font-medium focus:border-blue-500 focus:outline-none transition-colors"
                        required
                        min="0"
                        step="0.01"
                      />
                    </div>
                    <div className="mt-4 flex justify-center gap-3 flex-wrap">
                      <button
                        type="button"
                        onClick={() => setPaymentAmount("50")}
                        className="px-6 py-3 bg-gray-100 border border-gray-300 rounded-lg text-base font-medium text-gray-700 hover:bg-gray-200 transition-colors"
                      >
                        $50
                      </button>
                      <button
                        type="button"
                        onClick={() => setPaymentAmount("100")}
                        className="px-6 py-3 bg-gray-100 border border-gray-300 rounded-lg text-base font-medium text-gray-700 hover:bg-gray-200 transition-colors"
                      >
                        $100
                      </button>
                      <button
                        type="button"
                        onClick={() => setPaymentAmount("250")}
                        className="px-6 py-3 bg-gray-100 border border-gray-300 rounded-lg text-base font-medium text-gray-700 hover:bg-gray-200 transition-colors"
                      >
                        $250
                      </button>
                    </div>
                  </div>
                </div>

                {/* Payment Method */}
                <div className="container-1">
                  <div className="w-full max-w-md mx-auto mt-6">
                    <h3 className="font-semibold text-gray-800 mb-3 text-center">
                      Payment Method
                    </h3>
                    <select
                      value={paymentMethod}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="w-full bg-white text-gray-800 border-2 border-gray-300 rounded-lg px-4 py-4 text-center text-lg focus:border-blue-500 focus:outline-none transition-colors"
                    >
                      <option value="credit-card">Credit Card</option>
                      <option value="debit-card">Debit Card</option>
                      <option value="bank-transfer">Bank Transfer</option>
                      <option value="paypal">PayPal</option>
                      <option value="apple-pay">Apple Pay</option>
                      <option value="google-pay">Google Pay</option>
                    </select>
                  </div>
                </div>

                {/* Payment Info */}
                <div className="container-1">
                  <div className="w-full max-w-md mx-auto mt-6">
                    <h3 className="font-semibold text-gray-800 mb-3 text-center">
                      Payment Information
                    </h3>
                    {paymentMethod === "credit-card" ||
                    paymentMethod === "debit-card" ? (
                      <div className="space-y-4">
                        <input
                          type="text"
                          placeholder="Card Number"
                          className="w-full bg-white text-gray-800 border-2 border-gray-300 rounded-lg px-4 py-4 text-center text-lg focus:border-blue-500 focus:outline-none transition-colors"
                        />
                        <div className="grid grid-cols-2 gap-4">
                          <input
                            type="text"
                            placeholder="MM/YY"
                            className="w-full bg-white text-gray-800 border-2 border-gray-300 rounded-lg px-4 py-4 text-center text-lg focus:border-blue-500 focus:outline-none transition-colors"
                          />
                          <input
                            type="text"
                            placeholder="CVV"
                            className="w-full bg-white text-gray-800 border-2 border-gray-300 rounded-lg px-4 py-4 text-center text-lg focus:border-blue-500 focus:outline-none transition-colors"
                          />
                        </div>
                        <input
                          type="text"
                          placeholder="Name on Card"
                          className="w-full bg-white text-gray-800 border-2 border-gray-300 rounded-lg px-4 py-4 text-center text-lg focus:border-blue-500 focus:outline-none transition-colors"
                        />
                      </div>
                    ) : paymentMethod === "bank-transfer" ? (
                      <div className="space-y-4">
                        <input
                          type="text"
                          placeholder="Bank Name"
                          className="w-full bg-white text-gray-800 border-2 border-gray-300 rounded-lg px-4 py-4 text-center text-lg focus:border-blue-500 focus:outline-none transition-colors"
                        />
                        <input
                          type="text"
                          placeholder="Routing Number"
                          className="w-full bg-white text-gray-800 border-2 border-gray-300 rounded-lg px-4 py-4 text-center text-lg focus:border-blue-500 focus:outline-none transition-colors"
                        />
                        <input
                          type="text"
                          placeholder="Account Number"
                          className="w-full bg-white text-gray-800 border-2 border-gray-300 rounded-lg px-4 py-4 text-center text-lg focus:border-blue-500 focus:outline-none transition-colors"
                        />
                      </div>
                    ) : paymentMethod === "paypal" ? (
                      <input
                        type="email"
                        placeholder="PayPal Email"
                        className="w-full bg-white text-gray-800 border-2 border-gray-300 rounded-lg px-4 py-4 text-center text-lg focus:border-blue-500 focus:outline-none transition-colors"
                      />
                    ) : paymentMethod === "apple-pay" ||
                      paymentMethod === "google-pay" ? (
                      <input
                        type="email"
                        placeholder="Apple/Google Pay Account Email"
                        className="w-full bg-white text-gray-800 border-2 border-gray-300 rounded-lg px-4 py-4 text-center text-lg focus:border-blue-500 focus:outline-none transition-colors"
                      />
                    ) : null}
                  </div>
                </div>

                {/* Payment Summary */}
                <div className="continer-1">
                  {paymentAmount && (
                    <div className="w-full max-w-md mx-auto mt-6">
                      <h3 className="font-semibold text-gray-800 mb-3 text-center">
                        Payment Summary
                      </h3>
                      <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span>Payment Type:</span>
                            <span className="font-medium">
                              {paymentTypes[paymentType].label}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span>Payment Amount:</span>
                            <span className="font-medium">
                              {formatCurrency(parseFloat(paymentAmount) || 0)}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span>Processing Fee:</span>
                            <span className="font-medium">
                              {formatCurrency(getProcessingFee())}
                            </span>
                          </div>
                          <div className="flex justify-between font-bold text-lg pt-2 border-t border-gray-300">
                            <span>Total Payment:</span>
                            <span className="text-blue-600">
                              {formatCurrency(getTotalAmount())}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Security Notice */}
                <div className="w-full max-w-md mx-auto mt-6 text-center">
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-amber-500 text-lg">⚠️</span>
                    <p className="text-sm text-gray-600">
                      Payments are processed securely with 256-bit SSL
                      encryption. Processing times may vary by payment type and
                      method.
                    </p>
                  </div>
                </div>

                {/* Payment Button */}
                <div className="flex justify-center mt-8">
                  <button
                    onClick={handlePaymentSubmit}
                    disabled={!paymentAmount || !accountNumber || isProcessing}
                    className={`w-full max-w-md px-6 py-4 text-white font-bold rounded-lg transition-colors ${
                      !paymentAmount || !accountNumber || isProcessing
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-blue-600 hover:bg-blue-700"
                    }`}
                  >
                    {isProcessing ? (
                      <div className="flex items-center justify-center space-x-2">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Processing Payment...</span>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center space-x-2">
                        <span className="text-xl">💲</span>
                        <span>
                          Process Payment - {formatCurrency(getTotalAmount())}
                        </span>
                      </div>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Sidebar */}
              <div className="space-y-6">
                {/* Quick Actions */}
                <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
                  <h3 className="font-semibold text-gray-800 mb-4 flex items-center justify-center">
                    <span className="text-blue-600 mr-2">⚙️</span>
                    Quick Actions
                  </h3>
                  <div className="space-y-3">
                    <button className="btn btn-primary w-full flex items-center justify-start px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 transition-colors">
                      <span className="mr-3">📥</span>
                      <span className="text-sm font-medium">
                        Download Receipt
                      </span>
                    </button>
                    <button className="btn btn-primary w-full flex items-center justify-start px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 transition-colors">
                      <span className="mr-3">🔄</span>
                      <span className="text-sm font-medium">
                        Set Up Auto-Pay
                      </span>
                    </button>
                    <button className="btn btn-primary w-full flex items-center justify-start px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 transition-colors">
                      <span className="mr-3">📄</span>
                      <span className="text-sm font-medium">
                        Payment History
                      </span>
                    </button>
                    <button className="btn btn-primary w-full flex items-center justify-start px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 transition-colors">
                      <span className="mr-3">📞</span>
                      <span className="text-sm font-medium">
                        Contact Support
                      </span>
                    </button>
                  </div>
                </div>

                {/* Payment Tips */}
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                  <h3 className="font-semibold text-blue-800 mb-3 text-center">
                    💡 Payment Tips
                  </h3>
                  <ul className="space-y-2 text-sm text-blue-700">
                    <li>• Pay before due dates to avoid late fees</li>
                    <li>• Set up auto-pay for recurring payments</li>
                    <li>• Keep payment confirmations for your records</li>
                    <li>• Contact us if you need payment assistance</li>
                  </ul>
                </div>

                {/* Security Badge */}
                <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                  <h3 className="font-semibold text-green-800 mb-2 text-center flex items-center justify-center">
                    <span className="mr-2">🔒</span>
                    Secure Payments
                  </h3>
                  <p className="text-sm text-green-700 text-center">
                    Your payments are protected with bank-level security and
                    encryption.
                  </p>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentCenter;
