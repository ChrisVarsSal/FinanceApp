import "./Document.css";

function Document() {
  const downloadDocument = (docName) => {
    const link = document.createElement("a");
    link.href = `/documents_pdf/${docName}.pdf`;
    link.download = docName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="container-general">
      <h1>Documents</h1>
      <div className="documents-list">
        <button
          className="btn btn-primary"
          onClick={() => downloadDocument("FinanceApp_Privacy_Policy.pdf")}
        >
          Privacy Policy
        </button>
        <button
          className="btn btn-primary"
          onClick={() => downloadDocument("FinanceApp_Terms_&_Conditions.pdf")}
        >
          Terms & Conditions
        </button>
        <button
          className="btn btn-primary"
          onClick={() => downloadDocument("FinanceApp_User_Agreement.pdf")}
        >
          User Agreement
        </button>
        <button
          className="btn btn-primary"
          onClick={() => downloadDocument("FinanceApp_Cookie_Policy.pdf")}
        >
          Cookie Policy
        </button>
        <button
          className="btn btn-primary"
          onClick={() => downloadDocument("FinanceApp_Loan_&_Credit_Terms.pdf")}
        >
          Loan & Credit Terms Templates
        </button>
        <button
          className="btn btn-primary"
          onClick={() =>
            downloadDocument("FinanceApp_Customer_Support_Manual.pdf")
          }
        >
          Customer Support Manual
        </button>
      </div>
    </div>
  );
}

export default Document;
