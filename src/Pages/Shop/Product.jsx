import style from "./Product.module.css";
import image from "../../assets/lip1.jpg";
import { useEffect, useState } from "react";
import product1 from "../../assets/jamun_juice.jpg";
import product2 from "../../assets/pasta.png";
import product3 from "../../assets/rice.png";
import { useParams } from "react-router-dom";
import { fetchProductById } from "../../redux/slice/productById";
import { useDispatch, useSelector } from "react-redux";

const Product = () => {

  const dispatch=useDispatch();

  const {id}=useParams();
 

  const [activeTab, setActiveTab] = useState(0);
  const data=useSelector((state)=>state.productsById.data);
  console.log(data)

  useEffect(()=>{
   dispatch(fetchProductById(id)) 
  },[id,dispatch])

  return (
    <div className={style.product}>
      <div className={style.productMenu}>
        <div className={style.Image}>
          <img src={data?.image}></img>
        </div>
        <div className={style.description}>
          <div className={style.tags}>
            <p>Home/</p>
            <p>{data?.category}/</p>
            <p>{data?.subCategory}</p>
          </div>
          <div className={style.title}>
            <p>{data?.name}</p>
          </div>
          <div className={style.subtitle}>
            <p>${data?.price}</p>
          </div>
          <div className={style.toCart}>
            <div className={style.countBox}>
              <div className={style.totalBox}>
                <input type="number" min="0" max="25" step="1" />
              </div>
            </div>
            <div className={style.toCartButton}>
              <button>ADD TO CART</button>
            </div>
          </div>
          <div className={style.box}>
            <span className={style.boxLabel}>
              <p>Guaranteed Safe Checkout</p>
            </span>
            <div className={style.boxContent}>
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={style.reviewBox}>
        <div className={style.sliderContainer}>
          <div className={style.descriptionBtn} onClick={() => setActiveTab(0)}>
            <div
              className={activeTab === 0 ? style.active : style.slider}
            ></div>
            <div className={style.content}>
              <p>Description</p>
            </div>
          </div>
          <div className={style.reviewBtn} onClick={() => setActiveTab(1)}>
            <div
              className={activeTab === 1 ? style.active : style.slider}
            ></div>
            <div className={style.content}>
              <p>Reviews</p>
            </div>
          </div>
        </div>
        <div className={style.boxContents}>
          {activeTab === 0 ? (
            <>
              <div className={style.descContent}>
                <p>
                 {data?.description}
                </p>
              </div>
            </>
          ) : (
            <>
              <div className={style.reviewBox}>reviews</div>
            </>
          )}
        </div>
      </div>
      <div className={style.relatedProducts}>
        <div className={style.relatedTitle}>
            <p>Related Products</p>
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
                    
                    </div>
                  </div>
                  
                 
                 
                </div>
      </div>
    </div>
  );
};

export default Product;

// useDispatch hook is given by react-redux
// It gives you access to the store's dispatch function inside your React component 
