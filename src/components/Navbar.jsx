import React, { useEffect, useState } from "react";
import style from "./Navbar.module.css";
import logo from "../assets/Logo.png";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const [isOpen, setIsOpen] = useState(false);

  const mobileNavbarView = () => {
    setIsOpen(!isOpen);
  };
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
                <Link to="/shop" className={style.navLink}>
                  <p>Everything</p>
                </Link>
                <Link to="/shop" className={style.navLink}>
                  <p>Groceries</p>
                </Link>
                <Link to="/shop" className={style.navLink}>
                  <p>Juice</p>
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
                <div className={style.cartRight}>
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
              <Link to="/shop" className={style.navLink}>
                <p>Everything</p>
              </Link>
            </div>
            <div className={style.navMenuMb}>
              <Link to="/shop" className={style.navLink}>
                <p>Groceries</p>
              </Link>
            </div>
            <div className={style.navMenuMb}>
              <Link to="/shop" className={style.navLink}>
                <p>Juice</p>
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
    </>
  );
};

export default Navbar;
