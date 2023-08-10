import React, { useEffect, useState, Fragment } from "react";
import axios from "axios";
import ReadOnlyRowOrder from "./ReadOnlyRowOrder";
import "../assets/css/order.css";


const Orders = () => {

  const handleDeleteClick = async (id) => {
    await axios.delete(`http://localhost:8000/order/${id}`);
    alert("Đã xóa thành công !!!");
    setOrders(orders.filter(order => order.id !== id))    
  };

  const [isLoading, setIsLoading] = useState(true);
  const [orders, setOrders] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("http://localhost:8000/order");
      setOrders(result.data.data)
      setIsLoading(false);
    };

    fetchData();
  }, []);
  return isLoading ? (
    <div className="loader">
      <p className="loader__text">Loading...</p>
    </div>
  ) : (
    <div>
      <h2 className="page-header">Order</h2>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card__body">
              <div className="app-container">
                <form>
                  <table>
                    <div className="grid-container">
                      <div></div>
                      <div>Customer</div>
                      <div>Date</div>
                      <div>Status</div>
                      <div>Phone</div>
                      <div>Address</div>
                      <div>Option</div>
                    </div>
                    <tbody>
                      {orders.map((order) => (
                        <Fragment>
                          <ReadOnlyRowOrder
                            order={order}
                            handleDeleteClick={handleDeleteClick}
                          />
                        </Fragment>
                      ))}
                    </tbody>
                  </table>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
