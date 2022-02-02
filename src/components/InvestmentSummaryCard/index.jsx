import React from "react";
import "./investmentSummaryCard.scss";
import Card from "../Card";
import { Col, Row } from "antd";
import LineChart from "../LineChart";

function InvestmentSummaryCard({ showTitle = true }) {
  return (
    <div className="investment-summary-card">
      <Card>
        <Row>
          <Col span={14}>
            {showTitle && <h3>Investment Summary</h3>}
            <div className="investment-summary-card__details">
              <Row gutter={[20, 0]}>
                <Col span={8}>
                  <div className="investment-summary-card__item">
                    <div className="investment-summary-card__label">
                      Current value
                    </div>
                    <div className="investment-summary-card__value">
                      $123.23
                    </div>
                  </div>
                </Col>
                <Col span={8}>
                  <div className="investment-summary-card__item">
                    <div className="investment-summary-card__label">
                      Invested value
                    </div>
                    <div className="investment-summary-card__value">
                      $123.23
                    </div>
                  </div>
                </Col>
                <Col span={8}>
                  <div className="investment-summary-card__item">
                    <div className="investment-summary-card__label">
                      Balance
                    </div>
                    <div className="investment-summary-card__value">
                      $123.23
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
          <Col span={10}>
            <LineChart />
          </Col>
        </Row>
      </Card>
    </div>
  );
}

export default InvestmentSummaryCard;
