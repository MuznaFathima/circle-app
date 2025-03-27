import React, { useState } from "react";
import style from "./BestSelling.module.css";
import logoImg from "../../assets/logo_leaf.png";
import product1 from "../../assets/jamun_juice.jpg";
import product2 from "../../assets/pasta.png";
import product3 from "../../assets/rice.png";
import product4 from "../../assets/matcha_powder.png";
import product5 from "../../assets/sunfloweroil.jpg";
import product6 from "../../assets/peanutbutter.jpg";
import logo2 from "../../assets/basil-leaf.png";


import { FaShoppingCart } from "react-icons/fa";

const BestSelling = () => {
  const [count, setCount] = useState(1);

  const countPlus = () => setCount(count + 1);

  const countMinus = () => setCount(count > 1 ? count - 1 : 1);
  return (
    <div className={style.BestSellingSection}>
      <div className={style.sectionWrapper}>
        <div className={style.title}>
          <p>Best Selling Products</p>
        </div>
        <div className={style.logoImage}>
          <img src={logoImg} alt="image" />
        </div>
        <div className={style.products}>
          <div className={style.productCard}>
            <div className={style.productImg}>
              <img src={product1} alt="" />
            </div>
            <div className={style.productDetail}>
              <div className={style.category}>
                <p>Groceries</p>
              </div>
              <div className={style.name}>
                <p>Jamun Juice 500ml</p>
              </div>

              <div className={style.price}>
                <p>$ 34</p>
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
          <div className={style.productCard}>
            <div className={style.productImg}>
              <img src={product2} alt="" />
            </div>
            <div className={style.productDetail}>
              <div className={style.category}>
                <p>Groceries</p>
              </div>
              <div className={style.name}>
                <p>Delverde pasta</p>
              </div>

              <div className={style.price}>
                <p>$ 34</p>
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
          <div className={style.productCard}>
            <div className={style.productImg}>
              <img src={product3} alt="" />
            </div>
            <div className={style.productDetail}>
              <div className={style.category}>
                <p>Groceries</p>
              </div>
              <div className={style.name}>
                <p>Organic wild rice</p>
              </div>

              <div className={style.price}>
                <p>$ 34</p>
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
          <div className={style.productCard}>
            <div className={style.productImg}>
              <img src={product4} alt="" />
            </div>
            <div className={style.productDetail}>
              <div className={style.category}>
                <p>Groceries</p>
              </div>
              <div className={style.name}>
                <p>Organic Matcha Powder</p>
              </div>

              <div className={style.price}>
                <p>$ 34</p>
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
          <div className={style.productCard}>
            <div className={style.productImg}>
              <img src={product5} alt="" />
            </div>
            <div className={style.productDetail}>
              <div className={style.category}>
                <p>Groceries</p>
              </div>
              <div className={style.name}>
                <p>Sunflower oil 500ml</p>
              </div>

              <div className={style.price}>
                <p>$ 34</p>
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
          <div className={style.productCard}>
            <div className={style.productImg}>
              <img src={product6} alt="" />
            </div>
            <div className={style.productDetail}>
              <div className={style.category}>
                <p>Juice</p>
              </div>
              <div className={style.name}>
                <p>Organic sprouted peanut butter 500g</p>
              </div>

              <div className={style.price}>
                <p>$ 34</p>
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
        </div>
      </div>
      
    </div>
  );
};

export default BestSelling;
