import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Login from "./pages/Login/Login";
import NewAccount from "./pages/Account/NewAccount";
import Menu from "./pages/Menu/Menu";
import NewLoan from "./pages/NewLoan/NewLoan";
import Loans from "./pages/Loans/Loan";
import LoanInfo from "./pages/LoanInfo/LoanInfo";
import PayLoan from "./pages/PayLoan/PayLoan";

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
          <Route path="/dashboard" element={<Menu />} />
          <Route path="/new-loan" element={<NewLoan />} />
          <Route path="/loan-info" element={<LoanInfo />} />
          <Route path="/pay-loan" element={<PayLoan />} />
          <Route path="/savings" element={<Menu />} />
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
