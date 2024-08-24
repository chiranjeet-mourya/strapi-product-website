import React from 'react'
import "./Newsletter.scss";

//icons
import {FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn} from "react-icons/fa"

const Newsletter = () =>{
  return (
    <>
    <div className="news_section">
      <div className="news_content">
        <span className="small_text">Newslatter</span>
        <span className="big_text">
          Sign up for latest updates and offers
        </span>
        <div className="form">
          <input type="text" placeholder='Email Address'/>
          <button>Subscribe</button>
        </div>
        <div className="text">
          will be used in accordance with our <span className="prp">Privacy Policy</span>
        </div>
        <div className="social_icons">
          <div className="icon">
            <FaFacebookF size={14}/>
          </div>
          <div className="icon">
            <FaTwitter size={14}/>
          </div>
          <div className="icon">
            <FaInstagram size={14}/>
          </div>
          <div className="icon">
            <FaLinkedinIn size={14}/>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Newsletter
