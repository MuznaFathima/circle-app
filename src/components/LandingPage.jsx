import React from "react";
import style from "./LandingPage.module.css";
import logo from "../assets/Circle_logo.png";
import { MdOutlineNavigateNext } from "react-icons/md";
import peopleImg from "../assets/coverImage.png";
const LandingPage = () => {
  return (
    <div className={style.container}>
      <div className={style.navbar}>
        <div className={style.navMenu}>
          <div className={style.menuContent}>
            <p>Features</p>
            <p>Pricing</p>
            <p>Testimonials</p>
            <p>Resources</p>
          </div>
        </div>
        <div className={style.logoContainer}>
          <img src={logo} alt="logo" />
        </div>
        <div className={style.navMenu}>
          <div className={style.menuContent}>
            <p>Company</p>
            <p>Contact</p>
            <button>Login</button>
          </div>
        </div>
      </div>

      <div className={style.coverPage}>
        <div className={style.coverPageHeader}>
          <div className={style.coverTopHeader}>
            <p>
              A powerful online engagement tool that's intuitive and simple to
              use.
            </p>
          </div>
          <div className={style.coverSubHeader}>
            <p>
              With stellar one-click reports and unmatched support, see how
              Circle will make a difference in your business.
            </p>
          </div>
          <div className={style.coverPageBtn}>
            <div className={style.coverPageBtnTxt}>
              {" "}
              <p>Get started free</p>
            </div>
            <div className={style.coverPageBtnIc}>
              {" "}
              <MdOutlineNavigateNext />
            </div>
          </div>
        </div>
        <div className={style.coverPageBottom}></div>
        <div className={style.coverPageImage}>
          <div className={style.coverCloud}>

            <img src={peopleImg} alt="" />
          </div>
          <div className={style.coverCloud}>

            <img src={peopleImg} alt="" />
          </div>
          <div className={style.coverCloud}>

            <img src={peopleImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
