import React, { useState } from "react";
import style from "./ProductsGrid.module.css";
import Pagination from "./Pagination";

import { BandP } from "../../Data/data";
import { FaShoppingCart } from "react-icons/fa";


const ProductsGrid = () => {
  const [count, setCount] = useState(1);
  const itemsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(BandP.length / itemsPerPage);

  const lastPg = itemsPerPage * currentPage;
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const displayedProducts = BandP.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  console.log(displayedProducts)

  const firstPg = displayedProducts[0].id;

  const countPlus = () => setCount(count + 1);

  const countMinus = () => setCount(count > 1 ? count - 1 : 1);

  console.log(BandP)
  return (
    <div className={style.productsGrid}>
      <div className={style.shopPath}>
        <p>Home/Category</p>
      </div>
      <div className={style.shopHeader}>
        <p>Groceries</p>
      </div>
      <div className={style.topBox}>
        <div className={style.results}>
          <p>{`Showing ${firstPg} - ${lastPg} of ${BandP.length}`}</p>
        </div>
        <div className={style.sortContainer}>
          <select id="dropdown">
            <option value="">Default sorting</option>
            <option value="high">Sort by price:high to low</option>
            <option value="low">Sort by price:low to high</option>
            <option value="rating">Sort by average rating</option>
            <option value="popular">Sort by popularity</option>
          </select>
        </div>
      </div>
      <div className={style.productList}>
       { displayedProducts&&displayedProducts.map((item,index)=>(
        <div className={style.productCard}>
          <div className={style.productImg}>
            <img src={item.img} alt="" />
          </div>
          <div className={style.productDetail}>
            <div className={style.category}>
              <p>{item.subCategory}</p>
            </div>
            <div className={style.name}>
              <p>{item.name}</p>
            </div>

            <div className={style.price}>
              <p>$ {item.price}</p>
            </div>
            <div className={style.rating}>
              <div className={style.counterBox}>
                <button onClick={countMinus}>-</button>
                <span>{count}</span>
                <button onClick={countPlus}>+</button>
              </div>
              <div className={style.cartButton}>
                <button>
                  <FaShoppingCart />
                </button>
              </div>
            </div>
          </div>
        </div>
       ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default ProductsGrid;
