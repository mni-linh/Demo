import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import Chart from "react-apexcharts";

import { useSelector } from "react-redux";

import StatusCard from "../components/status-card/StatusCard";

import Table from "../components/table/Table";

import Badge from "../components/badge/Badge";

import axios from "axios";

import moment from "moment";

const formatter = new Intl.NumberFormat("vi-VI", {
  style: "currency",
  currency: "vnd",
});

const format_price= (price) => {
    let price_format = (price/1000000).toString() + "Tr"
    
    return price_format
}

// Biểu đồ thông kê
const chartOptions = {
  series: [
    {
      name: "Online Customers",
      data: [40, 70, 20, 90, 36, 80, 30, 91, 60],
    },
    {
      name: "Store Customers",
      data: [40, 30, 70, 80, 40, 16, 40, 20, 51, 10],
    },
  ],
  options: {
    color: ["#6ab04c", "#2980b9"],
    chart: {
      background: "transparent",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
      ],
    },
    legend: {
      position: "top",
    },
    grid: {
      show: false,
    },
  },
};

const renderCusomerHead = (item, index) => <th key={index}>{item}</th>;

const renderCusomerBody = (item, index) => (
  <tr key={index}>
    <td>{item.name}</td>
    <td>{item.order_quantity}</td>
    <td>{formatter.format(item.total_money)}</td>
  </tr>
);

// Tình trạng đơn hàng
const orderStatus = {
  shipping: "primary",
  pending: "warning",
  paid: "success",
  refund: "danger",
};

const renderOrderHead = (item, index) => <th key={index}>{item}</th>;

const renderOrderBody = (item, index) => (
  <tr key={index}>
    <td>{item.id}</td>
    <td>{item.name}</td>
    <td>{moment(item.date).format("DD/MM/YYYY")}</td>
    <td>{formatter.format(item.total_money)}</td>
    <td>
      <Badge type={orderStatus[item.status]} content={item.status} />
    </td>
  </tr>
);

const Dashboard = () => {
  const themeReducer = useSelector((state) => state.ThemeReducer.mode);

  // Đơn hàng gần nhất
  const [latestOrders, setLastOrder] = useState({});

  // Top Khách hàng mua nhiều nhất
  const [topCustomers, setTopCustomers] = useState({});

  const [isloading, setIsLoading] = useState(true);

  const [statusCards, setStatusCards] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const customer_list = await axios("http://localhost:8000/customers");
      const order_list = await axios("http://localhost:8000/order");
      let count_total_order = 0;
      let count_total_customer = 0;
      let count_total_sale = 0;
      let count_total_income = 0;

      setTopCustomers({
        head: ["user", "total orders", "total spending"],
        body: customer_list.data.data.sort(
          (a, b) => b.total_money - a.total_money
        ),
      });
      setLastOrder({
        header: ["order id", "user", "date", "total price", "status"],
        body: order_list.data.data.sort(
          (a, b) =>
            Date.parse(b.date.slice(0, 10)) - Date.parse(a.date.slice(0, 10))
        ),
      });

      count_total_order = order_list.data.data.length;
      count_total_customer = customer_list.data.data.length;
      customer_list.data.data.forEach(item => count_total_income += item.total_money)
      order_list.data.data.forEach(order => order.order.forEach(item => count_total_sale += item.quantity))

      setStatusCards([
        {
          icon: "bx bx-shopping-bag",
          count: count_total_sale,
          title: "Total sales",
        },
        {
          icon: "bx bx-user",
          count: count_total_customer,
          title: "Total customers",
        },
        {
          icon: "bx bx-dollar-circle",
          count: format_price(count_total_income),
          title: "Total income",
        },
        {
          icon: "bx bx-receipt",
          count: count_total_order,
          title: "Total orders",
        },
      ]);

      setIsLoading(false);
    };

    fetchData();
  }, []);

  return isloading ? (
    <div className="loader">
      <p className="loader__text">Loading...</p>
    </div>
  ) : (
    <div>
      <h2 className="page-header">Dashboard</h2>
      <div className="row">
        {/* Thống kê con số */}
        <div className="col-6">
          <div className="row">
            {statusCards.map((item, index) => (
              <div className="col-6" key={index}>
                <StatusCard
                  icon={item.icon}
                  count={item.count}
                  title={item.title}
                />
              </div>
            ))}
          </div>
        </div>
        {/* Thống kê dạng */}
        <div className="col-6">
          <div className="card full-height">
            {/* chart */}
            <Chart
              options={
                themeReducer === "theme-mode-dark"
                  ? {
                      ...chartOptions.options,
                      theme: { mode: "dark" },
                    }
                  : {
                      ...chartOptions.options,
                      theme: { mode: "light" },
                    }
              }
              series={chartOptions.series}
              type="line"
              height="100%"
            />
          </div>
        </div>
        {/* Top khách hàng mua nhiều nhất */}
        <div className="col-4">
          <div className="card">
            <div className="card__header">
              <h3>top customers</h3>
            </div>
            <div className="card__body">
              <Table
                headData={topCustomers.head}
                renderHead={(item, index) => renderCusomerHead(item, index)}
                bodyData={topCustomers.body}
                renderBody={(item, index) => renderCusomerBody(item, index)}
              />
            </div>
            <div className="card__footer">
              <Link to="/customers">view all</Link>
            </div>
          </div>
        </div>
        {/* Đơn hàng gần đây */}
        <div className="col-8">
          <div className="card">
            <div className="card__header">
              <h3>latest orders</h3>
            </div>
            <div className="card__body">
              <Table
                headData={latestOrders.header}
                renderHead={(item, index) => renderOrderHead(item, index)}
                bodyData={latestOrders.body}
                renderBody={(item, index) => renderOrderBody(item, index)}
              />
            </div>
            <div className="card__footer">
              <Link to="/orders">view all</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
