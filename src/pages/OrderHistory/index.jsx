import React from "react";
import "./orderHistory.scss";
import { Table } from "../../components";

function OrderHistory(props) {
  const columns = [
    {
      title: "Fund Name",
      dataIndex: "name",
      key: "name",
      render: (id, employee) => <span>{employee?.user?.firstName ?? "-"}</span>,
    },
    {
      title: "Order Price (in USDT)",
      dataIndex: "orderPrice",
      key: "orderPrice",
      render: (orderPrice) => <span>{orderPrice}</span>,
    },
    {
      title: "Order ID",
      dataIndex: "orderId",
      key: "orderId",
    },
    {
      title: "Order Type",
      dataIndex: "orderType",
      key: "orderType",
      render: (orderType) => <span>{orderType}</span>,
    },
    {
      title: "Order Time",
      dataIndex: "orderTime",
      key: "orderTime",
      render: (orderTime) => <span>{orderTime}</span>,
    },
  ];

  const data = [];

  return (
    <div className="order-history">
      <h3>Order History</h3>
      <Table columns={columns} data={data} />
    </div>
  );
}

export default OrderHistory;
