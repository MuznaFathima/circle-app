import  { useEffect, useState } from "react";
import style from "./Navbar.module.css";
import logo from "../assets/Logo.png";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BandP } from "../Data/data";
import { IoIosCloseCircleOutline } from "react-icons/io";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const mobileNavbarView = () => {
    setIsOpen(!isOpen);
  };

  const toggleCartVisibility = () => {
    if (location.pathname === "/cart" || location.pathname === "/checkout") {
      setCartOpen(false);
    } else {
      setCartOpen(!cartOpen);
    }
  };

  const handleViewCart = () => {
    navigate("/cart");
    setCartOpen(false);
  };
  // products array
  const productsList = BandP.slice(0, 4);
  console.log(productsList);
  // background color according to path
  const navClass =
    location.pathname === "/contact" || location.pathname === "/about"
      ? style.greyBg
      : style.whiteBg;

  // height adjustment for mobile navbar
  useEffect(() => {
    const handleResize = () => {
      document.documentElement.style.setProperty(
        "--app-height",
        `${window.innerHeight}px`
      );
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // cart open overlay
  useEffect(() => {
    if (cartOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [cartOpen]);
  return (
    <>
      <div className={`${style.container} ${navClass}`}>
        <div className={style.navbarWrap}>
          <div className={style.navBarGrid}>
            <div className={style.leftSection}>
              <div className={style.siteLogo}>
                <Link to="/">
                  <img src={logo} alt="" />
                </Link>
              </div>
              <div className={style.navMenu}>
                <Link to="/shop/everything" className={style.navLink}>
                  <p>Everything</p>
                </Link>
                <Link to="/shop/Groceries" className={style.navLink}>
                  <p>Groceries</p>
                </Link>
                <Link to="/shop/Beauty&Personal Care" className={style.navLink}>
                  <p>Beauty & Personal Care</p>
                </Link>
              </div>
            </div>
            <div className={style.rightSection}>
              <div className={style.navMenu}>
                <Link to="/about" className={style.navLink}>
                  <p>About</p>
                </Link>
                <Link to="/contact" className={style.navLink}>
                  <p>Contact</p>
                </Link>
              </div>
              <div className={style.cartContainer}>
                <div className={style.cartLeft}>
                  <p>$300</p>
                </div>
                <div className={style.cartRight} onClick={toggleCartVisibility}>
                  <MdOutlineShoppingBag />
                  <span>1</span>
                </div>
              </div>
              <div className={style.profile}>
                <FaUser />
                <IoMenu onClick={mobileNavbarView} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <>
          <div className={style.overlay}></div>

          <div className={`${style.mobileNavbar} ${isOpen ? style.open : ""}`}>
            <div className={style.closeBar} onClick={() => setIsOpen(false)}>
              <IoIosClose />
            </div>
            <div className={style.userIcon}>
              <FaUser />
            </div>
            <div className={style.navMenuMb}>
              <Link to="/shop/everything" className={style.navLink}>
                <p>Everything</p>
              </Link>
            </div>
            <div className={style.navMenuMb}>
              <Link to="/shop/Groceries" className={style.navLink}>
                <p>Groceries</p>
              </Link>
            </div>
            <div className={style.navMenuMb}>
              <Link to="/shop/Beauty&Personal Care" className={style.navLink}>
                <p>Beauty&Personal Care</p>
              </Link>
            </div>
            <div className={style.navMenuMb}>
              <Link to="/about" className={style.navLink}>
                <p>About</p>
              </Link>
            </div>
            <div className={style.navMenuMb}>
              <Link to="/contact" className={style.navLink}>
                <p>Contact</p>
              </Link>
            </div>
          </div>
        </>
      )}
      {cartOpen && (
        <>
          <div className={style.overlayCart}></div>
          <div className={style.cart}>
            <div className={style.cartHeader}>
              <div className={style.cartTitle}>
                <p>Shopping Cart</p>
              </div>
              <div className={style.cartClose}>
                <IoIosClose onClick={toggleCartVisibility} />
              </div>
            </div>

            <div className={style.cartStatus}>
              <div className={style.cartContent}>
                {productsList.length > 0 ? (
                  <div className={style.ProductsList}>
                    {productsList.map((item, i) => (
                      <div
                        className={`${style.productCards} ${
                          i === productsList.length - 1 ? style.lastCard : ""
                        }`}
                        key={i}
                      >
                        <div className={style.productImg}>
                          <img src={item.img} alt="" />
                        </div>
                        <div className={style.productDetail}>
                          <div className={style.DetailLeft}>
                            <p>{item.name}</p>
                            <div className={style.countPrice}>
                              {" "}
                              <p>1 x</p>
                              <span>${item.price}</span>
                            </div>
                          </div>
                          <div className={style.DetailRight}>
                            <IoIosCloseCircleOutline />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className={style.noProducts}>
                    <p>No Products in the cart</p>
                  </div>
                )}
              </div>
              {/* <div className={style.cartButtons} onClick={toggleCartVisibility}>
                <button>CONTINUE SHOPPING</button>
              </div> */}
              <div className={style.cartButtonsOn}>
                <div className={style.subTotal}>
                  <p>SubTotal:</p>
                  <p>$ 25.00</p>
                </div>
                <div className={style.buttonGrp}>
                  <button onClick={handleViewCart}>VIEW CART</button>
                  <button>CHECKOUT</button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
