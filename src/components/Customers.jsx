import React from "react";
import style from "./Customers.module.css";
import img1 from "../assets/cape_logo.png";
import img2 from "../assets/yamaha_logo.png";
import img3 from "../assets/biocon_logo.png";
import img4 from "../assets/dell_logo.png";
import img5 from "../assets/birla_logo.png";
import img6 from "../assets/shell_logo.png";
import pplImg from "../assets/peopleImg.png";
import barImg1 from "../assets/rename.png";
import barImg2 from "../assets/mostLoved.png";
import barImg3 from "../assets/Leader.png";
import barImg4 from "../assets/rename.png";
import { FaCheck } from "react-icons/fa6";

const Customers = () => {
  return (
    <div className={style.container}>
      <div className={style.topSection}>
        <div className={style.customerBtn}>
          <p>Our Customers</p>
        </div>
        <div className={style.customerTxt}>
          <p>
            Trusted by <span>100,000+ customers </span> in 90+ countries
          </p>
        </div>
        <div className={style.customerIcons}>
          <img src={img1} alt="" />
          <img src={img2} alt="" />
          <img src={img3} alt="" />
          <img src={img4} alt="" />
          <img src={img5} alt="" />
          <img src={img6} alt="" />
        </div>
        <div className={style.subTxt}>
          <div className={style.txtContainer}>
            <div className={style.tickContainer}>
              <FaCheck />
            </div>

            <div className={style.tickContent}>
              <p>
                <span>18281 </span> signed up last month
              </p>
            </div>
          </div>
          <div className={style.txtContainer}>
            <div className={style.tickContainer}>
              <FaCheck />
            </div>

            <div className={style.tickContent}>
              <p>
                <span style={{ color: "#0cbbc7" }}>GDPR</span>- &{" "}
                <span style={{ color: "#0cbbc7" }}>CCPA</span> -ready
              </p>
            </div>
          </div>
          <div className={style.txtContainer}>
            <div className={style.tickContainer}>
              <FaCheck />
            </div>

            <div className={style.tickContent}>
              <p>
                <span>Leader@G2</span> Summer
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={style.middleSection}>
        <div className={style.middleSectionContainer}>
          <div className={style.middleSectionContent}>
            <div className={style.middleSectionBox}>
              <div className={style.promiseBtn}>
                <p>OUR PROMISE</p>
              </div>
              <div className={style.sectionHead}>
                <p>
                  Tool <span>built for people.</span>{" "}
                </p>
              </div>
              <div className={style.sectionTxt}>
                <p>
                  Whether you want to edit your Google Docs, resolve Jira
                  issues, or collaborate over Zoom.
                </p>
              </div>
              <div className={style.sectionTxt}>
                <p>
                  Circle has 100+ integrations with tools you already use and
                  love.
                </p>
              </div>
              <div className={style.sectionBtn}>
                <p>Get started free</p>
              </div>
            </div>
          </div>
          <div className={style.middleSectionImg}>
            <div className={style.pplImg}>
              <img src={pplImg} alt="img" />
            </div>
          </div>
        </div>
      </div>
      <div className={style.bottomSection}>
        <div className={style.bottomSectionBox}>
          <div className={style.promiseBtn}>
            <p>AWARDS</p>
          </div>
          <div className={style.bottomSectionHeading}>
            <p>
              An <span>award winning</span> platform,
              <span>loved by customers.</span>{" "}
            </p>
          </div>
          <div className={style.stickerMenu}>
            <div className={style.stickerBar}>
              <div className={style.barImg}>
                <img src={barImg1} alt="" />
              </div>
            </div>
            <div className={style.stickerBar}>
              <div className={style.barImg}>
                <img src={barImg2} alt="" />
              </div>
            </div>
            <div className={style.stickerBar}>
            <div className={style.barImg}>
                <img src={barImg3} alt="" />
              </div>
            </div>
            <div className={style.stickerBar}>4</div>
            <div className={style.stickerBar}>5</div>
            <div className={style.stickerBar}>6</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;
