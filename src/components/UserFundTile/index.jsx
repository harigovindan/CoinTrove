import React from "react";
import { Row, Col } from "antd";
import "./userFundTile.scss";
import LineChart from "../LineChart";
import Button from "../Button";

function UserFundTile({ isCustomBasket = false, index }) {
  return (
    <div className="user-fund-tile">
      <Row>
        <Col span={14}>
          <h4>
            {" "}
            {isCustomBasket ? "Custom Basket" : "Fund"} #{index + 1}
          </h4>
          <div className="user-fund-tile__details">
            <div className="user-fund-tile__detail">
              <div className="user-fund-tile__label"> Current value</div>
              <div className="user-fund-tile__value"> $1234.34</div>
            </div>
            <div className="user-fund-tile__detail">
              <div className="user-fund-tile__label"> Invested value</div>
              <div className="user-fund-tile__value"> $1000</div>
            </div>
            <div className="user-fund-tile__sell-funds">
              {isCustomBasket ? (
                <Button primary>Publish Basket</Button>
              ) : (
                <Button primary>Sell Funds</Button>
              )}
            </div>
          </div>
        </Col>
        <Col span={8} offset={2}>
          <LineChart />
        </Col>
      </Row>
    </div>
  );
}

export default UserFundTile;
