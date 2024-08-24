import React from "react";
import "./Footer.scss";
import {FaLocationArrow, FaMobileAlt, FaEnvelope} from "react-icons/fa"
import Payment from "../../assets/payments.png";

const Footer = () => {
  return (
    <>
      <footer className="footer_section">
        <div className="footer_content">
          <div className="col">
            <div className="title">About</div>
            <div className="txt">
              Voluptatem accusantium doloremque laudantium, totam rem aperiam,
              eaque ipsa ab illo inventore veritatis et quasi architecto beatae
              vitae dicta sunt explicabo eaque ipsa quae ab illo.
            </div>
          </div>
          <div className="col">
            <div className="title">Contact</div>
            <div className="c_item">
              <FaLocationArrow/>
              <div className="txt">
                Kayalorem Rd, Punnamada, Kottankulangara, Alappuzha, Kerala,
                688006
              </div>
              </div>
              <div className="c_item">
                <FaMobileAlt/>
                <div className="txt">Phone: 91+ 901 292 2055</div>
              </div>
              <div className="c_item">
                <FaEnvelope/>
                <div className="txt">Email: chiranjeetsingh055@gmail.com</div>
              </div>
           
          </div>
          <div className="col">
            <div className="title">Categories</div>
            <span className="txt">Headphones</span>
            <span className="txt">Smart Watches</span>
            <span className="txt">Bluetooth Speakers</span>
            <span className="txt">Wireless Earbuds</span>
            <span className="txt">Home Theatre</span>
            <span className="txt">Projectors</span>
          </div>
          <div className="col">
            <div className="title">Pages</div>
            <span className="txt">Home</span>
            <span className="txt">About</span>
            <span className="txt">Privacy Policy</span>
            <span className="txt">Returns</span>
            <span className="txt">Terms & Conditions</span>
            <span className="txt">Contact Us</span>
          </div>
        </div>

        <div className="bottom_bar">
          <div className="bottom_content">
            <div className="txt">
              JSDEVSTORE 2024 CREATED BY JS DEV, PREMIUM E-COMMERS SOLUTIONS.
            </div>
            <img src={Payment} alt="payment-Img" />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
