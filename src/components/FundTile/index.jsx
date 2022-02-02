import React from "react";
import "./fundTile.scss";
import { CaretUpOutlined } from "@ant-design/icons";
import LineChart from "../LineChart";

function FundTile({ id }) {
  return (
    <div className="fund-tile">
      <h5 className="fund-tile__title">Crypto Blue chip</h5>
      <div className="fund-tile__description">
        Top 5 Crypto assets weighed by market cap
      </div>
      <div className="fund-tile__detail">
        <div className="fund-tile__label">Monthly Fee: </div>
        <div className="fund-tile__value">1%</div>
      </div>
      <div className="fund-tile__detail">
        <div className="fund-tile__label">Investors: </div>
        <div className="fund-tile__value">1708</div>
      </div>
      <div className="fund-tile__detail">
        <div className="fund-tile__label">AUM: </div>
        <div className="fund-tile__value">$123,433</div>
      </div>
      <div className="fund-tile__detail">
        <div className="fund-tile__label">Min: </div>
        <div className="fund-tile__value">10USDT</div>
      </div>
      <div className="fund-tile__detail">
        <div className="fund-title__returns">
          <div
            className={`fund-tile__return-value ${
              id % 2 === 0 ? "increase" : "decrease"
            }`}
          >
            <CaretUpOutlined /> 590%
          </div>
          <div className="fund-tile__return-label">1Y Returns</div>
        </div>
      </div>
      <div className="fund-tile__detail fund-tile__line-chart">
        <LineChart
          showLegend={false}
          showXAxisLabels={false}
          showYAxisLabels={false}
          showYAxisGrid={false}
          lineTension={0}
          borderColor={id % 2 === 0 ? "#2CA01C" : "#DC1700"}
          backgroundColor={id % 2 === 0 ? "#2CA01C50" : "#DC170050"}
          data={[55, 49, 70, 71, 63, 70, 76, 55, 49, 70, 71, 63]}
          labels={[
            "Jan'21",
            "Feb'21",
            "Mar'21",
            "Apr'21",
            "May'21",
            "Jun'21",
            "Jul'21",
            "Aug'21",
            "Sep'21",
            "Oct'21",
            "Nov'21",
            "Dec'21",
          ]}
        />
      </div>
    </div>
  );
}

export default FundTile;
