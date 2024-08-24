import React from 'react';
import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png"

const Banner = () =>{
  return (
    <>
    <div className="hero_banner">
      <div className="content">
        <div className="text_content">
          <h1>SALES</h1>
          <p>
            Convallis interdum purus adipiscing dis parturient
            posuere as a quam eleifend montes parturient posuere
            curae tempor.
          </p>
          <div className="cats">
            <div className="banner_cat">Read More</div>
            <div className="banner_cat v2">Shop Now</div>
          </div>
        </div>
        <img className="banner_img" src={BannerImg} alt="" />
      </div>
    </div>
    </>
  )
}

export default Banner
