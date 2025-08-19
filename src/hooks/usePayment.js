import { useState } from "react";

export const usePayment = () => {
  const [paymentAmount, setPaymentAmount] = useState("");
  const [paymentType, setPaymentType] = useState("loan");
  const [paymentMethod, setPaymentMethod] = useState("credit-card");
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [accountNumber, setAccountNumber] = useState("");

  const paymentTypes = {
    loan: { label: "Loan Payment", fee: 0.0 },
    mortgage: { label: "Mortgage Payment", fee: 0.0 },
    savings: { label: "Savings Payment", fee: 0.0 }, 
    other: { label: "Other Payment", fee: 2.99 },
  };

  const handlePaymentSubmit = async () => {
    if (!paymentAmount || !accountNumber) return;
    
    setIsProcessing(true);
    
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      
      setPaymentSuccess(true);
      
      setTimeout(() => setPaymentSuccess(false), 3000);
    } catch (error) {
      console.error("Payment failed:", error);
    } finally {
      setIsProcessing(false);
    }
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

  return {
    paymentAmount,
    setPaymentAmount,
    paymentType,
    setPaymentType,
    paymentMethod,
    setPaymentMethod,
    isProcessing,
    paymentSuccess,
    accountNumber,
    setAccountNumber,
    paymentTypes,
    handlePaymentSubmit,
    formatCurrency,
    getProcessingFee,
    getTotalAmount,
  };
};