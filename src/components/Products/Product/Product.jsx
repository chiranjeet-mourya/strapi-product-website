import React from 'react'
import "./Product.scss";
import prodImg1 from "../../../assets/products/headphone-prod-1.webp"
import prodImg2 from "../../../assets/products/headphone-prod-2.webp"
import prodImg3 from "../../../assets/products/headphone-prod-3.webp"
import prodImg4 from "../../../assets/products/headphone-prod-4.webp"
import prodImg5 from "../../../assets/products/headphone-prod-5.webp"
import prodImg6 from "../../../assets/products/headphone-prod-6.webp"

import watchImg7 from "../../../assets/products/watch-prod-1.webp"
import watchImg8 from "../../../assets/products/watch-prod-2.webp"
import watchImg9 from "../../../assets/products/watch-prod-3.webp"

import spekerImg1 from "../../../assets/products/speaker-prod-1.webp"
import spekerImg2 from "../../../assets/products/speaker-prod-2.webp"
import spekerImg3 from "../../../assets/products/speaker-prod-3.webp"
import spekerImg4 from "../../../assets/products/speaker-prod-4.webp"
import spekerImg5 from "../../../assets/products/speaker-prod-5.webp"

import earbudsImg1 from "../../../assets/products/earbuds-prod-1.webp"
import earbudsImg2 from "../../../assets/products/earbuds-prod-2.webp"
import earbudsImg3 from "../../../assets/products/earbuds-prod-3.webp"
import earbudsImg4 from "../../../assets/products/earbuds-prod-4.webp"
import earbudsImg5 from "../../../assets/products/earbuds-prod-5.webp"


const Product = () => {
  return (
    <>
    <div className="product_card">
      <div className="thumbnail">
        <img src={prodImg1} alt="product" />
      </div>
      <div className="pro_details">
        <div className="name">boAt Rockerz 450 DC edition | Wireless...</div>
        <div className="price">&#8377;1999</div>
      </div>
    </div>
    <div className="product_card">
      <div className="thumbnail">
        <img src={prodImg2} alt="product" />
      </div>
      <div className="pro_details">
        <div className="name">Rockerz 550 Over Ear Bluetooth Headphone...</div>
        <div className="price">&#8377;1799</div>
      </div>
    </div>
    <div className="product_card">
      <div className="thumbnail">
        <img src={prodImg3} alt="product" />
      </div>
      <div className="pro_details">
        <div className="name">Rockerz 400</div>
        <div className="price">&#8377;1299</div>
      </div>
    </div>
    <div className="product_card">
      <div className="thumbnail">
        <img src={prodImg4} alt="product" />
      </div>
      <div className="pro_details">
        <div className="name">Trebel Rockerz 550 Wireless Bluetooth</div>
        <div className="price">&#8377;1999</div>
      </div>
    </div>
    <div className="product_card">
      <div className="thumbnail">
        <img src={prodImg5} alt="product" />
      </div>
      <div className="pro_details">
        <div className="name">Rockerz 450 Superman Dc Edition | Wireless</div>
        <div className="price">&#8377;1990</div>
      </div>
    </div>
    <div className="product_card">
      <div className="thumbnail">
        <img src={prodImg6} alt="product" />
      </div>
      <div className="pro_details">
        <div className="name">boAt Wave Neo | 1.69" HD Display upto...</div>
        <div className="price">&#8377;1799</div>
      </div>
    </div>

    <div className="product_card">
      <div className="thumbnail">
        <img src={watchImg7} alt="product" />
      </div>
      <div className="pro_details">
        <div className="name">boAt Wave Neo | 1.69" HD Display upto...</div>
        <div className="price">&#8377;1799</div>
      </div>
    </div>
    <div className="product_card">
      <div className="thumbnail">
        <img src={watchImg8} alt="product" />
      </div>
      <div className="pro_details">
        <div className="name">boAt lris Round Dial Smart watch with ...</div>
        <div className="price">&#8377;4499</div>
      </div>
    </div>
    <div className="product_card">
      <div className="thumbnail">
        <img src={watchImg9} alt="product" />
      </div>
      <div className="pro_details">
        <div className="name">boAt Vertex | Smartwatch with Fitness Tr...</div>
        <div className="price">&#8377;2299</div>
      </div>
    </div>

    <div className="product_card">
      <div className="thumbnail">
        <img src={spekerImg1} alt="product" />
      </div>
      <div className="pro_details">
        <div className="name">Stone 1500F | 14W boAt Singature Sounde</div>
        <div className="price">&#8377;3999</div>
      </div>
    </div>
    <div className="product_card">
      <div className="thumbnail">
        <img src={spekerImg2} alt="product" />
      </div>
      <div className="pro_details">
        <div className="name">Stone 352 - Wireless Portable Bluetooth</div>
        <div className="price">&#8377;1699</div>
      </div>
    </div>
    <div className="product_card">
      <div className="thumbnail">
        <img src={spekerImg3} alt="product" />
      </div>
      <div className="pro_details">
        <div className="name">Stone 1000v2</div>
        <div className="price">&#8377;2999</div>
      </div>
    </div>
    <div className="product_card">
      <div className="thumbnail">
        <img src={spekerImg4} alt="product" />
      </div>
      <div className="pro_details">
        <div className="name">boAt Stone 500 - Portable Bluetooth Sounde</div>
        <div className="price">&#8377;1999</div>
      </div>
    </div>
    <div className="product_card">
      <div className="thumbnail">
        <img src={spekerImg5} alt="product" />
      </div>
      <div className="pro_details">
        <div className="name">Party Pal 60</div>
        <div className="price">&#8377;4999</div>
      </div>
    </div>

    <div className="product_card">
      <div className="thumbnail">
        <img src={earbudsImg1} alt="product" />
      </div>
      <div className="pro_details">
        <div className="name">Trebel Airdopes 141 | 8mm drivers, upto...</div>
        <div className="price">&#8377;1499</div>
      </div>
    </div>
    <div className="product_card">
      <div className="thumbnail">
        <img src={earbudsImg2} alt="product" />
      </div>
      <div className="pro_details">
        <div className="name">Airdopes 131 DC edition with 13mm  Drivers</div>
        <div className="price">&#8377;1399</div>
      </div>
    </div>
    <div className="product_card">
      <div className="thumbnail">
        <img src={earbudsImg3} alt="product" />
      </div>
      <div className="pro_details">
        <div className="name">boAt Airdopes 141 Pro | 12mm Drivers upto</div>
        <div className="price">&#8377;1499</div>
      </div>
    </div>
    <div className="product_card">
      <div className="thumbnail">
        <img src={earbudsImg4} alt="product" />
      </div>
      <div className="pro_details">
        <div className="name">boAt Airdopes 441 | Wireless Earbuds with upto</div>
        <div className="price">&#8377;2499</div>
      </div>
    </div>
    <div className="product_card">
      <div className="thumbnail">
        <img src={earbudsImg5} alt="product" />
      </div>
      <div className="pro_details">
        <div className="name">boAt Trebel Airdopes 402 | In-Ear Earbuds</div>
        <div className="price">&#8377;1999</div>
      </div>
    </div>
    </>
  )
}

export default Product