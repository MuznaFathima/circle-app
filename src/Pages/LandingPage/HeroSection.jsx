import React from "react";
import style from "./HeroSection.module.css";
import heroImg from "../../assets/home_hero.png";
import logoImg from "../../assets/logo_leaf.png";
import { FaShoppingCart } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div className={style.heroSection}>
      <div className={style.leftRow}>
        <div className={style.heroImage}>
          <img src={heroImg} alt="hero" />
        </div>
      </div>
      <div className={style.rightRow}>
        <div className={style.rowContent}>
          <div className={style.logoImage}>
            <img src={logoImg} alt="image" />
          </div>
          <div className={style.preTitle}>
            <p>Best Quality Products</p>
          </div>
          <div className={style.title}>
            <p>Join The Organic Movement!</p>
          </div>
          <div className={style.subTitle}>
            <p>
              Bringing nature's finest to your table, nurturing health, family,
              and community with every bite.
            </p>
          </div>
          <div className={style.shopBtn}>
            <button>
              <FaShoppingCart  /> <span>SHOP NOW</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
