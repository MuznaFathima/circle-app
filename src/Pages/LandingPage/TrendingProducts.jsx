import { useEffect, useState } from "react";
import style from "./TrendingProducts.module.css";
import logoImg from "../../assets/logo_leaf.png";
import { fetchProducts } from "../../redux/slice/productList";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const TrendingProducts = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // states
  const [count, setCount] = useState(1);

  const trProducts = useSelector((state) => state.products.data);
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
          <p>Trending Products</p>
        </div>
        <div className={style.logoImage}>
          <img src={logoImg} alt="image" />
        </div>
        <div className={style.products}>
          {trProducts &&
            trProducts
              .filter((product) => product.tags?.includes("trending"))
              .map((product) => (
                <div
                  className={style.productCard}
                  key={product._id}
                  onClick={() => handleProductNavigation(product._id)}
                >
                  <div className={style.productImg}>
                    <img src={product.image} alt="image" />
                  </div>
                  <div className={style.productDetail}>
                    <div className={style.category}>
                      <p>{product.category}</p>
                    </div>
                    <div className={style.name}>
                      <p>{product.name}</p>
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

export default TrendingProducts;
