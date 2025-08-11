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
        <h1 style={{ fontSize: '2rem', fontWeight: '600', color: '#f8fafc', marginBottom: '2rem', textAlign: 'center' }}>
          Dashboard
        </h1>
        
        {/* Stats Cards */}
        <div className="stats-grid">
          <div className="container-1">
            <div className="stat-card">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                <DollarSign style={{ width: '24px', height: '24px', color: '#4ade80', marginRight: '8px' }} />
                <TrendingUp style={{ width: '20px', height: '20px', color: '#4ade80' }} />
              </div>
              <p className="stat-title">Total Balance</p>
              <p className="stat-value">${totalBalance.toLocaleString()}</p>
              <p style={{ color: '#4ade80', fontSize: '0.75rem', marginTop: '0.5rem' }}>
                +12.5% from last month
              </p>
            </div>
          </div>

          <div className="container-1">
            <div className="stat-card">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                <ArrowUpRight style={{ width: '24px', height: '24px', color: '#38bdf8', marginRight: '8px' }} />
                <TrendingUp style={{ width: '20px', height: '20px', color: '#38bdf8' }} />
              </div>
              <p className="stat-title">Monthly Income</p>
              <p className="stat-value">${monthlyIncome.toLocaleString()}</p>
              <p style={{ color: '#38bdf8', fontSize: '0.75rem', marginTop: '0.5rem' }}>
                +5.2% from last month
              </p>
            </div>
          </div>

          <div className="container-1">
            <div className="stat-card">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                <ArrowDownRight style={{ width: '24px', height: '24px', color: '#f87171', marginRight: '8px' }} />
                <TrendingDown style={{ width: '20px', height: '20px', color: '#f87171' }} />
              </div>
              <p className="stat-title">Monthly Expenses</p>
              <p className="stat-value">${monthlyExpenses.toLocaleString()}</p>
              <p style={{ color: '#f87171', fontSize: '0.75rem', marginTop: '0.5rem' }}>
                -2.1% from last month
              </p>
            </div>
          </div>

          <div className="container-1">
            <div className="stat-card">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                <Target style={{ width: '24px', height: '24px', color: '#a855f7', marginRight: '8px' }} />
                <span style={{ color: '#a855f7', fontSize: '0.75rem', fontWeight: '500' }}>
                  {savingsGoal}%
                </span>
              </div>
              <p className="stat-title">Savings Goal</p>
              <div style={{ 
                width: '100%', 
                backgroundColor: '#334155', 
                borderRadius: '9999px', 
                height: '12px', 
                marginBottom: '0.5rem' 
              }}>
                <div
                  style={{
                    background: 'linear-gradient(to right, #a855f7, #ec4899)',
                    height: '12px',
                    borderRadius: '9999px',
                    width: `${savingsGoal}%`,
                    transition: 'width 0.5s ease'
                  }}
                ></div>
              </div>
              <p style={{ color: '#a855f7', fontSize: '0.75rem' }}>$18,750 of $25,000</p>
            </div>
          </div>
        </div>

        <div className="main-content">
          {/* Recent Transactions */}
          <div className="container-1">
            <div className="card">
              <div className="transactions-header">
                <h3 className="transactions-title">Recent Transactions</h3>
                <button className="btn-view-all">View All</button>
              </div>
              <div>
                {recentTransactions.map((transaction) => (
                  <div key={transaction.id} className="transaction-item">
                    <div className="transaction-left">
                      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.25rem' }}>
                        {transaction.type === "income" ? (
                          <ArrowUpRight style={{ width: '16px', height: '16px', color: '#4ade80', marginRight: '8px' }} />
                        ) : (
                          <ArrowDownRight style={{ width: '16px', height: '16px', color: '#f87171', marginRight: '8px' }} />
                        )}
                        <p className="transaction-description">{transaction.description}</p>
                      </div>
                      <p className="transaction-date">{transaction.date}</p>
                    </div>
                    <span className={`transaction-amount ${transaction.type}`}>
                      {transaction.type === "income" ? "+" : ""}$
                      {Math.abs(transaction.amount).toLocaleString()}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Expense Breakdown */}
          <div className="container-1">
            <div className="card">
              <h3 className="expenses-title">Expense Breakdown</h3>
              <div>
                {expenses.map((expense, index) => (
                  <div key={index} className="expense-item">
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <div
                        style={{
                          width: '16px',
                          height: '16px',
                          borderRadius: '50%',
                          backgroundColor: expense.color,
                          marginRight: '12px'
                        }}
                      ></div>
                      <span className="expense-category">{expense.category}</span>
                    </div>
                    <span className="expense-amount">
                      ${expense.amount.toLocaleString()}
                    </span>
                  </div>
                ))}
              </div>
              <div style={{ 
                marginTop: '1.5rem', 
                paddingTop: '1rem', 
                borderTop: '1px solid #334155' 
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: '#94a3b8' }}>Total Expenses</span>
                  <span style={{ color: '#f8fafc', fontWeight: '600' }}>
                    ${expenses.reduce((sum, exp) => sum + exp.amount, 0).toLocaleString()}
                  </span>
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