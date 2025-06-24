import style from "./Shop.module.css";
import Sidebar from "./Sidebar";
import ProductsGrid from "./ProductsGrid";
import { useParams } from "react-router-dom";
import { useState } from "react";

const Shop = () => {
  const { category} = useParams();

  // constants
  const actualCategory = category === "everything" ? null : category;
  const [search,setSearch]=useState("");

  return (
    <div className={style.shop}>
      <div className={style.Sidebar} >

        <Sidebar search={setSearch}/>
      </div>
      <div className={style.ProductsGrid}>

        <ProductsGrid category={actualCategory} search={search}/>
      </div>
    </div>
  );
};

export default Shop;
