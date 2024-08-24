import React from 'react';
import "./Products.scss";
import Product from "./Product/Product"

const Products = ({innerPage,headingText}) =>{
  return (
    <>
    <div className="product_container">
      {!innerPage && <div className="sec_heading">{headingText}</div>}
      <div className="products">
        <Product/>
      </div>
    </div>
    </>
  )
}

export default Products