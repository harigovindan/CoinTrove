import React, { useState } from "react";
import "./fundList.scss";
import { AutoComplete, FundTile } from "../../../components";
import { SearchOutlined } from "@ant-design/icons";
import { TimePeriod } from "../../../constants";
import ButtonGroup from "../../../components/ButtonGroup";
import { Col, Row } from "antd";
import { generatePath, Link } from "react-router-dom";
import { AppRoutes } from "../../../routes";

function FundList(props) {
  const [activeCategoryId, setActiveCategoryId] = useState("Crypto");

  return (
    <div className="fund-list">
      <h3>All Funds</h3>
      <div className="fund-list__search">
        <AutoComplete
          options={[]}
          placeholder="Search by product name"
          onSearch={(searchValue) => {
            console.log(searchValue);
          }}
        />
      </div>
      <div className="fund-list__categories">
        <ButtonGroup
          onChange={(value) => {
            setActiveCategoryId(value);
          }}
          activeValue={activeCategoryId}
          options={[
            { label: "Crypto", value: "Crypto" },
            { label: "New cryptos", value: "New cryptos" },
            { label: "Metaverse", value: "Metaverse" },
            { label: "NFT", value: "NFT" },
            { label: "Play2Earn", value: "Play2Earn" },
            { label: "DeFi", value: "DeFi" },
            { label: "All", value: "All" },
          ]}
        />
      </div>
      <div className="fund-list__fund-items">
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
      </div>
    </div>
  );
}

export default FundList;
