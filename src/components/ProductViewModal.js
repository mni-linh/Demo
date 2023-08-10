import React, { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";

import ProductView from "./ProductView";

import Button from "./Button";

import { remove } from "../redux/product-modal/productModalSlice";

import axios from "axios";

const ProductViewModal = () => {
  const productSlug = useSelector((state) => state.productModal.value);
  const dispatch = useDispatch();

  const [product, setproduct] = useState(undefined);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("http://localhost:8000/products");
      setproduct(
        result.data.data.find((product) => product.slug === productSlug)
      );
      setIsLoading(false);
    };
    fetchData();
  }, [productSlug]);

  return isLoading ? (
    <div className="loader">
      <p className="loader__text"></p>
    </div>
  ) : (
    <div
      className={`product-view__modal ${product === undefined ? "" : "active"}`}
    >
      <div className="product-view__modal__content">
        <ProductView product={product} />
        <div className="product-view__modal__content__close">
          <Button size="sm" onClick={() => dispatch(remove())}>
            X
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductViewModal;
