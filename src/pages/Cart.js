import React, { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";

import Helmet from "../components/Helmet";
import CartItem from "../components/CartItem";
import Button from "../components/Button";

import numberWithCommas from "../utils/numberWithCommas";

const Cart = () => {
  //
  const cartItems = useSelector((state) => state.cartItems.value);
  //
  const [cartProducts, setCartProducts] = useState([]);

  const [totalProducts, setTotalProducts] = useState(0);
  //
  const [totalPrice, setTotalPrice] = useState(0);
  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("http://localhost:8000/products");
      const getProductBySlug = (slug) => result.data.data.find((e) => e.slug === slug);
      const getCartItemsInfo = (cartItems) => {
        let res = [];
        if (cartItems.length > 0) {
          cartItems.forEach((e) => {
            let product = getProductBySlug(e.slug);
            res.push({
              ...e,
              product: product,
            });
          });
        }
        return res.sort((a, b) => (a.id > b.id ? 1 : a.id < b.id ? -1 : 0));
      };
      setCartProducts(getCartItemsInfo(cartItems));
      setIsLoading(false);
    };

    fetchData();

    setTotalPrice(
      cartItems.reduce(
        (total, item) => total + Number(item.quantity) * Number(item.price),
        0
      )
    );
    setTotalProducts(
      cartItems.reduce((total, item) => total + Number(item.quantity), 0)
    );
  }, [cartItems]);

  return isloading ? (
    <div className="loader">
      <p className="loader__text"></p>
    </div>
  ) : (
    <Helmet title="Cart">
      <div className="cart">
        <div className="cart__info">
          <div className="cart__info__txt">
            <p>You have {totalProducts} products in your shopping cart</p>
            <div className="cart__info__txt__price">
              <span>Into money: </span>{" "}
              <span>{numberWithCommas(Number(totalPrice))}</span>
            </div>
          </div>
          <div className="cart__info__btn">
            <Link to="/checkout">
              <Button size="block">Order</Button>
            </Link>
            <br />
            <br />
            <Link to="/catalog">
              <Button size="block">Continue shopping</Button>
            </Link>
          </div>
        </div>
        <div className="cart__list">
          {cartProducts.map((item, index) => (
            <CartItem item={item} key={index} />
          ))}
        </div>
      </div>
    </Helmet>
  );
};

export default Cart;
