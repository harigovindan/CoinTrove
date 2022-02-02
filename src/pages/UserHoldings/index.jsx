import React from "react";
import "./userHoldings.scss";
import InvestmentSummaryCard from "../../components/InvestmentSummaryCard";
import { UserFundTile } from "../../components";

function UserHoldings(props) {
  return (
    <div className="user-holdings">
      <h3>Holdings Summary</h3>
      <InvestmentSummaryCard showTitle={false} />
      <div className="user-holdings__holding-items">
        <h3>My Holdings</h3>
        {[...Array(5)].map((x, i) => (
          <UserFundTile key={i} index={i} />
        ))}
      </div>
    </div>
  );
}

export default UserHoldings;
