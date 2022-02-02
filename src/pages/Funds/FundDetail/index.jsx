import React, { useState } from "react";
import "./fundDetail.scss";
import { Row, Col } from "antd";
import {
  Button,
  LineChart,
  Modal,
  PieChart,
  ReturnsCalculator,
  Table,
} from "../../../components";
import BuyFundsForm from "../BuyFundsForm";

function FundDetail(props) {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (id, employee) => <span>{employee?.user?.firstName ?? "-"}</span>,
    },
    {
      title: "Coin Set Holding %",
      dataIndex: "coinSetHoldingPercent",
      key: "coinSetHoldingPercent",
      render: (coinSetHoldingPercent) => <span>{coinSetHoldingPercent} %</span>,
    },
    {
      title: "24 Hours",
      dataIndex: "last24Hours",
      key: "last24Hours",
      render: (last24Hours) => <span>{last24Hours}%</span>,
    },
    {
      title: "1 Week",
      dataIndex: "last7Days",
      key: "last7Days",
      render: (last7Days) => <span>{last7Days}%</span>,
    },
    {
      title: "1 Month",
      dataIndex: "last30Days",
      key: "last30Days",
      render: (last30Hours) => <span>{last30Hours}%</span>,
    },
    {
      title: "6 Months",
      dataIndex: "last6Months",
      key: "last6Months",
      render: (last6Months) => <span>{last6Months}%</span>,
    },
    {
      title: "12 Months",
      dataIndex: "last12Months",
      key: "last12Months",
      render: (last12Months) => <span>{last12Months}%</span>,
    },
  ];

  const [showBuyFundForm, setShowBuyFundForm] = useState(false);

  const handleShowBuyFunds = () => setShowBuyFundForm(true);

  const handleCloseBuyFunds = () => setShowBuyFundForm(false);

  const data = [];

  return (
    <div className="fund-detail">
      <Row>
        <Col span={13}>
          <h3>Crypto Blue chip</h3>
          <div className="fund-detail__description">
            Top 5 Crypto assets weighed by market cap
          </div>
          <div className="fund-detail__description-detail">
            A coin set composed of the most well recognized and reputed crypto
            tokens, Crypto Blue Chip coin set offers steady, long-term returns
            and is a safer bet in the market as it combines high market cap
            tokens, which are less prone to volatility and have a proven track
            record. The five constituent tokens are Bitcoin(BTC), Ethereum(ETH),
            Binance Coin(BNB), Cardano(ADA) & Solana(SOL), with weights assigned
            as per their market caps to ensure maximum stability.
          </div>
          <div>
            <Button primary onClick={handleShowBuyFunds}>
              Buy funds
            </Button>
          </div>
        </Col>
        <Col span={7} offset={4}>
          <PieChart />
        </Col>
      </Row>
      <div className="fund-detail__basket-performance">
        <h3>Basket performance</h3>
        <LineChart />
      </div>
      <div className="fund-detail__returns-calculator">
        <h3>Returns Calculator</h3>
        <ReturnsCalculator />
      </div>
      <div className="fund-detail__constituents">
        <h3>Fund Constituents</h3>
        <Table columns={columns} data={data} />
      </div>
      <Modal
        width="55%"
        visible={showBuyFundForm}
        onCancel={handleCloseBuyFunds}
      >
        <BuyFundsForm />
      </Modal>
    </div>
  );
}

export default FundDetail;
