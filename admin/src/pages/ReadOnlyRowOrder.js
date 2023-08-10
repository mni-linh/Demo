import React from "react";
import moment from 'moment'
import { Link } from "react-router-dom";
import "../assets/css/product.css";

const ReadOnlyRowOrder = ({order, handleDeleteClick }) => {
  return (
    <tr
      style={{
        display: "grid",
        gridTemplateColumns: "245px 115px 130px 130px 250px 160px",
        gridGap: "10px",
        padding: "10px",
        width: "99%",
      }}
    >
      <td>{order.name}</td>
      <td>{moment(order.date).format('DD/MM/YYYY')}</td>
      <td>{order.status}</td>
      <td>{order.phone}</td>
      <td>{order.address.substr(0, 25) + '...'}</td>
      <td style={{ textAlign: "left", padding: "5px" }}>
        <Link to={"/edit-order/" + order.id}>
          <button type="button" className="btn btn-secondary">
            View
          </button>
        </Link>
        &nbsp;
        <button
          type="button"
          onClick={() => handleDeleteClick(order.id)}
          className="btn btn-danger"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRowOrder;
