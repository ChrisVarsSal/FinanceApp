import "./Loan.css";
import { useNavigate } from "react-router-dom";

function Loans() {
  const navigate = useNavigate();
  /*const handleView = (id) => {
    navigate(`/loan/${id}`);
  };*/
  return (
    <div className="loan-container">
      <h1>Your Loans</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Loan Id</th>
            <th scope="col">Amount</th>
            <th scope="col">Term (months)</th>
            <th scope="col">Interest Rate (%)</th>
            <th scope="col">Status</th>
            <th scope="col">Requested Date</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>500000</td>
            <td>24</td>
            <td>7.5</td>
            <td>Approved</td>
            <td>2025-01-12</td>
            <td>
              <button className="btn btn-view" onClick={() => navigate("/loan-info")}>
                View
              </button>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>@fat</td>
            <td>@fat</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
            <td>@twitter</td>
            <td>@twitter</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
      <div className="pagination">
        <button className="btn btn-secondary btn-prev">Previous</button>
        <button className="btn btn-secondary btn-next">Next</button>
      </div>
      <div>
        <button
          className="btn btn-primary "
          onClick={() => navigate("/new-loan")}
        >
          New Loan
        </button>
      </div>
    </div>
  );
}

export default Loans;
