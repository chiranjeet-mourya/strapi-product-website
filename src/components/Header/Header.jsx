import React,{useEffect, useState} from 'react';
import { Link } from "react-router-dom";

import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";

import Search from "./Search/Search";
import Cart from "../Cart/Cart";
import { FaBars } from "react-icons/fa6";
// import {Context } from "../../utils/Context";

import "./Header.scss";

const Header = () =>{

  const [scrolled,setScrolled] = useState(false);
  const [showCart,setShowCart] = useState(false);
  const [showSearch,setShowSearch] = useState(false);
  const [menuOpen,setMenuOpen] = useState(false)

  const handleScroll = () =>{
    const offset = window.scrollY;
    // console.log(offset);
    if(offset > 200){
      setScrolled(true)
    }else{
      setScrolled(false)
    }
  };

  useEffect(() =>{
    window.addEventListener("scroll", handleScroll)
  },[])

  return (
    <>
    <header className={`main_header ${scrolled ? "sticky_header" : ""}`}>
      <FaBars className="bars" onClick={() =>{setMenuOpen(!menuOpen)}}/>
      <div className="header_content" >
        <ul className={menuOpen ? "open" : ""}>
          <Link to="">Home</Link>
          <Link to="">About</Link>
          <Link to="/category">Categories</Link>
          <Link to="/product">Product</Link>
        </ul>
        
        <div className="center">JSDEVSTORE.</div>
        <div className="right">
          <TbSearch onClick={()=> setShowSearch(true)}/>
          <AiOutlineHeart/>
          <span className="cart_icon" onClick={()=> setShowCart(true)}>
            <CgShoppingCart/>
            <span>5</span>
            </span>
        </div>
      </div>
    </header>
    {showCart && <Cart setShowCart={setShowCart}/>}
    {showSearch && <Search setShowSearch={setShowSearch}/>}
    </>
  )
}

export default Header