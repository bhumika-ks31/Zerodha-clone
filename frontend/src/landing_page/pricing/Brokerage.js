import React, { useState } from "react";

function PricingTabs() {
  const [activeTab, setActiveTab] = useState("equity");

  const renderTable = () => {
    const subHeadingClass = "fw-bold small"; // slightly smaller bold text
    const alignLeft = "text-start";

    switch (activeTab) {
      case "equity":
        return (
          <table className="table table-bordered text-center">
            <thead className="table-light">
              <tr>
                <th>Segment</th>
                <th>Equity Delivery</th>
                <th>Equity Intraday</th>
                <th>F&O - Futures</th>
                <th>F&O - Options</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={subHeadingClass}>Brokerage</td>
                <td>₹0</td>
                <td>0.03% or ₹20/executed order</td>
                <td>0.03% or ₹20/executed order</td>
                <td>Flat ₹20 per executed order</td>
              </tr>
              <tr>
                <td className={subHeadingClass}>STT/CTT</td>
                <td>0.1% on buy & sell</td>
                <td>0.025% on the sell side</td>
                <td>0.01% on the sell side</td>
                <td>0.125% of intrinsic value (exercised), 0.05% on sell side</td>
              </tr>
              <tr>
                <td className={subHeadingClass}>Transaction Charges</td>
                <td>NSE: 0.00345%, BSE: 0.00375%</td>
                <td>NSE: 0.00345%, BSE: 0.00375%</td>
                <td>NSE: 0.0019%</td>
                <td>NSE: 0.05% (premium)</td>
              </tr>
              <tr>
                <td className={subHeadingClass}>GST</td>
                <td colSpan="4" className={alignLeft}>
                  18% on (brokerage + SEBI charges + transaction charges)
                </td>
              </tr>
              <tr>
                <td className={subHeadingClass}>SEBI Charges</td>
                <td colSpan="4" className={alignLeft}>₹10 / crore</td>
              </tr>
              <tr>
                <td className={subHeadingClass}>Stamp Charges</td>
                <td>0.015% or ₹1500 / crore on buy side</td>
                <td>0.003% or ₹300 / crore</td>
                <td>0.002% or ₹200 / crore</td>
                <td>0.003% or ₹300 / crore</td>
              </tr>
            </tbody>
          </table>
        );

      case "currency":
        return (
          <table className="table table-bordered text-center">
            <thead className="table-light">
              <tr>
                <th>Segment</th>
                <th>Currency Futures</th>
                <th>Currency Options</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={subHeadingClass}>Brokerage</td>
                <td>0.03% or ₹20/executed order</td>
                <td>₹20/executed order</td>
              </tr>
              <tr>
                <td className={subHeadingClass}>STT/CTT</td>
                <td>No STT</td>
                <td>No STT</td>
              </tr>
              <tr>
                <td className={subHeadingClass}>Transaction Charges</td>
                <td>NSE: 0.00035%, BSE: 0.00045%</td>
                <td>NSE: 0.0311%, BSE: 0.001%</td>
              </tr>
              <tr>
                <td className={subHeadingClass}>GST</td>
                <td colSpan="2" className={alignLeft}>
                  18% on (brokerage + SEBI charges + transaction charges)
                </td>
              </tr>
              <tr>
                <td className={subHeadingClass}>SEBI Charges</td>
                <td colSpan="2" className={alignLeft}>₹10 / crore</td>
              </tr>
              <tr>
                <td className={subHeadingClass}>Stamp Charges</td>
                <td>0.0001% or ₹10 / crore on buy side</td>
                <td>0.0001% or ₹10 / crore on buy side</td>
              </tr>
            </tbody>
          </table>
        );

      case "commodity":
        return (
          <table className="table table-bordered text-center">
            <thead className="table-light">
              <tr>
                <th>Segment</th>
                <th>Commodity Futures</th>
                <th>Commodity Options</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={subHeadingClass}>Brokerage</td>
                <td>0.03% or ₹20/executed order</td>
                <td>₹20/executed order</td>
              </tr>
              <tr>
                <td className={subHeadingClass}>STT/CTT</td>
                <td>0.01% on sell side (Non-Agri)</td>
                <td>0.05% on sell side</td>
              </tr>
              <tr>
                <td className={subHeadingClass}>Transaction Charges</td>
                <td>MCX: 0.0021%, NSE: 0.0001%</td>
                <td>MCX: 0.0418%, NSE: 0.001%</td>
              </tr>
              <tr>
                <td className={subHeadingClass}>GST</td>
                <td colSpan="2" className={alignLeft}>
                  18% on (brokerage + SEBI charges + transaction charges)
                </td>
              </tr>
              <tr>
                <td className={subHeadingClass}>SEBI Charges</td>
                <td className={alignLeft}>
                  Agri: ₹1 / crore, Non-Agri: ₹10 / crore
                </td>
                <td className={alignLeft}>₹10 / crore</td>
              </tr>
              <tr>
                <td className={subHeadingClass}>Stamp Charges</td>
                <td>0.002% or ₹200 / crore on buy side</td>
                <td>0.003% or ₹300 / crore on buy side</td>
              </tr>
            </tbody>
          </table>
        );

      default:
        return null;
    }
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Brokerage Charges</h2>

      {/* Tab Navigation */}
      <ul className="nav nav-tabs justify-content-center mb-4">
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "equity" ? "active" : ""}`}
            onClick={() => setActiveTab("equity")}
          >
            Equity
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "currency" ? "active" : ""}`}
            onClick={() => setActiveTab("currency")}
          >
            Currency
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "commodity" ? "active" : ""}`}
            onClick={() => setActiveTab("commodity")}
          >
            Commodity
          </button>
        </li>
      </ul>

      {/* Table Output */}
      <div className="table-responsive">{renderTable()}</div>
    </div>
  );
}

export default PricingTabs;
