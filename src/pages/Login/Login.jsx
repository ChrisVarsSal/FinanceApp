import "./Login.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  return (
    <div className="login-container">
      <form className="login-form">
        <h1>FinanceApp</h1>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>

        <div className="form-group form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Remember me
          </label>
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          onClick={() => navigate("/menu")}
        >
          Sign In
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => navigate("/account")}
        >
          Create Account
        </button>
      </form>
    </div>
  );
}

export default Login;
