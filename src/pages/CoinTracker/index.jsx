import React from "react";
import "./coinTracker.scss";
import { AutoComplete, LineChart, Table } from "../../components";

function CoinTracker(props) {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (name, employee) => <span>{name}</span>,
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (price) => <span>${price}</span>,
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
      title: "Market Cap",
      dataIndex: "marketCap",
      key: "marketCap",
      render: (marketCap) => <span>${marketCap}</span>,
    },
    {
      title: "Volume(24h)",
      dataIndex: "volume",
      key: "volume",
      render: (volume) => <span>${volume}</span>,
    },
    {
      title: "Circulating Supply",
      dataIndex: "circulatingSupply",
      key: "circulatingSupply",
      render: (circulatingSupply) => <span>${circulatingSupply}</span>,
    },
    {
      title: "Last 7 days",
      dataIndex: "last7Days",
      key: "last7Days",
      render: (last7Days, record) => (
        <span>
          <LineChart
            animationDuration={0}
            showLegend={false}
            showXAxisLabels={false}
            showYAxisLabels={false}
            showYAxisGrid={false}
            lineTension={0}
            borderColor={"#DC1700"}
            backgroundColor={"#FFFFFF"}
            data={[
              55, 49, 70, 71, 63, 70, 76, 55, 49, 70, 71, 63, 55, 49, 70, 71,
              63, 70, 76, 55, 49, 70, 71, 63,
            ]}
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
        </span>
      ),
      width: 200,
    },
  ];

  const coins = [
    {
      id: 1,
      name: "BTC",
      price: 1000,
      last24Hours: 6.8,
      last7Days: -7.74,
      marketCap: 816847324059,
      volume: 816847324059,
      circulatingSupply: 816847324059,
    },
    {
      id: 2,
      name: "BTC",
      price: 1000,
      last24Hours: 6.8,
      last7Days: -7.74,
      marketCap: 816847324059,
      volume: 816847324059,
      circulatingSupply: 816847324059,
    },
  ];

  return (
    <div className="coin-tracker">
      <h3>Coin Tracker</h3>
      <div className="coin-tracker__search">
        <AutoComplete
          options={[]}
          placeholder="Search by coin name"
          onSearch={(searchValue) => {
            console.log(searchValue);
          }}
        />
      </div>
      <div className="mt-5">
        <Table columns={columns} dataSource={coins} />
      </div>
    </div>
  );
}

export default CoinTracker;
