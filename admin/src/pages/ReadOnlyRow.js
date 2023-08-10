import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/product.css";

const formatter = new Intl.NumberFormat("vi-VI", {
  style: "currency",
  currency: "VND",
});

const ReadOnlyRow = ({ contact, handleDeleteClick }) => {
  return (
    <tr
      style={{
        display: "grid",
        gridTemplateColumns: "190px 170px 100px 150px 255px 160px",
        gridGap: "10px",
        padding: "10px",
        width: "99%",
      }}
    >
      {/* <td style={{textAlign:'center'}}>{contact.id}</td> */}
      <td>{contact.title}</td>
      <img className="img-product" src={contact.image01} alt={contact.title} />
      <td>{formatter.format(contact.price)}</td>
      <td>
        {contact.size.map((size) => (
          <span>({size})</span>
        ))}
      </td>
      <td>
        {contact.colors.map((color) => (
          <span>({color})</span>
        ))}
      </td>
      <td style={{ textAlign: "left", padding: "5px" }}>
        <Link to={"/edit-product/" + contact.id}>
          <button type="button" className="btn btn-secondary">
            View
          </button>
        </Link>
        &nbsp;
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => handleDeleteClick(contact.id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
