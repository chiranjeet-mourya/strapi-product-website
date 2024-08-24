import React from 'react';
import "./Category.scss";
import Cat1 from '../../../assets/category/cat-1.jpg'
import Cat2 from '../../../assets/category/cat-2.jpg'
import Cat3 from '../../../assets/category/cat-3.jpg'
import Cat4 from '../../../assets/category/cat-4.jpg'

const Category = () =>{
  return (
    <>
    <div className="shop_category">
      <div className="categories">
        <div className="category">
          <img src={Cat1} alt="" />
        </div>
        <div className="category">
          <img src={Cat2} alt="" />
        </div>
        <div className="category">
          <img src={Cat3} alt="" />
        </div>
        <div className="category">
          <img src={Cat4} alt="" />
        </div>
      </div>
    </div>
    </>
  )
}

export default Category
