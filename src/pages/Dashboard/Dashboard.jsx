import { useState } from "react";
import {
  TrendingUp,
  TrendingDown,
  DollarSign,
  Target,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";
import "./Dashboard.css";

function Dashboard() {
  const [totalBalance] = useState(45250.8);
  const [monthlyIncome] = useState(8500.0);
  const [monthlyExpenses] = useState(5200.3);
  const [savingsGoal] = useState(75);

  const recentTransactions = [
    {
      id: 1,
      description: "Salary Deposit",
      amount: 8500.0,
      type: "income",
      date: "2025-01-20",
    },
    {
      id: 2,
      description: "Grocery Store",
      amount: -120.5,
      type: "expense",
      date: "2025-01-19",
    },
    {
      id: 3,
      description: "Electric Bill",
      amount: -85.3,
      type: "expense",
      date: "2025-01-18",
    },
    {
      id: 4,
      description: "Freelance Payment",
      amount: 750.0,
      type: "income",
      date: "2025-01-17",
    },
    {
      id: 5,
      description: "Netflix Subscription",
      amount: -15.99,
      type: "expense",
      date: "2025-01-16",
    },
  ];

  const expenses = [
    { category: "Housing", amount: 2200, color: "#ff6b6b" },
    { category: "Food", amount: 850, color: "#4ecdc4" },
    { category: "Transportation", amount: 450, color: "#45b7d1" },
    { category: "Entertainment", amount: 320, color: "#96ceb4" },
    { category: "Utilities", amount: 280, color: "#feca57" },
    { category: "Others", amount: 1100, color: "#ff9ff3" },
  ];

  return (
    <div className="container-general">
      <div className="dashboard-container">
        <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 p-6">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold text-white mb-6">Dashboard</h1>
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="container-1">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-green-500/20 rounded-xl">
                      <DollarSign className="w-6 h-6 text-green-400" />
                    </div>
                    <TrendingUp className="w-5 h-5 text-green-400 group-hover:scale-110 transition-transform" />
                  </div>
                  <p className="text-gray-300 text-sm mb-1">Total Balance</p>
                  <p className="text-2xl font-bold text-white">
                    ${totalBalance.toLocaleString()}
                  </p>
                  <p className="text-green-400 text-xs mt-2">
                    +12.5% from last month
                  </p>
                </div>
              </div>
              <div className="container-1">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-blue-500/20 rounded-xl">
                      <ArrowUpRight className="w-6 h-6 text-blue-400" />
                    </div>
                    <TrendingUp className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform" />
                  </div>
                  <p className="text-gray-300 text-sm mb-1">Monthly Income</p>
                  <p className="text-2xl font-bold text-white">
                    ${monthlyIncome.toLocaleString()}
                  </p>
                  <p className="text-blue-400 text-xs mt-2">
                    +5.2% from last month
                  </p>
                </div>
              </div>

              <div className="container-1">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-red-500/20 rounded-xl">
                      <ArrowDownRight className="w-6 h-6 text-red-400" />
                    </div>
                    <TrendingDown className="w-5 h-5 text-red-400 group-hover:scale-110 transition-transform" />
                  </div>
                  <p className="text-gray-300 text-sm mb-1">Monthly Expenses</p>
                  <p className="text-2xl font-bold text-white">
                    ${monthlyExpenses.toLocaleString()}
                  </p>
                  <p className="text-red-400 text-xs mt-2">
                    -2.1% from last month
                  </p>
                </div>
              </div>
              <div className="container-1">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-purple-500/20 rounded-xl">
                      <Target className="w-6 h-6 text-purple-400" />
                    </div>
                    <span className="text-purple-400 text-xs font-medium">
                      {savingsGoal}%
                    </span>
                  </div>
                  <p className="text-gray-300 text-sm mb-1">Savings Goal</p>
                  <div className="w-full bg-white/10 rounded-full h-3 mb-2">
                    <div
                      className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full transition-all duration-500"
                      style={{ width: `${savingsGoal}%` }}
                    ></div>
                  </div>
                  <p className="text-purple-400 text-xs">$18,750 of $25,000</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="container-1">
                {/* Recent Transactions */}
                <div className="lg:col-span-2 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-semibold text-white">
                      Recent Transactions
                    </h3>
                    <button className="btn btn-secondary btn-view-all">
                      View All
                    </button>
                  </div>
                  <div className="space-y-4">
                    {recentTransactions.map((transaction) => (
                      <div
                        key={transaction.id}
                        className="flex items-center justify-between p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-200"
                      >
                        <div className="flex items-center space-x-4">
                          <div
                            className={`p-2 rounded-lg ${
                              transaction.type === "income"
                                ? "bg-green-500/20"
                                : "bg-red-500/20"
                            }`}
                          >
                            {transaction.type === "income" ? (
                              <ArrowUpRight className="w-4 h-4 text-green-400" />
                            ) : (
                              <ArrowDownRight className="w-4 h-4 text-red-400" />
                            )}
                          </div>
                          <div>
                            <p className="text-white font-medium">
                              {transaction.description}
                            </p>
                            <p className="text-gray-400 text-sm">
                              {transaction.date}
                            </p>
                          </div>
                        </div>
                        <span
                          className={`font-semibold ${
                            transaction.type === "income"
                              ? "text-green-400"
                              : "text-red-400"
                          }`}
                        >
                          {transaction.type === "income" ? "+" : ""}$
                          {Math.abs(transaction.amount).toLocaleString()}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="container-1">
                {/* Expense Breakdown */}
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <h3 className="text-xl font-semibold text-white mb-6">
                    Expense Breakdown
                  </h3>
                  <div className="space-y-4">
                    {expenses.map((expense, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between"
                      >
                        <div className="flex items-center space-x-3">
                          <div
                            className="w-4 h-4 rounded-full"
                            style={{ backgroundColor: expense.color }}
                          ></div>
                          <span className="text-gray-300 text-sm">
                            {expense.category}
                          </span>
                        </div>
                        <span className="text-white font-medium">
                          $ {expense.amount}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 pt-4 border-t border-white/10">
                    <div className="flex justify-between">
                      <span className="text-gray-300">Total Expenses</span>
                      <span className="text-white font-semibold">
                        $
                        {expenses
                          .reduce((sum, exp) => sum + exp.amount, 0)
                          .toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
