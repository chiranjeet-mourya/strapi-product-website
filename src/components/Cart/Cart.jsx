import React from 'react'
import "./Cart.scss";
import CartItem from "./CartItem/CartItem"

//icons
import {MdClose} from "react-icons/md";
import {BsCartX} from "react-icons/bs";

const Cart=({setShowCart}) =>{
  return (
    <>
    <div className="cart_panel">
      <div className="opce_layer"></div>
      <div className="cart_content">
        <div className="cart_header">
          <span className="heading">Shopping Cart</span>
          <span className="close_btn" onClick={()=> setShowCart(false)}>
            <MdClose/>
            </span>
        </div>

        {/* <div className="empty_cart">
          <BsCartX/>
          <span>No products in the cart.</span>
          <button className="return_shop">RETURN TO SHOP</button>
        </div> */}

        <>
        <CartItem/>
        <div className="cart_footer">
          <div className="subtotal">
            <span className="txt">Subtotal:</span>
            <span className="txt total">&#8377;1234</span>
          </div>
          <div className="button">
            <button className="check">Checkout</button>
          </div>
        </div>
        </>
      </div>
    </div>
    </>
  )
}

export default Cart