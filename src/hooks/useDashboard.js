import { useState } from "react";

export function useDashboard() {
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
  return {
    totalBalance,
    monthlyIncome,
    monthlyExpenses,
    savingsGoal,
    recentTransactions,
    expenses,
  };
}
