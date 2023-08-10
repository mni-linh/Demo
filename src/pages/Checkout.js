import React, { useEffect, useState } from "react";
import axios from "axios";
import numberWithCommas from "../utils/numberWithCommas";

const Checkout = (props) => {
  const [orders, setOrders] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  let totalPrice = 0;
  useEffect(() => {
    if (localStorage.getItem("cartItems")) {
      setOrders(JSON.parse(localStorage.getItem("cartItems")));
    }
  }, []);
  const checkout = async () => {
    let order = {
      name: firstName + " " + lastName,
      phone: phone,
      address: address,
      email: email,
      order: orders,
      total_money: totalPrice,
      status: "pending",
    };
    if (orders === null || orders.length === 0) {
      alert("Bạn chưa mua hàng !!!")
      window.location.pathname = '/catalog'
    }
    else if (order.name === "" || order.phone === "" || order.address === "" || order.email === "") {
      alert("Vui lòng điền đầy đủ thông tin !!!")
    }
    else {
      await axios.post("http://localhost:8000/order", order);
      setFirstName("")
      setLastName("")
      setEmail("")
      setPhone("")
      setAddress("");
      setOrders([])
      alert("Đặt hàng thành công !!!");
      localStorage.clear();
      window.location.reload()
      window.location.pathname = '/'
    }
  };

  return (
    <div>
      <div className="py-3 bg-Muted link">
        <div className="container">
          <h6
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              fontFamily: '"Lora", serif',
              color: "#243a6f",
              fontSize: "40px",
            }}
          >
            Checkout
          </h6>
        </div>
      </div>

      <div className="py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className="card">
                <div className="card-header">
                  <h4>Billing Information</h4>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group mb-3">
                        <label> First Name </label>
                        <input
                          type="text"
                          value={firstName}
                          onChange={(event) => setFirstName(event.target.value)}
                          name="firstname"
                          className="form-control"
                          style={{
                            border: "1px solid #ced4da",
                            borderRadius: "20px",
                          }}
                        />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-group mb-3">
                        <label> Last Name </label>
                        <input
                          type="text"
                          value={lastName}
                          onChange={(event) => setLastName(event.target.value)}
                          name="lastname"
                          className="form-control"
                          style={{
                            border: "1px solid #ced4da",
                            borderRadius: "20px",
                          }}
                        />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-group mb-3">
                        <label> Phone Number </label>
                        <input
                          type="text"
                          value={phone}
                          onChange={(event) => setPhone(event.target.value)}
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

                    <div className="col-md-6">
                      <div className="form-group mb-3">
                        <label> Email Address </label>
                        <input
                          type="text"
                          value={email}
                          onChange={(event) => setEmail(event.target.value)}
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
                          value={address}
                          onChange={(event) => setAddress(event.target.value)}
                          name="address"
                          row="3"
                          className="form-control"
                          style={{
                            border: "1px solid #ced4da",
                            borderRadius: "20px",
                          }}
                        ></textarea>
                        {/* <input
                          type="text"
                          value={address}
                          onChange={(event) => setAddress(event.target.value)}
                          name="address"
                          style={{
                            border: "1px solid #ced4da",
                            borderRadius: "20px",
                          }}
                          className="form-control"
                        /> */}
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group text-end">
                        <button
                          type="button"
                          onClick={checkout}
                          className="btn btn-primary"
                          style={{
                            backgroundColor: "#243a6f",
                            borderRadius: "10px",
                          }}
                        >
                          Confirm
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <table className="table table-bordered">
                {/* <thead>
                  <tr>
                    <th width="50%"> Product </th>
                    <th> Price </th>
                    <th> Quantity </th>
                    <th> Total </th>
                  </tr>
                </thead> */}
                <div style={{display:'grid', gridTemplateColumns:'160px 90px 80px 100px', gridGap:'10px', backgroundColor:'transparent', padding:'5px'}}>
                  <div style={{textAlign:'center', fontWeight:'500', borderRight:'2px solid black'}}>Product</div>
                  <div style={{textAlign:'center', fontWeight:'500', borderRight:'2px solid black'}}>Price</div>
                  <div style={{textAlign:'center', fontWeight:'500', borderRight:'2px solid black', padding:'0 5px'}}>Quantity</div>
                  <div style={{textAlign:'center', fontWeight:'500'}}>Total</div>
                </div>

                <tbody>
                  {orders.map((item) => {
                    totalPrice += item.price * item.quantity;
                    return (
                      <table>
                        <div style={{display:'grid', gridTemplateColumns:'160px 90px 80px 100px', gridGap:'10px', backgroundColor:'transparent', padding:'5px'}}>
                            <div style={{textAlign:'center', borderBottom:'1px solid gray'}}>{item.title}</div>
                            <div style={{textAlign:'center', borderBottom:'1px solid gray'}}>{numberWithCommas(item.price)}</div>
                            <div style={{textAlign:'center', borderBottom:'1px solid gray'}}>{item.quantity}</div>
                            <div style={{textAlign:'center', borderBottom:'1px solid gray'}}>{numberWithCommas(item.price * item.quantity)}</div>
                        </div>
                        
                        {/* <threat> */}
                          {/* <tr> */}
                            {/* <tr className="cart__item__info"> */}
                              {/* <th>{item.title}</th>
                              <th>{numberWithCommas(item.price)}</th>
                              <th>{item.quantity}</th>
                              <th>{numberWithCommas(item.price * item.quantity)}</th> */}
                              {/* </tr> */}
                            {/* </tr> */}
                        {/* </threat> */}
                      </table>
                      
                    );
                  })}
                  <div style={{padding:'15px'}}>
                    <p><b>Shipping Fee:</b> Free</p>
                  </div>
                  {/*  style={{ display: 'grid', gridTemplateColumns: '251px ​77px 100px', gridGap: '10px', backgroundColor: 'transparent', padding: '5px' }} */}
                  <div style={{display:'grid', gridTemplateColumns:'286px 83px 100px'}}>
                    <p></p>
                    <p style={{ fontWeight: '500' }}>Grand Total:</p>
                    <p>{numberWithCommas(totalPrice)}</p>
                    
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

export default Checkout;
