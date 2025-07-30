import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Login from "./pages/Login/Login";
import NewAccount from "./pages/Account/NewAccount";
import Menu from "./pages/Menu/Menu";
import NewLoan from "./pages/NewLoan/NewLoan";
import Loans from "./pages/Loans/Loan";
import LoanInfo from "./pages/LoanInfo/LoanInfo";
import Savings from "./pages/Savings/Savings";
import Dashboard from "./pages/Dashboard/Dashboard";
import NewSaving from "./pages/NewSaving/NewSaving";
import SavingsInfo from "./pages/SavingsInfo/SavingsInfo";
import PayCenter from "./pages/PaymentCenter/PaymentCenter";

function App() {
  const location = useLocation();
  const hideNavbarOnPaths = ["/", "/account"];
  const shouldShowNavbar = !hideNavbarOnPaths.includes(location.pathname);

  return (
    <>
      {shouldShowNavbar && <Navbar />}
      <div className="container">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/account" element={<NewAccount />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/new-loan" element={<NewLoan />} />
          <Route path="/loan-info" element={<LoanInfo />} />
          <Route path="/payment-center" element={<PayCenter />} />
          <Route path="/savings" element={<Savings />} />
          <Route path="/savings-info" element={<SavingsInfo />} />
          <Route path="/new-saving" element={<NewSaving />} />
          <Route path="/loans" element={<Loans />} />
          <Route path="/documents" element={<Menu />} />
          <Route path="/profile" element={<Menu />} />
          <Route path="/settings" element={<Menu />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
