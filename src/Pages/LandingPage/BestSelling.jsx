import style from "./BestSelling.module.css";
import logoImg from "../../assets/logo_leaf.png";
import { FaShoppingCart } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/slice/productList";
import { useNavigate } from "react-router-dom";

const BestSelling = () => {
  const dispatch = useDispatch();
  const navigate=useNavigate();

  // states
  const [count, setCount] = useState(1);
  const BsProducts = useSelector((state) => state.products.data);

  // functions
  const countPlus = () => setCount(count + 1);
  const countMinus = () => setCount(count > 1 ? count - 1 : 1);
   const handleProductNavigation = (id) => {
    navigate(`/product/${id}`);
  };


  // API call

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
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
          {BsProducts &&
            BsProducts.filter((product) =>
              product.tags?.includes("bestselling")
            ).map((product) => (
              <div className={style.productCard} key={product._id}   onClick={() => handleProductNavigation(product._id)}>
                <div className={style.productImg}>
                  <img src={product.image} alt="image" />
                </div>
                <div className={style.productDetail}>
                  <div className={style.category}>
                    <p>{product.category}</p>
                  </div>
                  <div className={style.name}>
                    <p>Jamun Juice 500ml</p>
                  </div>

                  <div className={style.price}>
                    <p>$ {product.price}</p>
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
      </div>
    </div>
  );
};

export default BestSelling;
