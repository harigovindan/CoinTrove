import React from "react";
import "./dashboard.scss";
import InvestmentSummaryCard from "../../components/InvestmentSummaryCard";
import { Row, Col } from "antd";
import { Button, FundTile } from "../../components";
import { generatePath, Link } from "react-router-dom";
import { AppRoutes } from "../../routes";

function Dashboard() {
  return (
    <div className="dashboard">
      <InvestmentSummaryCard />
      <div className="dashboard__trending-baskets">
        <h3>Trending Baskets</h3>
        <Row gutter={[40, 30]}>
          {[...Array(12)].map((x, i) => (
            <Col span={8} key={i}>
              <Link
                to={generatePath(AppRoutes.FUND_DETAIL, {
                  fundId: i + 1,
                })}
              >
                <FundTile id={i} />
              </Link>
            </Col>
          ))}
        </Row>
        <div className="dashboard__explore">
          <Link to={AppRoutes.FUNDS}>
            <Button primary> Explore</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
