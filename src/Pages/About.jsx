import { useEffect, useState } from "react";
import style from "./About.module.css";
import floatingImg from "../assets/basil-leaf.png";
import bannerImg from "../assets/aboutUs.jpg";
import certificateImg from "../assets/organicBadge.png";
import logoImg from "../assets/logo_leaf.png";
import { FaRegCheckCircle } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { carouselImg } from "../Data/data";
import { FaStar } from "react-icons/fa";
const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === carouselImg.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className={style.About}>
      <div className={style.header}>
        <p>About Us</p>
      </div>
      <div className={style.aboutUs}>
        <div className={style.topContainer}>
          <div className={style.logoImage}>
            <img src={floatingImg} alt="image" />
          </div>
          <div className={style.topContent}>
            <div className={style.leftContent}>
              <div className={style.contentHeader}>
                <p>We Are Your Favourite Store.</p>
              </div>
              <div className={style.content}>
                <p>
                  Welcome to Organic store is a brand managed and operated by
                  Ecofuture LLC, a company that works across the organic,
                  natural and sustainable products supply chain aggregating best
                  genuine quality organic, natural, traditional products from
                  across the world and delivering it to national and
                  international market. Through partnerships with organic
                  farmers, farmers groups, and food artisans, sustainable
                  eco-warriors, Ecofuture offers a wide range of finest natural,
                  organic and artisanal food products originating from various
                  regions across the world.
                  <p>
                    At Organic store, we are committed to provide our customers
                    with all healthy food product options from the best
                    producers & brands across the world under one platform.
                    While customers struggle to find authentic Organic, Natural,
                    Gluten free, Non-GMO products, we hunt for the most
                    authentic, strictly tested & certified products for our
                    customers. With increasing customer&apos;s awareness and
                    interest for health conscious food, Organic store is a one
                    stop solution for all their such needs.
                    <br />
                  </p>
                </p>
              </div>
            </div>
            <div className={style.rightContent}>
              <img src={bannerImg} alt="img" />
            </div>
          </div>
          <div className={style.badge}>
            <div className={style.badgeItem}>
              <p style={{ fontSize: "24px" }}>Numbers speak for themselves!</p>
            </div>
            <div className={style.badgeItem}>
              <p>1000+</p>
              <p>Happy Customers</p>
            </div>
            <div className={style.badgeItem}>
              <p>100+</p>
              <p>Curated Products</p>
            </div>
            <div className={style.badgeItem}>
              <p>40+</p>
              <p>Categories</p>
            </div>
          </div>
          <div className={style.bottomContent}>
            <div className={style.slides}>
              <div className={style.slidesImage}>
                <img src={carouselImg[currentIndex].image} alt="image" />
              </div>

              <div className={style.slidesBox}>
                <div className={style.testimony}>
                  <div className={style.starContainer}>
                    {[...Array(5)].map((_, index) => (
                      <FaStar key={index} />
                    ))}
                  </div>
                  <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis, aut. Expedita voluptatum, totam ducimus sint, temporibus cum, quisquam necessitatibus tempora recusandae voluptatem at eveniet nesciunt? Fugit harum vero perferendis aperiam.</p>
                </div>
              
              </div>
            </div>
            <div className={style.certificate}>
              <div className={style.certificateBadge}>
                <div className={style.certificateImg}>
                  <img src={certificateImg} alt="img" />
                </div>
                <div className={style.certificateTxt}>
                  <p>Certified Products</p>
                  <p>
                    At Organic store we are committed to serve our customers
                    with highest quality certified organic & natural products
                  </p>
                </div>
              </div>
              <div className={style.certificateHeader}>
                <p>We Deal With Various Quality Organic Products!</p>
              </div>
              <div className={style.leafLogo}>
                <img src={logoImg} alt="image" />
              </div>
              <div className={style.tickContent}>
                <FaRegCheckCircle /> <span>Fresh fruits</span>
              </div>
              <div className={style.tickContent}>
                <FaRegCheckCircle /> <span>Dry fruits</span>
              </div>
              <div className={style.tickContent}>
                <FaRegCheckCircle /> <span>Fresh vegetables</span>
              </div>
              <div className={style.tickContent}>
                <FaRegCheckCircle /> <span>Beauty products</span>
              </div>
              <div className={style.tickContent}>
                <FaRegCheckCircle /> <span>Milk products</span>
              </div>
              <div className={style.tickContent}>
                <FaRegCheckCircle /> <span>Pulses</span>
              </div>
              <div className={style.shopBtn}>
                <button>
                  <FaShoppingCart /> <span>SHOP NOW</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
