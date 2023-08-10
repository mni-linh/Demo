import React, {useEffect, useState} from 'react'
import axios from 'axios';

const formatter = new Intl.NumberFormat("vi-VI", {
  style: "currency",
  currency: "VND",
});

const AddOrderDetail = (props) => {
  const [orders, setOrders] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const id = props.match.params.id;

  const updateStatus = async () => {
    await axios.put(`http://localhost:8000/order/${id}?status=${orders.status}`);
    alert(`Đã cập nhật trạng thái đơn hàng của ${orders.name} !!!`);
    window.location.reload();
    window.location.pathname = "/orders";
  }

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`http://localhost:8000/order/${id}`);
      setOrders(result.data.data);
      setIsLoading(false);
    };
    fetchData();
  }, [id]);
  

  return isLoading ? (
    <div className="loader">
      <p className="loader__text">Loading...</p>
    </div>
  ) : (
    <div>
      <div className="py-3 bg-Muted link">
        <div className="container">
        </div>
      </div>

      <div className="py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="card">
                <div className="card-header">
                  <h4>Order information</h4>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group mb-3">
                        <label> Full Name </label>
                        <input
                          type="text"
                          value={orders.name}
                          readOnly
                          name="fullName"
                          className="form-control"
                          style={{
                            border: "1px solid #ced4da",
                            borderRadius: "20px",
                          }}
                        />
                      </div>
                    </div>

                    <div className="col-md-12">
                      <div className="form-group mb-3">
                        <label> Phone Number </label>
                        <input
                          type="text"
                          value={orders.phone}
                          readOnly
                          name="phone"
                          className="form-control"
                          style={{
                            border: "1px solid #ced4da",
                            borderRadius: "20px",
                          }}
                          pattern="[0-9]{4}[0-9]{3}[0-9]{3}"
                        />
                      </div>
                    </div>

                    <div className="col-md-12">
                      <div className="form-group mb-3">
                        <label> Email Address </label>
                        <input
                          type="text"
                          value={orders.email}
                          readOnly
                          name="email"
                          className="form-control"
                          style={{
                            border: "1px solid #ced4da",
                            borderRadius: "20px",
                          }}
                          pattern="[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}"
                        />
                      </div>
                    </div>

                    <div className="col-md-12">
                      <div className="form-group mb-3">
                        <label> Full Address </label>
                        <textarea
                          type="text"
                          value={orders.address}
                          readOnly
                          name="address"
                          row="3"
                          className="form-control"
                          style={{
                            border: "1px solid #ced4da",
                            borderRadius: "20px",
                          }}
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group mb-3">
                        <label> Status </label>
                        <select
                            className="form-control form-control"
                            style={{
                                border: "1px solid #ced4da",
                                borderRadius: "20px",
                                color:'gray'
                            }}
                            value={orders.status}
                            onChange={(event) => {
                              setOrders({
                                ...orders,
                                status: event.target.value,
                              });
                            }}
                        >
                            <option value="shipping">Shipping</option>
                            <option value="paid">Paid</option>
                            <option value="pending">Pending</option>
                            <option value="refund">Refund</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group text-end" style={{margin:'auto', padding:'30px 0px 30px 75px'}}>
                        <button
                          type="button"
                          className="btn btn-primary"
                          onClick={updateStatus}
                          style={{
                            backgroundColor: "#243a6f",
                              borderRadius: "10px",
                              margin: 'auto',
                          }}
                        >
                          Update
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <table className="table table-bordered">
                <div style={{display:'grid', gridTemplateColumns:'250px 90px 90px 90px 90px', gridGap:'10px', backgroundColor:'transparent', padding:'5px', borderBottom:'1px solid black'}}>
                  <div style={{textAlign:'center', fontWeight:'500', borderRight:'2px solid black'}}>Product</div>
                  <div style={{textAlign:'center', fontWeight:'500', borderRight:'2px solid black'}}>Price</div>
                  <div style={{textAlign:'center', fontWeight:'500', borderRight:'2px solid black'}}>Size</div>
                  <div style={{textAlign:'center', fontWeight:'500', borderRight:'2px solid black'}}>Color</div>
                  <div style={{textAlign:'center', fontWeight:'500'}}>Quantity</div>
                </div>

                <tbody>
                  {orders.order.map((item) => {
                    return (
                      <table>
                        <div style={{display:'grid', gridTemplateColumns:'250px 90px 90px 90px 90px', gridGap:'10px', backgroundColor:'transparent', padding:'5px'}}>
                            <div style={{textAlign:'center', borderBottom:'1px solid gray'}}>{item.title}</div>
                            <div style={{textAlign:'center', borderBottom:'1px solid gray'}}>{formatter.format(item.price)}</div>
                            <div style={{textAlign:'center', borderBottom:'1px solid gray'}}>{item.size}</div>
                            <div style={{textAlign:'center', borderBottom:'1px solid gray'}}>{item.color}</div>
                            <div style={{textAlign:'center', borderBottom:'1px solid gray'}}>{item.quantity}</div>
                        </div>
                      </table>
                      
                    );
                  })}
                  <div style={{padding:'15px'}}>
                    <p><b>Shipping Fee:</b> Free</p>
                  </div>
                  <div style={{display:'grid', gridTemplateColumns:'417px 100px 144px'}}>
                    <p></p>
                    <p style={{ fontWeight: '500' }}>Grand Total:</p>
                    <p>{formatter.format(orders.total_money)}</p>
                    
                  </div>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddOrderDetail
