import React, { useState, useEffect } from "react";
import axios from "axios";

const AddProductDetail = (props) => {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const id = props.match.params.id;

  const editProduct = async () => {
    await axios.put(`http://localhost:8000/products/${id}`, product);
    alert("Đã sửa thành công !!!");
    window.location.reload();
    window.location.pathname = "/products";
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`http://localhost:8000/products/${id}`);
      setProduct(result.data.data);
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
      <div className="py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className="card">
                <div className="card-header">
                  <h4>More product details</h4>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group mb-3">
                        <label> Title </label>
                        <input
                          type="text"
                          name="title"
                          value={product.title}
                          onChange={(event) => {
                            setProduct({
                              ...product,
                              title: event.target.value,
                            });
                          }}
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
                        <label> Category Slug </label>
                        <input
                          type="text"
                          name="categorySlug"
                          value={product.categorySlug}
                          onChange={(event) => {
                            setProduct({
                              ...product,
                              categorySlug: event.target.value,
                            });
                          }}
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
                        <label> Color </label>
                        <input
                          type="text"
                          name="color"
                          value={product.color}
                          onChange={(event) => {
                            setProduct({
                              ...product,
                              color: event.target.value
                                .replace(" ", "")
                                .split(","),
                            });
                          }}
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
                        <label> Size </label>
                        <input
                          type="text"
                          name="size"
                          value={product.size}
                          onChange={(event) => {
                            setProduct({
                              ...product,
                              size: event.target.value
                                .replace(" ", "")
                                .split(","),
                            });
                          }}
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
                        <label> Slug </label>
                        <input
                          type="text"
                          name="slug"
                          value={product.slug}
                          onChange={(event) => {
                            setProduct({
                              ...product,
                              slug: event.target.value,
                            });
                          }}
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
                        <label> Price </label>
                        <input
                          type="text"
                          name="price"
                          value={product.price}
                          onChange={(event) => {
                            setProduct({
                              ...product,
                              price: event.target.value,
                            });
                          }}
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
                        <label> Image </label>
                        <input
                          type="text"
                          name="image"
                          value={product.image01}
                          onChange={(event) => {
                            setProduct({
                              ...product,
                              image01: event.target.value,
                              image02: event.target.value,
                            });
                          }}
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
                        <label> Description </label>
                        <textarea
                          type="text"
                          name="description"
                          value={product.description}
                          onChange={(event) => {
                            setProduct({
                              ...product,
                              description: event.target.value,
                            });
                          }}
                          className="form-control"
                          style={{
                            border: "1px solid #ced4da",
                            borderRadius: "20px",
                          }}
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group text-end">
                        <button
                          type="button"
                          onClick={editProduct}
                          className="btn btn-primary"
                          style={{
                            backgroundColor: "#243a6f",
                            borderRadius: "10px",
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

            <div className="col-md-5">
              <table className="table">
                <div className="card">
                  <div className="app">
                    <div>
                      <div className="result">
                        <center>
                          <h5>Image</h5>
                        </center>
                        <img
                          className="img-product-preview"
                          src={product.image01}
                          alt={product.title}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <thead></thead>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProductDetail;
