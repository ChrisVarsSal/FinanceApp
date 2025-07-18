import "./NewAccount.css";
import { useNavigate } from "react-router-dom";

function NewAccount() {
  const navigate = useNavigate();
  return (
    <div className="new-account-container">
      <form>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputEmail4">Email</label>
            <input type="email" className="form-control" id="inputEmail4" />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputUsername4">Username</label>
            <input type="text" className="form-control" id="inputUsername4" />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputPassword4">Password</label>
            <input
              type="password"
              className="form-control"
              id="inputPassword4"
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputConfirmPassword4">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              id="inputConfirmPassword4"
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="inputAddress">Address</label>
          <input
            type="text"
            className="form-control"
            id="inputAddress"
            placeholder="1234 Main St"
          />
        </div>
        <div className="form-group">
          <label htmlFor="inputAddress2">Address 2</label>
          <input
            type="text"
            className="form-control"
            id="inputAddress2"
            placeholder="Apartment, studio, or floor"
          />
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputCity">City</label>
            <input type="text" className="form-control" id="inputCity" />
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="inputState">State</label>
            <select id="inputState" className="form-control">
              <option defaultValue>Choose...</option>
              <option>...</option>
            </select>
          </div>
          <div className="form-group col-md-2">
            <label htmlFor="inputZip">Zip Code</label>
            <input type="text" className="form-control" id="inputZip" />
          </div>
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={() => navigate("/")}
        >
          Create Account
        </button>
      </form>
    </div>
  );
}

export default NewAccount;
