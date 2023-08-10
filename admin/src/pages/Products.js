import React, { useEffect, useState, Fragment } from "react";
import axios from "axios";

// import { nanoid } from "nanoid";
import ReadOnlyRow from "./ReadOnlyRow";
import "../assets/css/product.css";
//

const Products = () => {
  //
  const [contacts, setContacts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [image01, setImage01] = useState("");
  const [categorySlug, setCategorySlug] = useState("");
  const [colors, setColors] = useState("");
  const [slug, setSlug] = useState("");
  const [size, setSize] = useState("");
  const [description, setDescription] = useState("");

  const handleAddClick = async () => {
    let product = {
      id:
        contacts.reduce(
          (acc, item) => (acc = acc > item.id ? acc : item.id),
          0
        ) + 1,
      title: title,
      price: parseInt(price),
      image01: image01,
      image02: image01,
      categorySlug: categorySlug,
      color: colors.replace(" ", "").split(","),
      slug: slug,
      size: size.split(","),
      description: description,
    };
    await axios.post("http://localhost:8000/products", product);
    alert("Đã thêm thành công !!!");
    window.location.reload();
  };

  const handleDeleteClick = async (contactId) => {
    await axios.delete(`http://localhost:8000/products/${contactId}`);
    alert("Đã xóa thành công !!!");
    setContacts(contacts.filter((contact) => contact.id !== contactId));
  };
  //

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("http://localhost:8000/products");
      setContacts(result.data.data);
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
      <h2 className="page-header">
        Products
      </h2>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card__body">
              <div className="app-container">
                <form>
                  <table>
                    <div className="grid-container">
                      <div></div>
                      <div>Title</div>
                      <div>Image</div>
                      <div>Price</div>
                      <div>Size</div>
                      <div>Color</div>
                      <div>Option</div>
                    </div>
                    <tbody>
                      {contacts.map((contact) => (
                        <Fragment>
                          <ReadOnlyRow
                            contact={contact}
                            handleDeleteClick={handleDeleteClick}
                          />
                        </Fragment>
                      ))}
                    </tbody>
                  </table>
                </form>
                <br />
                <h2 style={{ fontSize: "15px" }}>Add a Product</h2>
                <div style={{ textAlign: "center", padding: "0px 20px" }}>
                  <form
                    style={{
                      textAlign: "center",
                      display: "grid",
                      gridTemplateColumns:
                        "100px 100px 150px 100px 100px 100px 130px 100px 100px",
                      padding: "0px 20px",
                    }}
                  >
                    <input
                      type="text"
                      name="title"
                      onChange={(event) => setTitle(event.target.value)}
                      value={title}
                      required="required"
                      placeholder="Title..."
                      style={{ textAlign: "left", fontStyle: "italic" }}
                    />
                    <input
                      type="text"
                      name="price"
                      onChange={(event) => setPrice(event.target.value)}
                      value={price}
                      required="required"
                      placeholder="Price..."
                      style={{ textAlign: "left", fontStyle: "italic" }}
                    />
                    <input
                      type="text"
                      name="categorySlug"
                      onChange={(event) => setCategorySlug(event.target.value)}
                      value={categorySlug}
                      required="required"
                      placeholder="Category Slug..."
                      style={{ textAlign: "left", fontStyle: "italic" }}
                    />
                    <input
                      type="text"
                      name="slug"
                      onChange={(event) => setSlug(event.target.value)}
                      value={slug}
                      required="required"
                      placeholder="Slug..."
                      style={{ textAlign: "left", fontStyle: "italic" }}
                    />
                    <input
                      type="text"
                      name="size"
                      onChange={(event) => setSize(event.target.value)}
                      value={size}
                      required="required"
                      placeholder="Size..."
                      style={{ textAlign: "left", fontStyle: "italic" }}
                    />
                    <input
                      type="text"
                      name="color"
                      onChange={(event) => setColors(event.target.value)}
                      value={colors}
                      required="required"
                      placeholder="Colors..."
                      style={{ textAlign: "left", fontStyle: "italic" }}
                    />
                    <input
                      type="text"
                      name="image01"
                      onChange={(event) => setImage01(event.target.value)}
                      value={image01}
                      required="required"
                      placeholder="Link image..."
                      style={{ textAlign: "left", fontStyle: "italic" }}
                    />
                    <input
                      type="text"
                      name="description"
                      onChange={(event) => setDescription(event.target.value)}
                      value={description}
                      required="required"
                      placeholder="Description..."
                      style={{ textAlign: "left", fontStyle: "italic" }}
                    />
                    <button
                      type="button"
                      onClick={handleAddClick}
                      className="btn btn-success"
                      style={{
                        textAlign: "center",
                        width: "60px",
                        margin: "0px 80px",
                      }}
                    >
                      Add
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
