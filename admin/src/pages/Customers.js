import React, { useEffect, useState } from "react";

import Table from "../components/table/Table";

import axios from "axios";

const formatter = new Intl.NumberFormat("vi-VI", {
    style: "currency",
    currency: "VND",
});

const customerTableHead = [
  "",
  "name",
  "email",
  "phone",
  "total orders",
  "total spend",
];

const renderHead = (item, index) => <th key={index}>{item}</th>;

const renderBody = (item, index) => (
  <tr key={index}>
    <td>{index+1}</td>
    <td>{item.name}</td>
    <td>{item.email}</td>
    <td>{item.phone}</td>
    <td>{item.order_quantity}</td>
    <td>{formatter.format(item.total_money)}</td>
  </tr>
);

const Customers = () => {
  const [customers, setCustomers] = useState([]);
  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("http://localhost:8000/customers");
      setCustomers(result.data.data);
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
      <h2 className="page-header">customers</h2>
      {console.log(customers)}
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card__body">
              <Table
                limit="10"
                headData={customerTableHead}
                renderHead={(item, index) => renderHead(item, index)}
                bodyData={customers}
                renderBody={(item, index) => renderBody(item, index)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;
