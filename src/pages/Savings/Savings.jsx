import "./Savings.css";
import { useNavigate } from "react-router-dom";

function Savings() {
  const navigate = useNavigate();
    /*const handleView = (id) => {
        navigate(`/saving/${id}`);
    };*/
  return (
    <div className="container-general">
      <h1>Your Savings</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Description</th>
            <th scope="col">Amount</th>
            <th scope="col">Interest Rate (%)</th>
            <th scope="col">Requested Date</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="col">1</th>
            <td>Emergency Fund</td>
            <td>10000</td>
            <td>5.0</td>
            <td>2025-01-12</td>
            <td>
              <button className="btn btn-view" onClick={() => navigate("/savings-info")}>View</button>
            </td>
          </tr>
          <tr>
            <th scope="col">1</th>
            <td>Emergency Fund</td>
            <td>10000</td>
            <td>5.0</td>
            <td>2025-01-12</td>
            <td>
              <button className="btn btn-view">View</button>
            </td>
          </tr>
          <tr>
            <th scope="col">1</th>
            <td>Emergency Fund</td>
            <td>10000</td>
            <td>5.0</td>
            <td>2025-01-12</td>
            <td>
              <button className="btn btn-view">View</button>
            </td>
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
          onClick={() => navigate("/new-saving")}
        >
          New Saving Fund
        </button>
      </div>
    </div>
  );
}

export default Savings;
