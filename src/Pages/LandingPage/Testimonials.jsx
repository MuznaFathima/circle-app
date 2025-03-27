import React from "react";
import style from "./Testimonials.module.css";
import logoImg from "../../assets/logo_leaf.png";
import logoImg2 from "../../assets/leafBack.png";
import { FaStar } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const Testimonials = () => {
  return (
    <div className={style.TestimonialSection}>
      <div className={style.sectionWrapper}>
        <div className={style.title}>
          <p>Customers Reviews</p>
        </div>
        <div className={style.logoImage}>
          <img src={logoImg} alt="image" />
        </div>
        <div className={style.testimonials}>
          <div className={style.reviewBox}>
            <div className={style.ratings}>
              {[...Array(5)].map((_, index) => (
                <FaStar key={index} />
              ))}
            </div>
            <div className={style.review}>
              <p>
                I have been using each and every products from Organic store
                since two years. If you think of heating healthy then go for
                their products.
              </p>
            </div>
            <div className={style.name}>
              <p>Ash Abi</p>
            </div>
          </div>
          <div className={style.adBox}>
            <div className={style.adTitle}>
              <p>Weekend Offers Upto 50% OFF</p>
            </div>
            <div className={style.subTitle}>
              <p></p>
            </div>
            <div className={style.shopBtn}>
              <button>
                <span>SHOP NOW</span> <FaArrowRight />
              </button>
            </div>
          </div>
          <div className={style.reviewBox}>
            <div className={style.ratings}>
              {[...Array(5)].map((_, index) => (
                <FaStar key={index} />
              ))}
            </div>
            <div className={style.review}>
              <p>
                I have been using each and every products from Organic store
                since two years. If you think of heating healthy then go for
                their products.
              </p>
            </div>
            <div className={style.name}>
              <p>Ash Abi</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
