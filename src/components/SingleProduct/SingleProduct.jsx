import React from 'react';
import "./SingleProduct.scss";
import RelatedProducts from "./RelatedProducts/RelatedProducts";
import {FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPinterest, FaCartPlus} from "react-icons/fa"
import prodImg from "../../assets/products/headphone-prod-1.webp"

const SingleProduct = () => {
  return (
    <>
    <div className="sinle_product_content">
      <div className="layout">
        <div className="single_product_page">
          <div className="left">
            <img src={prodImg} alt="product-img" />
          </div>
          <div className="right">
            <span className="name">boAt Rockerz 450 DC edition | Wireless Headphone with 40mm Dynamic Driver</span>
            <span className="price">&#8377;1999</span>
            <span className="desc">There is no better justic to your playlist & binging than Rockerz 450 boAt |
              DC edition. If low batter is your enemy, the 15HRS non-stop playback is here to rightfully combat that. Feel
              the power rising up in your veins as you indulge in your playlist with its 40mm dynamic drivers, Make adaptiveness
              your superpower just like the adaptive headband of Rockerz 450. Get ready to rule with #DcYou.  
            </span>

            <div className="card_button">
              <div className="quantity_btns">
                <span>-</span>
                <span>5</span>
                <span>+</span>
              </div>

              <button className="add_card_btns">
                <FaCartPlus SIZE={20}/>
                ADD TO CART
              </button>
            </div>

            <span className="dvider"/>

            <div className="info_item">
              <span className="txt_bold">Category : 
              <span> Headphones</span>
              </span>
              <span className="txt_bold">Share:
                <span className="socail_icons">
                  <FaFacebookF size={16}/>
                  <FaTwitter size={16}/>
                  <FaInstagram size={16}/>
                  <FaLinkedinIn size={16}/>
                  <FaPinterest size={16}/>
                </span>
              </span>
            </div>
          </div>
        </div>
        <RelatedProducts/>
      </div>
    </div>
    </>
  )
}

export default SingleProduct;
