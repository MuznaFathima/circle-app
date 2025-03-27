import React from "react";
import style from "./Badge.module.css";
import floatingImg from "../../assets/basil-leaf.png";
import { FaArrowRight } from "react-icons/fa";
import { FaTruck } from "react-icons/fa";
import { BiSolidContact } from "react-icons/bi";
import { FaMoneyBillAlt } from "react-icons/fa";
import { FaRecycle } from "react-icons/fa";

const Badge = () => {
  return (
    <div className={style.BadgeSection}>
      <div className={style.logoImage}>
        <img src={floatingImg} alt="" />
      </div>
      <div className={style.productCard}>
        <div className={style.card}>
          <div className={style.title}>
            <p>Fresh fruits & veggies</p>
          </div>
          <div className={style.subtitle}>
            <p>
              Fresh and healthy fruits and vegetables. Straight from the farm to
              your table
            </p>
          </div>
          <div className={style.shopBtn}>
            <button>
              <span>SHOP NOW</span> <FaArrowRight />
            </button>
          </div>
        </div>
        <div className={style.card}>
          <div className={style.title}>
            <p>Bakery & Breakfast</p>
          </div>
          <div className={style.subtitle}>
            <p>
              Freshly baked bread and breakfast items.Start your day with
              something tasty.
            </p>
          </div>
          <div className={style.shopBtn}>
            <button>
              <span>SHOP NOW</span> <FaArrowRight />
            </button>
          </div>
        </div>
        <div className={style.card}>
          <div className={style.title}>
            <p>Beauty & Hygiene</p>
          </div>
          <div className={style.subtitle}>
            <p>
              Everyday essentials for skin and body care.Keep yourself fresh and
              clean.
            </p>
          </div>
          <div className={style.shopBtn}>
            <button>
              <span>SHOP NOW</span> <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
      <div className={style.footerBadge}>
        <div className={style.badge}>
          <div className={style.badgeIcon}>
            <FaTruck />
          </div>
          <div className={style.badgeContent}>
            <p>Free Shipping</p>
            <p>Above $5 Only</p>
          </div>
        </div>
        <div className={style.badge}>
          <div className={style.badgeIcon}>
            <BiSolidContact />
          </div>
          <div className={style.badgeContent}>
            <p>Certified Organic</p>
            <p>100% Guarantee</p>
          </div>
        </div>
        <div className={style.badge}>
          <div className={style.badgeIcon}>
            <FaMoneyBillAlt />
          </div>
          <div className={style.badgeContent}>
            <p>Huge Savings</p>
            <p>At Lowest Price</p>
          </div>
        </div>
        <div className={style.badge}>
          <div className={style.badgeIcon}>
            <FaRecycle />
          </div>
          <div className={style.badgeContent}>
            <p>Easy Returns</p>
            <p>No Questions Asked</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Badge;
