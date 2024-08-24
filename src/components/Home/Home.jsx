import React,{useEffect} from "react";
import "./Home.scss";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Products from "../Products/Products";
import {featchApi} from "../../utils/api"

const Home = () => {

  useEffect(() =>{
    getCetegories()
  },[])

  const getCetegories = () =>{
    featchApi("/api/category").then(res => console.log(res));
  }

  return (
    <>
      <Banner />
      <div className="main_content">
        <div className="layout">
          <Category />
          <Products headingText="Popular Products"/>
        </div>
      </div>
    </>
  );
};

export default Home;
