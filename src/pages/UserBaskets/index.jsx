import React, { useState } from "react";
import { Row, Col } from "antd";
import "./userBaskets.scss";
import { Button, Modal, UserFundTile } from "../../components";
import UserBasketForm from "./UserBasketForm";

function UserBaskets(props) {
  const [showUserBasketForm, setShowUserBasketForm] = useState(false);

  const handleToggleUserBasketForm = () =>
    setShowUserBasketForm(!showUserBasketForm);

  return (
    <div className="user-baskets">
      <Row align="middle">
        <Col span={12}>
          <h3>My Baskets</h3>
        </Col>
        <Col span={12} className="text-right">
          <Button primary onClick={handleToggleUserBasketForm}>
            Add new Basket
          </Button>
        </Col>
      </Row>
      <div className="user-baskets__basket-list">
        {[...Array(5)].map((x, i) => (
          <UserFundTile key={i} index={i} isCustomBasket />
        ))}
        <Modal
          width="55%"
          visible={showUserBasketForm}
          onCancel={handleToggleUserBasketForm}
        >
          <UserBasketForm />
        </Modal>
      </div>
    </div>
  );
}

export default UserBaskets;
