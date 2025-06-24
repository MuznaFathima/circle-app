import { useEffect, useState } from "react";
import style from "./ProductsGrid.module.css";
import Pagination from "./Pagination";

import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/slice/productList";

const ProductsGrid = ({category,search}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // States

  const [count, setCount] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [sort,setSort]=useState("")


  // constants

  const itemsPerPage = 9;
  const products = useSelector((state) => state.products.data);
 
  const totalPages = Math.ceil(products.length / itemsPerPage);
  
 

  // pagination logic

  const lastPg = itemsPerPage * currentPage;

  const displayedProducts = products.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const firstPg = (currentPage - 1) * itemsPerPage + 1;
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // quantity functions

  const countPlus = () => setCount(count + 1);
  const countMinus = () => setCount(count > 1 ? count - 1 : 1);

  // navigation
  const handleProductNavigation = (id) => {
    navigate(`/product/${id}`);
  };
  //debug

  console.log("products per page", displayedProducts);
  console.log("products", products);

  // Effects

  useEffect(() => {
    dispatch(fetchProducts({category,search,sort}));
  }, [category,search,sort,dispatch]);
  return (
    <div className={style.productsGrid}>
      <div className={style.shopPath}>
        <p>Home/ {category}</p>
      </div>
      <div className={style.shopHeader}>
        
        {category===null?<p>Shop</p>:<p>{category}</p>}
      </div>
      <div className={style.topBox}>
        <div className={style.results}>
          <p>{`Showing ${firstPg} - ${lastPg} of ${products.length}`}</p>
        </div>
        <div className={style.sortContainer}>
          <select id="dropdown" onChange={(e) => setSort(e.target.value)}>
            <option value="">Default sorting</option>
            <option value="price_desc">Sort by price:high to low</option>
            <option value="price_asc">Sort by price:low to high</option>
            <option value="">Sort by average rating</option>
            <option value="">Sort by popularity</option>
          </select>
        </div>
      </div>
      <div className={style.productList}>
        {displayedProducts &&
          displayedProducts.map((item, index) => (
            <div
              className={style.productCard}
              key={index}
              onClick={()=>handleProductNavigation(item._id)}
            >
              <div className={style.productImg}>
                <img src={item.image} alt="" />
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

// useParams are react hooks that used to access dynamic parts of url. this can be only used inside components rendered by a <Route>
// it returns a object in which its key is URL param name and value as param's value 
// eg: {category:"dress"}
// const params=useParams();  then  const category=params.category
// or you can directly destructure it
// const {category}=useParams()

// query string is a part of the URL that allows us to pass data from client to server and vice-versa in the form of parameters and their values.
// http://test.com?name=John&age=21
// Here, the portion following the question mark (?) is the query string.



// useNavigate hook returns a function and by calling that function we can change the URL