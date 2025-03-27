import React from "react";
import style from "./footer.module.css";
import logo from "../assets/White_Logo.png";
import { Link } from "react-router-dom";
import plStore from "../assets/play-store.png";
import appStore from "../assets/app-store.png";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.container}>
        <div className={style.primarySection}>
          <div className={style.siteLogo}>
            <img src={logo} alt="logo" />
          </div>
          <div className={style.logoText}>
            <p>
              Maecenas mi justo, interdum at consectetur vel, tristique et arcu.
              Ut quis eros blandit, ultrices diam in, elementum ex. Suspendisse
              quis faucibus urna. Suspendisse pellentesque.
            </p>
          </div>
        </div>
        <div className={style.secondarySection}>
          <div className={style.sectionTop}>
            <div className={style.headerText}>
              <h4>Quick Links</h4>
            </div>
            <div className={style.listSection}>
              <ul>
                <Link to="/about" className={style.ulLinks}>
                  <li>About</li>
                </Link>
                <li>Cart</li>
                <li>Checkout</li>
                <Link to="/contact" className={style.ulLinks}>
                  <li>Contact</li>
                </Link>
                <li>Home</li>
                <li>My account</li>
                <Link to="/shop" className={style.ulLinks}>
                  <li>Shop</li>
                </Link>
              </ul>
            </div>
          </div>
          <div className={style.sectionTop}>
            <div className={style.headerText}>
              <h4>Site Links</h4>
            </div>
            <div className={style.listSection}>
              <ul>
                <li>Privacy Policy</li>
                <li>Shipping details</li>
                <li>Offers Coupons</li>
                <li>Terms & conditions</li>
              </ul>
            </div>
          </div>
        </div>
        <div className={style.ternarySection}>
          <div className={style.sectionBox}>
            <div className={style.headerText}>
              <h4>Download Our Mobile App</h4>
            </div>
            <div className={style.subtitle}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                aliquam gravida sollicitudin. Praesent porta enim mi, non
                tincidunt libero interdum sit amet.
              </p>
            </div>
          </div>
          <div className={style.sectionBox}>
            <div className={style.headerText}>
              <h4>Quick Links</h4>
            </div>
            <div className={style.listSection}>
              <ul>
                <li>Know More About Us</li>
                <li>Visit Store</li>
                <li>Let's Connect</li>
                <li>Locate Stores</li>
              </ul>
            </div>
          </div>
          <div className={style.StoreBanner}>
            <div className={style.playStore}>
              <img src={appStore} alt="image" />
            </div>
            <div className={style.playStore}>
              <img src={plStore} alt="image" />
            </div>
          </div>
        </div>
      </div>
      <div className={style.subContainer}>
        <div className={style.gridBox}>
          <div className={style.footerContent}>
            <p>Copyright © 2025 | Organic Store</p>
          </div>
          <div className={style.footerContent}></div>
          <div className={style.footerContent}></div>
          <div className={style.footerContent}>
            <ul>
              <li><FaFacebook /></li>
              <li><FaXTwitter /></li>
              <li><FaInstagram /></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
