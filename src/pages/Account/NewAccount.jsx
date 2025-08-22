import "./NewAccount.css";
import { useSubmit } from "../../hooks/useSubmit";
import { useNavigate } from "react-router-dom";

function NewAccount() {
  const navigate = useNavigate();
  const { handleSubmit } = useSubmit();
  return (
    <div className="container-general">
      <div className="account-container">
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="inputEmail4">Email</label>
              <input
                type="email"
                className="form-control"
                id="inputEmail4"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="inputUsername4">Username</label>
              <input
                type="text"
                className="form-control"
                id="inputUsername4"
                placeholder="Choose a username"
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="inputPassword4">Password</label>
              <input
                type="password"
                className="form-control"
                id="inputPassword4"
                placeholder="Create a password"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="inputConfirmPassword4">Confirm Password</label>
              <input
                type="password"
                className="form-control"
                id="inputConfirmPassword4"
                placeholder="Confirm your password"
                required
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
            <label htmlFor="inputAddress2">Address 2 (Optional)</label>
            <input
              type="text"
              className="form-control"
              id="inputAddress2"
              placeholder="Apartment, studio, or floor"
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="inputCity">City</label>
              <input
                type="text"
                className="form-control"
                id="inputCity"
                placeholder="Enter your city"
              />
            </div>
            <div className="form-group">
              <label htmlFor="inputState">State</label>
              <select id="inputState" className="form-control">
                <option value="">Choose...</option>
                <option value="CA">California</option>
                <option value="NY">New York</option>
                <option value="TX">Texas</option>
                <option value="FL">Florida</option>
                <option value="IL">Illinois</option>
                <option value="PA">Pennsylvania</option>
                <option value="OH">Ohio</option>
                <option value="GA">Georgia</option>
                <option value="NC">North Carolina</option>
                <option value="MI">Michigan</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="inputZip">Zip Code</label>
              <input
                type="text"
                className="form-control"
                id="inputZip"
                placeholder="12345"
                pattern="[0-9]{5}"
              />
            </div>
          </div>

          <div className="form-group">
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="agreeTerms"
                required
              />
              <label className="form-check-label" htmlFor="agreeTerms">
                I agree to the Terms and Conditions and Privacy Policy
              </label>
            </div>
          </div>
          <div className="button-container">
            <button type="submit" className="btn btn-primary">
              Create Account
            </button>
            <button
              className="btn btn-secondary btn-cancel"
              onClick={() => navigate("/login")}
            >
              Back
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewAccount;
