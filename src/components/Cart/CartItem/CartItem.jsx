import React from "react";
import "./CartItem.scss";
import { MdClose } from "react-icons/md";
import prodImg from "../../../assets/products/headphone-prod-1.webp";

const CartItem = () => {
  return (
    <>
      <div className="main_cart_product">
        <div className="cart_product">
          <div className="img_container">
            <img src={prodImg} alt="" />
          </div>
          <div className="pro_details">
            <span className="name">Product name</span>
            <MdClose className="close" />
            <div className="quantity_btns">
              <span>-</span>
              <span>5</span>
              <span>+</span>
            </div>
            <div className="txt">
              <span>3</span>
              <span>x</span>
              <span className="highlight">&#8377; 4235</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
