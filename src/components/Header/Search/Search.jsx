import React from "react";
import "./Search.scss";
import { MdClose } from "react-icons/md";
import prodImg from "../../../assets/products/earbuds-prod-1.webp";

const Search = ({ setShowSearch }) => {
  return (
    <>
      <div className="search_modal">
        <div className="form_field">
          <input type="text" autoFocus placeholder="Search for products" />
          <MdClose className="close_btn" onClick={() => setShowSearch(false)} />
        </div>

        <div className="search_result_content">
          <div className="search_result">
            <div className="search_result_item">
              <div className="img_container">
                <img src={prodImg} alt="" />
              </div>
              <div className="pro_details">
            <span className="name">Product name</span>
            <span className="desc">Product desc</span>
          </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
